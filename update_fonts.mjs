import fs from 'fs';
import path from 'path';

const dir = 'd:/Projects/Digital Marketing Agency/src/components/sections';

const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Replace text-4xl lg:text-5xl
  content = content.replace(/text-4xl lg:text-5xl/g, 'text-3xl lg:text-4xl');
  content = content.replace(/text-4xl md:text-5xl/g, 'text-3xl md:text-4xl');
  content = content.replace(/text-4xl font-heading/g, 'text-3xl font-heading');
  
  // Subheadings text-2xl -> text-xl
  content = content.replace(/text-2xl font-heading/g, 'text-xl font-heading');
  content = content.replace(/text-2xl font-bold/g, 'text-xl font-bold');
  
  // Replace text-lg with text-base
  content = content.replace(/text-lg/g, 'text-base');

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Updated ${file}`);
});
