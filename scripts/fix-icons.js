const fs = require("fs");
const path = require("path");

const srcDir = path.join(__dirname, "..", "src");

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fullPath));
    } else if (file.endsWith(".tsx") || file.endsWith(".ts")) {
      results.push(fullPath);
    }
  });
  return results;
}

const files = walk(srcDir);
console.log(`Found ${files.length} ts/tsx files.`);

files.forEach((filePath) => {
  let content = fs.readFileSync(filePath, "utf8");

  // Find imports from 'lucide-react'
  // Match: import { ... } from "lucide-react";
  const importRegex = /import\s+([\s\S]*?)\s+from\s+['"]lucide-react['"]/g;

  let match;
  let modified = false;

  // To avoid modifying while iterating, we will collect all replacements
  const replacements = [];

  while ((match = importRegex.exec(content)) !== null) {
    const fullImportStatement = match[0];
    const importedSection = match[1];

    // Parse individual imports inside { ... }
    // e.g. ChevronDownIcon, CheckIcon as Something, etc.
    // For simplicity, find all words ending with "Icon"
    // that are part of the imported names.
    // Let's extract names inside curly braces
    const braceMatch = importedSection.match(/\{([\s\S]*?)\}/);
    if (braceMatch) {
      const items = braceMatch[1].split(",");
      const updatedItems = [];
      const renameMap = {};

      items.forEach((item) => {
        const trimmed = item.trim();
        if (!trimmed) return;

        // Match standard imports like ChevronDownIcon
        // or ChevronDownIcon as Something
        if (trimmed.includes(" as ")) {
          const parts = trimmed.split(/\s+as\s+/);
          const original = parts[0].trim();
          const alias = parts[1].trim();
          if (original.endsWith("Icon")) {
            const fixedOriginal = original.slice(0, -4);
            updatedItems.push(`${fixedOriginal} as ${alias}`);
            modified = true;
          } else {
            updatedItems.push(trimmed);
          }
        } else if (trimmed.endsWith("Icon")) {
          const fixed = trimmed.slice(0, -4);
          updatedItems.push(fixed);
          renameMap[trimmed] = fixed;
          modified = true;
        } else {
          updatedItems.push(trimmed);
        }
      });

      if (modified) {
        // Construct the new import section
        const newImportedSection = importedSection.replace(
          /\{([\s\S]*?)\}/,
          `{ ${updatedItems.join(", ")} }`
        );
        replacements.push({
          search: fullImportStatement,
          replace: `import ${newImportedSection} from "lucide-react"`,
          renameMap,
        });
      }
    }
  }

  if (modified) {
    replacements.forEach((rep) => {
      content = content.replace(rep.search, rep.replace);

      // Now replace all occurrences of each renamed icon in the file body
      Object.keys(rep.renameMap).forEach((oldName) => {
        const newName = rep.renameMap[oldName];

        // Use word boundary to avoid replacing substrings
        const wordRegex = new RegExp(`\\b${oldName}\\b`, "g");
        content = content.replace(wordRegex, newName);
        console.log(
          `Renamed in ${path.relative(srcDir, filePath)}: ${oldName} -> ${newName}`
        );
      });
    });

    fs.writeFileSync(filePath, content, "utf8");
  }
});

console.log("Done!");
