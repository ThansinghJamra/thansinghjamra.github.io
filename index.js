console.log("Hello, this is a test script running successfully!");
const { exec } = require("child_process");

exec("ffmpeg -loop 1 -i quiz.png -c:v libx264 -t 10 -pix_fmt yuv420p output.mp4", (err, stdout, stderr) => {
    if (err) {
        console.error(`Error: ${err.message}`);
        return;
    }
    console.log("Video generated: output.mp4");
});
