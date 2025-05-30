import { html, type TemplateResult } from "lit";
import type { DirectiveResult } from "lit/async-directive.js";
import { property } from "lit/decorators.js";
import { classMap, type ClassMapDirective } from "lit/directives/class-map.js";
import { BaseChatBubble, baseStyles } from "../base/index.ts";
import {
  STATUS_TO_ICON_MAP,
  STATUS_TO_LOCALE_MAP,
  type States,
} from "./constants.ts";
import styles from "./in.style.ts";

/**
 * @summary Displays the user entered chat message bubble.
 *
 * @tag tapsi-chat-bubble-in
 */
export class ChatBubbleIn extends BaseChatBubble {
  /** @internal */
  public static override readonly styles = [baseStyles, styles];

  /**
   * The status of the chat element.
   *
   * @prop {"sent" | "seen" | "pending" | "failed"} status
   * @attr {"sent" | "seen" | "pending" | "failed"} status
   * @default "sent"
   */
  @property()
  public status: States = "sent";

  constructor() {
    super();

    this.author = "in";
  }

  protected override renderPreContent(): TemplateResult | null {
    if (this.status !== "failed") return null;

    const icon = STATUS_TO_ICON_MAP.failed;

    return html`
      <div
        class="failure-indicator"
        part="failure-indicator"
      >
        ${icon}
      </div>
    `;
  }

  protected override renderFooterContent(): TemplateResult | null {
    if (this.status === "failed") return null;

    const stateMessage = STATUS_TO_LOCALE_MAP[this.status];
    const icon = STATUS_TO_ICON_MAP[this.status];

    return html`
      <div
        class="status"
        part="status"
      >
        ${icon}
        <span>${stateMessage}</span>
      </div>
    `;
  }

  protected override getRootClasses(): DirectiveResult<
    typeof ClassMapDirective
  > {
    return classMap({
      root: true,
      [this.author]: true,
      [this.status]: true,
      "fully-rounded": this.fullyRounded,
    });
  }
}
