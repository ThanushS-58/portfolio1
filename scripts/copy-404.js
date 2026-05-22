import fs from 'fs';
import path from 'path';

const src = path.resolve(process.cwd(), 'dist', 'public', 'index.html');
const dest = path.resolve(process.cwd(), 'dist', 'public', '404.html');

try {
  fs.copyFileSync(src, dest);
  console.log('Copied index.html to 404.html');
} catch (err) {
  console.error('Failed to copy 404:', err);
  process.exit(1);
}
