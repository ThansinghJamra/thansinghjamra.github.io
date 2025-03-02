const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

// HD Image Size (1920x1080)
const width = 1920;
const height = 1080;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background Color
ctx.fillStyle = '#ffffff';
ctx.fillRect(0, 0, width, height);

// Text Styling
ctx.fillStyle = '#000000';
ctx.font = 'bold 60px Arial';
ctx.fillText('GK Quiz Question?', 100, 300);

// Save Image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync('quiz.png', buffer);
console.log("Quiz image saved as quiz.png in HD quality!");
