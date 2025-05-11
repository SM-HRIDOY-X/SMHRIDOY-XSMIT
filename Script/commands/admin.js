const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
  name: "admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "ullash",
  description: "Show Owner Info",
  commandCategory: "info",
  usages: "",
  cooldowns: 5
};

module.exports.run = async function ({ api, event }) {
  const currentTime = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

  const sendInfo = () => api.sendMessage({
    body:
      "\n┏━━━━━━━━━━━━━━━━━━━━━━━┓\n" +
      "┃        𝐎𝐖𝐍𝐄𝐑 𝐈𝐍𝐅𝐎         \n" +
      "┣━━━━━━━━━━━━━━━━━━━━━━━┫\n" +
      "┃ 𝐍𝐚𝐦𝐞     : 𝐒.𝐌-𝐇𝐫𝐢𝐝𝐨𝐲\n" +
      "┃ 𝐆𝐞𝐧𝐝𝐞𝐫   : Male\n" +
      "┃ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧  : In a Complicated\n" +
      "┃ 𝐀𝐠𝐞     : 𝟸𝟹\n" +
      "┃ 𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧  : Islam\n" +
      "┃ 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 : 𝙷𝙾𝙽𝚄𝚁𝚂 𝙵𝙸𝙽𝙰𝙻 𝚈𝙴𝙰𝚁\n" +
      "┃ 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝙱𝙰𝚁𝙸𝚂𝙰𝙻, Bangladesh\n" +
      "┣━━━━━━━━━━━━━━━━━━━━━━━┫\n" +
      "┃ 𝐓𝐢𝐤𝐓𝐨𝐤    : smhridoyariyan420\n" +
      "┃ 𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦 : https://t.me/smhridoy007\n" +
      "┃ 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : https://www.facebook.com/Hridoy.tera.bap.agaya/\n" +
      "┣━━━━━━━━━━━━━━━━━━━━━━━┫\n" +
      "┃ Updated Time: " + currentTime + "\n" +
      "┗━━━━━━━━━━━━━━━━━━━━━━━┛",
    attachment: fs.createReadStream(__dirname + "/cache/1.png")
  }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"));

  const avatarUrl = "https://graph.facebook.com/513453703/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662";

  return request(encodeURI(avatarUrl))
    .pipe(fs.createWriteStream(__dirname + "/cache/1.png"))
    .on("close", () => sendInfo());
};
