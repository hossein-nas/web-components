import icons from "@tapsioss/icons";
import Mustache from "mustache";
import { exec } from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { promisify } from "node:util";
import { ensureDirExists, getFileMeta } from "../../../scripts/utils.ts";

const execCmd = promisify(exec);

const { dirname } = getFileMeta(import.meta.url);

const packageDir = path.resolve(dirname, "..");
const distDir = path.join(packageDir, "dist");
const templatesDir = path.join(packageDir, "templates");

const iconTemplate = path.join(templatesDir, "web-icon.txt");
const elementTemplate = path.join(templatesDir, "element.txt");
const componentBarrelTemplate = path.join(templatesDir, "componentBarrel.txt");

const tsconfigCjsFile = path.join(packageDir, "tsconfig.cjs.json");
const tsconfigEsmFile = path.join(packageDir, "tsconfig.esm.json");
const baseIconFile = path.join(packageDir, "src/base-icon.ts");

const removeDirsExcept = async (dirPath: string, excluded: string[]) => {
  const items = await fs.readdir(dirPath);

  const rmPromises: Array<Promise<void>> = [];

  for (const item of items) {
    const itemPath = path.join(dirPath, item);

    if (!excluded.includes(item)) {
      rmPromises.push(fs.rm(itemPath, { recursive: true, force: true }));
    }
  }

  return Promise.all(rmPromises);
};

const generateComponents = async () => {
  console.log("🧩 generating web icons...");

  await ensureDirExists(distDir);

  const [iconTemplateStr, elementTemplateStr, componentBarrelTemplateStr] =
    await Promise.all([
      fs.readFile(iconTemplate, {
        encoding: "utf-8",
      }),
      fs.readFile(elementTemplate, {
        encoding: "utf-8",
      }),
      fs.readFile(componentBarrelTemplate, {
        encoding: "utf-8",
      }),
    ]);

  const webComponentPromises = Object.keys(icons).map(async key => {
    const iconInfo = icons[key]!;

    const paths = iconInfo.paths.map(({ d, clipRule, fillRule, xlinkHref }) => {
      const props = [
        `d="${d}"`,
        clipRule ? `clip-rule="${clipRule}"` : null,
        fillRule ? `fill-rule="${fillRule}"` : null,
        xlinkHref ? `xlink:href="${xlinkHref}"` : null,
      ];

      return `<path ${props.filter(Boolean).join(" ")} />`;
    });

    const webIconCode = Mustache.render(
      iconTemplateStr,
      {
        name: iconInfo.pascalName,
        paths: paths.join(""),
        elementTag: iconInfo.kebabName,
      },
      {},
      { escape: v => v as string },
    );

    const elementCode = Mustache.render(
      elementTemplateStr,
      {
        name: iconInfo.pascalName,
        elementTag: iconInfo.kebabName,
      },
      {},
      { escape: v => v as string },
    );

    const componentBarrelCode = Mustache.render(
      componentBarrelTemplateStr,
      {
        elementTag: iconInfo.kebabName,
      },
      {},
      { escape: v => v as string },
    );

    const iconDir = path.join(distDir, iconInfo.kebabName);

    await ensureDirExists(iconDir);

    return Promise.all([
      fs.writeFile(path.join(iconDir, "element.ts"), elementCode, {
        encoding: "utf-8",
        flag: "w",
      }),
      fs.writeFile(path.join(iconDir, "index.ts"), componentBarrelCode, {
        encoding: "utf-8",
        flag: "w",
      }),
      fs.writeFile(
        path.join(iconDir, `${iconInfo.kebabName}.ts`),
        webIconCode,
        {
          encoding: "utf-8",
          flag: "w",
        },
      ),
      fs.appendFile(
        path.join(distDir, "index.ts"),
        `export * from "./${iconInfo.kebabName}/index.ts";\n`,
        {
          encoding: "utf-8",
        },
      ),
    ]);
  });

  await Promise.all(webComponentPromises);
  await execCmd(["shx", "cp", baseIconFile, distDir].join(" "));

  await Promise.all([
    execCmd(["tsc", "--project", tsconfigCjsFile].join(" ")),
    execCmd(["tsc", "--project", tsconfigEsmFile].join(" ")),
  ]);

  await removeDirsExcept(distDir, ["cjs", "esm"]);

  console.log("✅ web icons generated.");
};

void (async () => {
  console.time("build");
  await generateComponents();
  console.timeEnd("build");
})();
