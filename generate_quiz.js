const { createCanvas } = require("canvas");
const fs = require("fs");

const width = 800;
const height = 400;

// कैनवास बनाना
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");

// बैकग्राउंड कलर सेट करना
ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, width, height);

// टेक्स्ट ऐड करना
ctx.fillStyle = "#000000";
ctx.font = "bold 30px Arial";
ctx.fillText("GK Quiz Question?", 50, 100);

// इमेज को सेव करना
const buffer = canvas.toBuffer("image/png");
fs.writeFileSync("quiz.png", buffer);

console.log("quiz.png इमेज जनरेट हो गई!");

