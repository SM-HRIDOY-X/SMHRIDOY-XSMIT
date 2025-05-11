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
      "┃        OWNER INFO         \n" +
      "┣━━━━━━━━━━━━━━━━━━━━━━━┫\n" +
      "┃ Name      : 𝐒.𝐌-𝐇𝐫𝐢𝐝𝐨𝐲\n" +
      "┃ Gender    : Male\n" +
      "┃ Relation  : In a Complicated\n" +
      "┃ Age       : 21\n" +
      "┃ Religion  : Islam\n" +
      "┃ Education : Diploma in Agriculture\n" +
      "┃ Address   : Noakhali, Bangladesh\n" +
      "┣━━━━━━━━━━━━━━━━━━━━━━━┫\n" +
      "┃ TikTok    : ullash01\n" +
      "┃ Telegram  : https://t.me/The_morning_star71\n" +
      "┃ Facebook  : https://www.facebook.com/profile.php?id=100086680386976\n" +
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
