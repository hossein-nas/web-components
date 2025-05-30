import * as LitReact from "@lit/react";
import * as React from "react";

import {
  PinwheelGroup as PinwheelGroupElementClass,
  PinwheelGroupSlots,
  registerPinwheelGroup,
} from "@tapsioss/web-components";

registerPinwheelGroup();

export const PinwheelGroup = LitReact.createComponent({
  tagName: "tapsi-pinwheel-group",
  elementClass: PinwheelGroupElementClass,
  react: React,
  events: {},
});

export { PinwheelGroupSlots };
