      const form = document.getElementById('regForm');
      const messageDiv = document.getElementById('message');

      form.addEventListener('submit', function(e) {
        e.preventDefault(); // Megakadályozza az űrlap tényleges elküldését
        form.reset(); // Űrlap törlése
        messageDiv.innerHTML = '<div class="alert alert-success" role="alert">Sikeres regisztráció!</div>';
      });
