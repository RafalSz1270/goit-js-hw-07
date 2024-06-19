
const categories = document.getElementById('categories');


const items = categories.getElementsByClassName('item');
console.log(`Number of categories: ${items.length}`);


Array.from(items).forEach(item => {
 
  const header = item.getElementsByTagName('h2')[0];

  const elements = item.getElementsByTagName('ul')[0].getElementsByTagName('li');
 
  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${elements.length}`);
});
