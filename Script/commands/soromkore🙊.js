const fs = require("fs");

module.exports.config = {
  name: "🙊",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Joshua Sy",
  usePrefix: false,
  description: "Scooby Doo template memes",
  commandCategory: "voice",
  usages: "user",
  cooldowns: 5,
  dependencies: {}
};

module.exports.handleEvent = function ({ api, event }) {
  const { threadID, messageID, body } = event;
  const content = body ? body.toLowerCase() : "";

  if (content.startsWith("🙊")  content.startsWith("🫢")  content.startsWith("🤭")) {
    const msg = {
      body: "আ্ঁমি্ঁ ব্ঁলু্ঁম্ঁ না্ঁ আ্ঁমা্ঁর্ঁ স্ঁর্ঁম্ঁ ক্ঁরে্ঁ,🤐🤭",
      attachment: fs.createReadStream(__dirname + "/Hridoy/sorom.mp3")
    };

    api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😺", messageID, (err) => {}, true);
  }
};

module.exports.run = function () {};
