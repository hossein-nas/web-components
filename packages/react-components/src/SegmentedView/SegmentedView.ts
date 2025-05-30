import * as LitReact from "@lit/react";
import * as React from "react";

import {
  registerSegmentedView,
  SegmentedViewActiveChangeEvent,
  SegmentedView as SegmentedViewElementClass,
  SegmentedViewItemSlots,
  SegmentedViewSlots,
} from "@tapsioss/web-components";

registerSegmentedView();

export const SegmentedView = LitReact.createComponent({
  tagName: "tapsi-segmented-view",
  elementClass: SegmentedViewElementClass,
  react: React,
  events: {
    onActiveChange:
      "activechange" as LitReact.EventName<SegmentedViewActiveChangeEvent>,
  },
});

export {
  SegmentedViewActiveChangeEvent,
  SegmentedViewItemSlots,
  SegmentedViewSlots,
};
