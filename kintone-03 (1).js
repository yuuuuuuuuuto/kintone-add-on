(function () {
  "use strict";
  let events = [
    "app.record.create.show",
    "app.record.edit.show",
    "app.record.create.change.生年月日",
    "app.record.edit.change.生年月日",
  ];

  kintone.events.on(events, function (event) {
    let date = new Date(event.record["生年月日"].value);
    let today = new Date();
    event.record["年齢"].value = calcAge(date, today);

    return event;
  });

  function calcAge(birthdate, targetdate) {
    let age = targetdate.getFullYear() - birthdate.getFullYear();
    let birthday = new Date(
      targetdate.getFullYear(),
      birthdate.getMonth(),
      birthdate.getDate()
    );
    if (targetdate < birthday) {
      age--;
    }
    return age;
  }
})();
