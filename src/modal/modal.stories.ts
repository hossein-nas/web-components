import { type Meta } from "@storybook/web-components";
import "@tapsioss/icons/dist/icons/circle-check-fill";
import { html, type TemplateResult } from "lit";
import "../button";
import "./index.js";

export default {
  title: "Components/Modal",
  component: "tap-modal",
  argTypes: {
    open: { control: "boolean" },
  },
} as Meta;

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  open: boolean;
  alignment: string;
  layout: string;
  isBannerFullWidth: boolean;
}

const renderActions = (layout: string) =>
  layout === "vertical"
    ? html` <div
        slot="actions"
        style="display: flex; flex-direction: column; gap: 12px"
      >
        <tap-button
          tabindex="0"
          style="width:100%"
          >عنوان دکمه</tap-button
        >
        <tap-button
          tabindex="0"
          style="width:100%"
          variant="ghost"
          >عنوان دکمه</tap-button
        >
      </div>`
    : html` <div
        slot="actions"
        style="display: flex; gap: 12px"
      >
        <tap-button
          tabindex="0"
          style="width:100%"
          >عنوان دکمه</tap-button
        >
        <tap-button
          tabindex="0"
          style="width:100%"
          variant="ghost"
          >عنوان دکمه</tap-button
        >
      </div>`;

const renderBanner = (isBannerFullWidth: boolean) =>
  isBannerFullWidth
    ? html` <img
        alt="banner"
        slot="banner"
        src="https://picsum.photos/600/200"
      />`
    : html` <tap-icon-circle-check-fill
        height="64"
        width="64"
        color="var(--tap-palette-green-300)"
        slot="banner"
      ></tap-icon-circle-check-fill>`;

const Template: Story<ArgTypes> = ({
  open,
  alignment,
  layout,
  isBannerFullWidth,
}: ArgTypes) => html`
  <tap-modal
    .open=${open}
    .alignment=${alignment}
    .isBannerFullWidth=${isBannerFullWidth}
    title="عنوان را وارد کنید"
    description="این محل نوشتن توضیح این مودال است. لطفاً متن مورد نظر را اینجا بنویسید"
  >
    ${renderBanner(isBannerFullWidth)} ${renderActions(layout)}
  </tap-modal>
`;

export const Modal = Template.bind({});

Modal.args = {
  open: true,
  alignment: "right",
  layout: "horizontal",
  isBannerFullWidth: true,
};
