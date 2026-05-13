/**
 * Renomeia arquivos estáticos que contenham ".." no nome dentro de out/
 * e atualiza todas as referências em HTML e JS.
 *
 * GitHub Pages (Fastly CDN) interpreta ".." em nomes de arquivo como
 * path traversal e retorna 404. Este script substitui ".." por "--".
 */

import { readdirSync, renameSync, readFileSync, writeFileSync, statSync } from "fs";
import { join, extname } from "path";

const OUT_DIR = "out";

function walkDir(dir) {
  const entries = readdirSync(dir);
  let files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files = files.concat(walkDir(full));
    } else {
      files.push(full);
    }
  }
  return files;
}

const allFiles = walkDir(OUT_DIR);

// 1. Encontrar arquivos com ".." no nome (apenas o basename)
const renames = new Map();
for (const file of allFiles) {
  const parts = file.split(/[\\/]/);
  const basename = parts[parts.length - 1];
  if (basename.includes("..")) {
    const newBasename = basename.replaceAll("..", "--");
    const newFile = file.replace(basename, newBasename);
    renames.set(file, newFile);
    console.log(`rename: ${file} → ${newFile}`);
  }
}

// 2. Renomear os arquivos
for (const [oldPath, newPath] of renames) {
  renameSync(oldPath, newPath);
}

if (renames.size === 0) {
  console.log("Nenhum arquivo com '..' encontrado. Nada a fazer.");
  process.exit(0);
}

// 3. Atualizar referências em HTML, JS, CSS e txt
const TEXT_EXTS = new Set([".html", ".js", ".css", ".txt", ".json", ".xml"]);

for (const file of allFiles) {
  if (!TEXT_EXTS.has(extname(file))) continue;

  // Usar o novo caminho se o próprio arquivo foi renomeado
  const readPath = renames.get(file) ?? file;

  let content = readFileSync(readPath, "utf8");
  let changed = false;

  for (const [oldPath, newPath] of renames) {
    const oldBasename = oldPath.split(/[\\/]/).pop();
    const newBasename = newPath.split(/[\\/]/).pop();
    if (content.includes(oldBasename)) {
      content = content.replaceAll(oldBasename, newBasename);
      changed = true;
    }
  }

  if (changed) {
    writeFileSync(readPath, content, "utf8");
    console.log(`updated refs: ${readPath}`);
  }
}

console.log(`Concluído: ${renames.size} arquivo(s) renomeado(s).`);
