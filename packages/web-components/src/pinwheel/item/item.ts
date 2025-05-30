import { html, LitElement } from "lit";
import { property } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import { logger } from "../../utils/index.ts";
import ItemSelectionController from "./Controller.ts";
import styles from "./item.style.ts";

/**
 * @summary The item part of the Pinwheel component.
 *
 * @tag tapsi-pinwheel-item
 *
 * @slot - The default slot for the content.
 */
export class PinwheelItem extends LitElement {
  /** @internal */
  public static override readonly styles = [styles];

  private _selected = false;

  /**
   * Indicates whether the item is selected or not.
   *
   * @prop {boolean} selected
   * @attr {string} selected
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  public get selected(): boolean {
    return this._selected;
  }

  public set selected(isSelected: boolean) {
    const prevSelected = this.selected;

    if (prevSelected === isSelected) return;

    this._selected = isSelected;
    this.requestUpdate("selected", prevSelected);
    this._selectionController.handleSelectionChange();
  }

  /**
   * The value associated with the item.
   * This value has to be unique among sibling items.
   *
   * @prop {string} value
   * @attr {string} value
   * @default ""
   */
  @property()
  public value = "";

  private readonly _selectionController = new ItemSelectionController(this);

  protected override render() {
    if (!this.value) {
      logger(
        `Expected a valid \`value\` property/attribute. Received \`${this.value}\`.`,
        "pinwheel-item",
        "error",
      );
    }

    const rootClasses = classMap({
      root: true,
      selected: this.selected,
    });

    return html`
      <div
        id="root"
        aria-hidden="true"
        class=${rootClasses}
        part="root"
        data-value=${this.value}
        @click=${this._selectionController.handleClick}
      >
        <slot></slot>
      </div>
    `;
  }
}
