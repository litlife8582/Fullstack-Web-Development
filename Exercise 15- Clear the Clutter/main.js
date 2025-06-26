import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "C:\\Users\\Mayuk\\Fullstack\\Exercise 15- Clear the Clutter";

let files = await fs.readdir(basePath);

console.log(files);

for (const item of files) {

  let ext = item.split(".")[item.split(".").length - 1];
  console.log(ext);
  
  if (item.split(".").length > 1 && ext != "js" && ext != "json") {
    if (fsn.existsSync(path.join(basePath, ext))) {
      fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
    } else {
      fs.mkdir(ext);
    }
  }
  console.log(item);
}
