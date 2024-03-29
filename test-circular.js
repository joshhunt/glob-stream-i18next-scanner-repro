const map = require("map-stream");
const gs = require("glob-stream");

const glob = "./**/*.txt";

console.log("glob:", glob);
console.log("");

gs(glob).pipe(
  map((file, cb) => {
    console.log(file.path.replace(process.cwd(), ""));
    cb(null, file);
  })
);
