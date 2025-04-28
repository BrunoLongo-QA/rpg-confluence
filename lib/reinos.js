import fs from 'fs';
import path from 'path';

export function listarReinos() {
  const contentPath = path.join(process.cwd(), 'content', 'world');
  const diretorios = fs.readdirSync(contentPath, { withFileTypes: true });

  return diretorios
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name); // ex: ['reino-um', 'reino-dois']
}
