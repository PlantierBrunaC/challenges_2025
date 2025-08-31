
function findDuplicates(arr) {
  const seen = new Set();
  const duplicates = new Set();

  for (const item of arr) {
    if (seen.has(item)) 
        duplicates.add(item);
    else seen.add(item);
  }
  return Array.from(duplicates);
}

window.findDuplicates = findDuplicates;
