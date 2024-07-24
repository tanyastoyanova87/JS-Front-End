function showText() {
   const linkElement = document.getElementById('more');
   const textElement = document.getElementById('text');

   linkElement.textContent = linkElement.style.display = 'none';
   textElement.style.display = 'inline';
}
