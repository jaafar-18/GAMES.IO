document.addEventListener('DOMContentLoaded', () => {
  const doneInput = document.getElementById('done');

  // Escuchamos el click en el label para #done (si existe)
  const doneLabel = document.querySelector('label[for="done"]');

  // También podemos comprobar si el input está checked cuando carga la página
  function checkDone() {
    if (doneInput.checked) {
      alert('Person to screenshot a lighthouse wins!\n\nBuild complete! Take your screenshot now!');

      const lighthouse = document.querySelector('.lh light');
      if (lighthouse) {
        lighthouse.style.boxShadow = '0 0 20px 10px #fff7cc';
        lighthouse.style.transition = 'box-shadow 0.5s ease-in-out';
      }
    }
  }

  doneInput.addEventListener('change', checkDone);

  // También disparar al click en el label para #done
  if (doneLabel) {
    doneLabel.addEventListener('click', () => {
      // Pequeño retraso para que el input se marque y cambie estado
      setTimeout(checkDone, 50);
    });
  }
});
