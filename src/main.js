document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('regForm');
  const messageDiv = document.getElementById('message');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    form.reset(); 
    messageDiv.innerHTML = '<div class="alert alert-success" role="alert">Sikeres regisztráció!</div>';
  });
});
