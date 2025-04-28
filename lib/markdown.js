import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

/*
    !Documentação:
    Este arquivo é responsável por ler os arquivos markdown e retornar o conteúdo.
    Ele é usado para renderizar as páginas de documentação.
*/

let contentPath;
export function getAllMarkdownFiles(folder) {
  contentPath = path.join(process.cwd(), 'content', folder);
  const files = fs.readdirSync(contentPath);

  return files.filter(file => file.endsWith('.md'));
}

export function getMarkdownData(fileName) {
  const fullPath = path.join(contentPath, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content } = matter(fileContents);
  return content;
}
