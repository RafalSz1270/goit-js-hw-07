function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxesContainer = document.getElementById('boxes');

function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const box = document.createElement('div');
        const size = 30 + i * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxesContainer.appendChild(box);
        
    }

}

  function destroyBoxes() {
     
      boxesContainer.innerHTML = '';
  }

  document.querySelector('[data-create]').addEventListener('click', function() {
      const input = document.querySelector('#controls input');
      const amount = Number(input.value);

      if (amount >= 1 && amount <= 100) {
          destroyBoxes(); 
          createBoxes(amount);
          input.value = ''; 
      }
  });

   document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes);