import {promises as fs} from "node:fs"

async function stripComments(filepath) {
  let content = await fs.readFile(filepath, "utf8");

  content = content.replace(/\{\s*\/\*.*?\*\/\s*\}/gs, "");

  const pattern =
    /("(?:\\.|[^"\\])*"|'(?:\\.|[^\'\\])*'|`(?:\\.|[^`\\])*`|\/\*.*?\*\/|\/\/[^\r\n]*)/gs;

  content = content.replace(pattern, (match) => {
    if (match.startsWith("/") || match.startsWith("//")) {
      return "";
    }
    return match;
  });

  const lines = content.split(/\r?\n/);
  const cleanedLines = [];
  let prevEmpty = false;
  for (const line of lines) {
    if (!line.trim()) {
      if (!prevEmpty) {
        cleanedLines.push("");
        prevEmpty = true;
      }
    } else {
      cleanedLines.push(line);
      prevEmpty = false;
    }
  }

  content = cleanedLines.join("\n") + "\n";
  fs.writeFileSync(filepath, content, "utf8");
}

const args = process.argv.slice(2);
for (const filepath of args) {
  stripComments(filepath);
  console.log(`Successfully stripped comments from ${filepath}`);
}
