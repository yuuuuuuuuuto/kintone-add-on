(() => {
  "use strict";

  kintone.events.on("app.record.index.show", (event) => {
    const records = event.records;

    const el = kintone.app.getFieldElements("製品名");

    for (let i = 0; i < el.length; i++) {
      const name = records[i].製品名.value;
      switch (name) {
        case "Garoon":
          el[i].style.backgroundColor = "#010f29";
          break;
        case "kintone":
          el[i].style.backgroundColor = "#f8c620";
          break;
        case "Office":
          el[i].style.backgroundColor = "#acdbda";
          break;
        default:
          el[i].style.backgroundColor = "";
      }
    }

    return event;
  });
})();
