// A tiny progressive enhancer for Amicro-inspired pointer interactions.
// Content and navigation remain complete when this script is unavailable.

export const microInteractionsScript = String.raw`
(() => {
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const entries = Array.from(
    document.querySelectorAll("[data-magnetic], [data-tilt]")
  ).map((element) => ({ element, rect: null, frame: 0 }));

  const reset = (entry) => {
    window.cancelAnimationFrame(entry.frame);
    entry.rect = null;
    entry.element.removeAttribute("data-motion-active");
    entry.element.style.setProperty("--micro-x", "0px");
    entry.element.style.setProperty("--micro-y", "0px");
    entry.element.style.setProperty("--tilt-x", "0deg");
    entry.element.style.setProperty("--tilt-y", "0deg");
    entry.element.style.setProperty("--tilt-lift", "0px");
  };

  entries.forEach((entry) => {
    const element = entry.element;

    element.addEventListener(
      "pointerenter",
      (event) => {
        if (
          event.pointerType !== "mouse" ||
          !finePointer.matches ||
          reduceMotion.matches
        ) {
          return;
        }

        entry.rect = element.getBoundingClientRect();
        element.setAttribute("data-motion-active", "true");
      },
      { passive: true }
    );

    element.addEventListener(
      "pointermove",
      (event) => {
        if (
          event.pointerType !== "mouse" ||
          !finePointer.matches ||
          reduceMotion.matches
        ) {
          return;
        }

        const rect = entry.rect || element.getBoundingClientRect();
        entry.rect = rect;
        const relativeX = (event.clientX - rect.left) / rect.width - 0.5;
        const relativeY = (event.clientY - rect.top) / rect.height - 0.5;

        window.cancelAnimationFrame(entry.frame);
        entry.frame = window.requestAnimationFrame(() => {
          if (element.hasAttribute("data-magnetic")) {
            const strength = Number(
              element.getAttribute("data-magnetic-strength") || "0.1"
            );
            element.style.setProperty(
              "--micro-x",
              (relativeX * rect.width * strength).toFixed(2) + "px"
            );
            element.style.setProperty(
              "--micro-y",
              (relativeY * rect.height * strength).toFixed(2) + "px"
            );
          }

          if (element.hasAttribute("data-tilt")) {
            const strength = Number(
              element.getAttribute("data-tilt-strength") || "3"
            );
            element.style.setProperty(
              "--tilt-x",
              (-relativeY * strength * 2).toFixed(2) + "deg"
            );
            element.style.setProperty(
              "--tilt-y",
              (relativeX * strength * 2).toFixed(2) + "deg"
            );
            element.style.setProperty(
              "--tilt-lift",
              element.hasAttribute("data-tilt-flat") ? "0px" : "-3px"
            );
          }
        });
      },
      { passive: true }
    );

    element.addEventListener("pointerleave", () => reset(entry), {
      passive: true,
    });
  });

  const invalidateBounds = () => {
    entries.forEach((entry) => {
      entry.rect = null;
    });
  };

  window.addEventListener("resize", invalidateBounds, { passive: true });
  window.addEventListener("scroll", invalidateBounds, { passive: true });
  reduceMotion.addEventListener("change", (event) => {
    if (event.matches) {
      entries.forEach(reset);
    }
  });
  finePointer.addEventListener("change", (event) => {
    if (!event.matches) {
      entries.forEach(reset);
    }
  });
})();
`;
