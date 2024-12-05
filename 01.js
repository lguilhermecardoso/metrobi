function findDuplicates(arr) {
  let seen = new Set();
  let duplicates = new Set();
  
  for (let item of arr) {
    if (seen.has(item)) {
      duplicates.add(item);
    } else {
      seen.add(item);
    }
  }
  
  return Array.from(duplicates);
}

console.log(findDuplicates([1, 2, 3, 4, 5, 1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]