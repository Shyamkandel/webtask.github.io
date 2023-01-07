

    const buttons = document.querySelectorAll('.line');
      const display = document.querySelector('.box');
      
      for (const button of buttons) {
        button.addEventListener('click', event => {
          const value = event.target.textContent;
          if (value === '=') {
            display.value = eval(display.value);
          } else {
            display.value += value;
          }
        });
      }