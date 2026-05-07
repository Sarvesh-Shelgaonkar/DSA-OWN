const fs = require('fs');
const path = require('path');

const basePath = 'D:\\Placement-Oriented\\Placement_final\\4)System_Design\\System-Design';

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFiles(file));
    } else {
      if (file.endsWith('.pdf')) {
        results.push(file);
      }
    }
  });
  return results;
}

const allFiles = getFiles(basePath);

const categorized = {
  part1: [],
  part2: [],
  part3: [],
  part4: [],
  misc: []
};

allFiles.forEach(file => {
  const relativePath = file.replace(basePath + '\\', '').replace(/\\/g, '/');
  // Remove numeric prefixes like "1. ", "0. ", "48. " from the name for a cleaner look
  let name = path.basename(file, '.pdf');
  name = name.replace(/^\d+\.\s*/, '');

  // The files are now copied to public/System-Design/
  const url = '/System-Design/' + relativePath.split('/').map(encodeURIComponent).join('/');

  const entry = { name, url, path: relativePath };

  if (relativePath.startsWith('Part 1')) categorized.part1.push(entry);
  else if (relativePath.startsWith('Part 2')) categorized.part2.push(entry);
  else if (relativePath.startsWith('Part 3')) categorized.part3.push(entry);
  else if (relativePath.startsWith('Part 4')) categorized.part4.push(entry);
  else categorized.misc.push(entry);
});

const fileContent = `export const systemDesignData = ${JSON.stringify(categorized, null, 2)};\n`;

fs.writeFileSync(path.join(__dirname, 'src/data/systemDesignData.js'), fileContent);
console.log('Data generated successfully at src/data/systemDesignData.js');
