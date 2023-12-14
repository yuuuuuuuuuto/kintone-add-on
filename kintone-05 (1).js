// const body = {
//     app: kintone.app.getId(),
//     id: 1
//   };

//   kintone.api(kintone.api.url('/k/v1/record.json', true), 'GET', body, (resp) => {
//     // success
//     console.log(resp);
//   }, (error) => {
//     // error
//     console.log(error);
// });

////////////////////////////////////////////////////////////////////////////////////////////////
(function () {
  "use strict";
  const events = [
    "app.record.create.change.レコードID",
    "app.record.edit.change.レコードID",
  ];
  console.log("0");
  kintone.events.on(events, async (event) => {
    const targetAppId = kintone.app.getLookupTargetAppId("ルックアップ");
    const targetRecordId = event.record["レコードID"].value;
    console.log("1");
    if (!targetRecordId) {
      event.record["活動履歴"].value = [];
      return event;
    }

    const body = {
      app: targetAppId,
      id: targetRecordId,
    };
    console.log("2");
    await kintone
      .api(kintone.api.url("/k/v1/record.json", true), "GET", body)

      .then((resp) => {
        console.log(resp);
        event.record["活動履歴"].value = resp.record["活動履歴"].value;
        console.log("3");
        event.record["活動履歴"].value.forEach(function (obj) {
          Object.keys(obj.value).forEach(function (params) {
            obj.value[params].disabled = true;
          });
        });

        kintone.app.record.set(event);
      })
      .catch((err) => {
        window.alert("エラー");
      });
  });
})();
