function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


function createBoxes(amount) {
      const boxesContainer = document.getElementById('boxes');
      for (let i = 0; i < amount; i++) {
          const box = document.createElement('div');
          const size = 30 + i * 10;
          width = `${size}px`;
          height = `${size}px`;
          backgroundColor = getRandomHexColor();
          boxesContainer.appendChild(box);
      }
  }

  function destroyBoxes() {
      const boxesContainer = document.getElementById('boxes');
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