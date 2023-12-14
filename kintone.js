(() => {
  "use strict";
  const events = [
    "app.record.create.show",
    "app.record.create.submit",
    "app.record.detail.show",
    "app.record.edit.show",
    "app.record.edit.submit",
    "app.record.create.change.部署名",
    "app.record.edit.change.部署名",
  ];
  //   kintone.events.on(events, function (event) {
  //     if (event.record.部署名.value === "情報システム部") {
  //       kintone.app.record.setGroupFieldOpen("情報システム部グループ", true);
  //       kintone.app.record.setGroupFieldOpen("ソリューション営業グループ", false);
  //       kintone.app.record.setGroupFieldOpen("営業グループ", false);
  //     } else if (event.record.部署名.value === "ソリューション営業") {
  //       kintone.app.record.setGroupFieldOpen("情報システム部グループ", false);
  //       kintone.app.record.setGroupFieldOpen("ソリューション営業グループ", true);
  //       kintone.app.record.setGroupFieldOpen("営業グループ", false);
  //     } else {
  //       kintone.app.record.setGroupFieldOpen("情報システム部グループ", false);
  //       kintone.app.record.setGroupFieldOpen("ソリューション営業グループ", false);
  //       kintone.app.record.setGroupFieldOpen("営業グループ", true);
  //     }
  //     return event;
  //   });
  // })();
  kintone.events.on(events, function (event) {
    const name = event.record.部署名.value;
    switch (name) {
      case "情報システム部":
        kintone.app.record.setGroupFieldOpen("情報システム部グループ", true);
        break;
      case "ソリューション営業":
        kintone.app.record.setGroupFieldOpen(
          "ソリューション営業グループ",
          true
        );
        break;
      case "営業部":
        kintone.app.record.setGroupFieldOpen("営業グループ", true);
        break;
      default:
        kintone.app.record.setGroupFieldOpen("情報システム部グループ", false);
        kintone.app.record.setGroupFieldOpen(
          "ソリューション営業グループ",
          false
        );
        kintone.app.record.setGroupFieldOpen("営業グループ", false);
    }
  });
})();
