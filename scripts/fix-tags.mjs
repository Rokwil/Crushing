import fs from "fs";
import path from "path";

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full);
    else if (full.endsWith(".tsx")) {
      let content = fs.readFileSync(full, "utf8");
      const original = content;
      content = content.replace(/<motion className/g, "<div className");
      content = content.replace(/<\/motion>/g, "</" + "di" + "v>");
      if (content !== original) {
        fs.writeFileSync(full, content);
        console.log("fixed", full);
      }
    }
  }
}

walk("src");
