import React from "react";
import { createRoot } from "react-dom/client";
import { defineShadowElement } from "./shadow-dom";

function renderer(
  App: React.ReactNode,
  options: {
    tag: string;
    containerId: string;
    containerClassName: string;
  }
) {
  defineShadowElement(options.tag, options.containerId).setup({
    onBefore: (container) => {
      container.classList.add(options.containerClassName);
    },
    onReady(element, shadowElement) {
      createRoot(shadowElement).render(App);
    },
  });
}

export { renderer };
