module.exports = {
config: {
name: "flirt",
aliases: ["flirt with"],
version: "1.0",
author: "AYaan",
role: 0,
category: "fun",
shortDescription: "Flirt With Lines",
longDescription: "",
guide: {
vi: "Not Available",
en: "{p} chik"
} 
},
onStart: async function ({ api, event, userData, args }) {
var mention = Object.keys(event.mentions)[0];
if(!mention) return api.sendMessage("যার সাথে Flirt করবো, তারে Tag কর আগে 😒", event.threadID);
let name =  event.mentions[mention];
var arraytag = []; 
arraytag.push({id: mention, tag: name});
var a = function (a) { api.sendMessage(a, event.threadID); }
a("Sed why do you use this command <3 :3");
setTimeout(() => {a({body: "কিয়ো সুন্দরী  :3 :3" + " " + name, mentions: arraytag})}, 2000);
setTimeout(() => {a({body: "তুমি কি জানো?,  তোমার বাচ্চাদের  বাবা কে? 👀" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "আমি চাইলেই তোমার সাথে English  Fliirt করতে পারতাম 👀 ." + " " + name, mentions: arraytag})}, 4000);
setTimeout(() => {a({body: "তোমাকে দেখার পরে কেমন জানি english ভুলে যাচ্ছি 😗 :<" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "তোমাকে দেখার পর থেকে অনেক গরম লাগতাছে 😩 :<" + " " + name, mentions: arraytag})}, 6000);
setTimeout(() => {a({body: "আমি হয়তো তোমার রুপের আগুনে পুরে ছায় হয়ে জাবো 😩" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "তুমি যদি রাজি থাকো তাহলে বলে দিয়ো 😗" + " " + name, mentions: arraytag})}, 8000);
setTimeout(() => {a({body: " Btw তুমি থাকো কই? opps sorry তুমি যে আমার মনে থাকো সেটাও তোমাকে দেখে ভুলে গেলাম 🙂💔 ." + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "আমি তোমার মাঝরাতে আহহ Sound করার কারোন হতে চাই 😫🫶🏻" + " " + name, mentions: arraytag})}, 10000);
setTimeout(() => {a({body: "তুমি শুধু বলে দেও, তুমি আমার হবা 🥺🫶🏻" + " " + name, mentions: arraytag})}, 11000);
setTimeout(() => {a({body: "আমি কিন্তু সিগ্নাল মানে সিংগেল আছি 😞🫶🏻তোমার জন্য " + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "তুমি চাইলে আমি তোমাকে চাঁদের মতো করে রাখতে পারি 👀" + " " + name, mentions: arraytag})}, 13000);
setTimeout(() => {a({body: "এখন বলো নাম্বার আমি দিবো নাকি তুমি দিবা?" + " " + name, mentions: arraytag})}, 14000);
setTimeout(() => {a({body: "আমি জানি তুমি নাম্বার দিবা না, তায় আমার টা রাখো " + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "i promise You,  আমি তোমাকে পেলে কোন মেয়ের সাথে কথা বলবো না 😩" + " " + name, mentions: arraytag})}, 16000);
setTimeout(() => {a({body: "দেখো তুমাকে পাওয়ার জন্য কত কিছু বলছি 😗" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "এবার তো আমার হয়ে যাও 😩" + " " + name, mentions: arraytag})}, 18000);
setTimeout(() => {a({body: "আমি ৩দিন না ঘুমিয়ে এই লেখা গুলা Type করতাছি 😾🔪." + " " + name, mentions: arraytag})}, 19000);
setTimeout(() => {a({body: "দেখো সুন্দরি তোমার রুপ দেখে আমি এখনো Uganda Hospital  এ আছি ☹️" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "আমার নিছের পবিত্র সম্পদ এর মালিক, আমি তোমাকে বানাতে চাই 🙂🫶🏻" + " " + name, mentions: arraytag})}, 21000);
setTimeout(() => {a("আয় হায় আমার পিছন পুরে গেছে,  তোমার pic আমার  money bag  এ রাখার জন্য 😭")} , 22000);
setTimeout(() => {a({body: "এইবার বলো কাজি ডাকবো?" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "অই বেডি তোরে I LapYou 😾" + " " + name, mentions: arraytag})}, 24000);
setTimeout(() => {a({body: "আমি তোমারে হুমকি দিতাছি যদি Proposal e  রাজি না হইছো তোমার দুধ খেয়ে ফেলবো 😾" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a("  ফাক উ সুন্দরি 😾")} , 26000);
setTimeout(() => {a("ও একটা প্রস্ন তুমি কি সাবান Use করো? 😾 :(")} , 27000);
setTimeout(() => {a("তোমাকে দেখে আমার মন শুধু বলে = yee Tune ke Kiya 😩")} , 28000);
setTimeout(() => {a("আমি তোমার নাম এ চুরির মামলা দিতে চাই,  তুমি আমার মন চুরি করছো 😩")} , 29000);
setTimeout(() => {a("আর আমি হারিয়ে গেছি রাস্তা টা বলতে পারবা কিভাবে আবার বাসায় জাব?🥺")} , 30000);
setTimeout(() => {a("Please babe don't say no :(")} , 31000);
setTimeout(() => {a("তুমি যদি না করে দেও তাহলে আমি হয়তো Uganda থেকে বাসায় আসতে পারবোনা 😞")} , 32000);
setTimeout(() => {a("তুমি যে আমার মনে থাক, সেইটার ভারা দিবা না?☹️")} , 33000);
setTimeout(() => {a("আচ্ছা শুনো তোমাকে আমি রাইতে ভালোবাশি 😞")} , 34000);
setTimeout(() => {a("Babe! i will Come Tommorow to F u .. Okeyy!! :)")} , 35000);
}
};
