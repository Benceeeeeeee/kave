import './node_modules/bootstrap/dist/css/bootstrap.css'

document.addEventListener("DOMContentLoaded", () => {

  
  const div = document.getElementById('div');
  const range = document.getElementById('range');
  function updateMessage() {
    div.classList.remove('alert-info', 'alert-warning', 'alert-danger');
    const inputRange = range.value;
    if (inputRange == 0) {
      div.classList.add('alert-info');
      div.textContent = 'Elfogyott a kávé, töltsd újra!';
    } else if (inputRange == 1) {
      div.classList.add('alert-warning');
      div.textContent = 'Töltsd újra a kávét!';
    } else if (inputRange == 2) {
      div.classList.add('alert-danger');
      div.textContent = 'Kritikus kávéhiány!';
    }
  }
  
  range.addEventListener('input', updateMessage);
})