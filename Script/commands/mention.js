module.exports.config = {
  'name': "goiadmin",
  'version': "1.0.0",
  'hasPermssion': 0x0,
  'credits': "𝐂𝐘𝐁𝐄𝐑 ☢️_𖣘 -𝐁𝐎𝐓 ⚠️ 𝑻𝑬𝑨𝑴_ ☢️",
  'description': "Bot will rep ng tag admin or rep ng tagbot ",
  'commandCategory': "Other",
  'usages': '',
  'cooldowns': 0x1
};
module.exports.handleEvent = function ({
  api: _0x242514,
  event: _0x1ec2d5
}) {
  if (_0x1ec2d5.senderID !== "100001498060696") {
    var _0x2dc479 = ["100001498060696"];
    for (const _0x2bee35 of _0x2dc479) {
      if (Object.keys(_0x1ec2d5.mentions) == _0x2bee35) {
        var _0x3a7db6 = ["ডাকাডাকি করিস না বস ব্যস্ত আছে 😒😌", "বস এক আবালে আপনাকে মেনশন দিছে 😑🌚😁", "যেভাবে মেনশন দিতাচত মনে হয় তোর গার্লফ্রেন্ডটারে , আমার বসকে দিয়া দিবি 🫥😒", "বস এক পাগল ছাগল , আপনাকে ডাকতেছে 🐸🫵🏾", "বস এক হালায় আপনার নাম ধরছে , আপনি শুধু একবার আদেশ করুন, আজকে হালার নানিরে চমলক্ক করে দিমু 😑🥴", "মেনশন না দিয়া একটা girlfriend খুজে দে 🙃😮‍💨", "মাইয়া হলে বসের ইনবক্স এ যাও", "বস এখন ব্যস্ত আছে , কিছু বলতে হলে ইনবক্স এ গিয়া বল ", "বস এখন আমার সাথে মিটিং এ আছে , মেনশন দিস না 🙂", "বস এখন ব্যস্ত আছে , কি বলবি আমাকে বল ", "মেনশন না দিয়া বস বল বস 🥵💋", "তাকে ডাকার আগে একবার আয়নায় নিজেকে দেখে নে—এই লেভেলের মানুষকে ডাকার সাহস সবার হয় না!"];
        return _0x242514.sendMessage({
          'body': _0x3a7db6[Math.floor(Math.random() * _0x3a7db6.length)]
        }, _0x1ec2d5.threadID, _0x1ec2d5.messageID);
      }
    }
  }
};
module.exports.run = async function ({}) {};
