(() => {
  "use strict";
  kintone.events.on("app.record.index.show", (event) => {
    const divElement = document.createElement("div");
    divElement.className = "kintone-customize";
    divElement.textContent = "Hello World";

    const element = kintone.app.getHeaderMenuSpaceElement();
    element.appendChild(divElement);
    return event;
  })();
})();
