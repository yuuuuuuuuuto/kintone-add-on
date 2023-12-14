/*
 * kintone JavaScript Client sample program (for kintone environment)
 * Copyright (c) 2020 Cybozu
 *
 * Licensed under the MIT License
 * https://opensource.org/licenses/mit-license.php
 */

(() => {
  "use strict";
  kintone.events.on("app.record.index.show", async (event) => {
    try {
      // クライアントの作成
      const client = new KintoneRestAPIClient();

      // リクエストパラメータの設定
      const APP_ID = kintone.app.getId();
      const RECORD_ID = 1;
      const params = {
        app: APP_ID,
        id: RECORD_ID,
      };

      // レコードの取得
      const resp = await client.record.getRecord(params);
      console.log(resp.record);
    } catch (err) {
      console.log(err);
    }
  });
})();
