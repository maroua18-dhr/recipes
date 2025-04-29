function showCateg(categoryId) {
    document.querySelectorAll('.categ').forEach(section => {
      section.classList.remove('active');
    });
    document.getElementById(categoryId).classList.add('active');
  }
  
 
    document.getElementById('btnSweet').addEventListener('click', () => {
      showCateg('sweet');
    });
  
    document.getElementById('btnSalty').addEventListener('click', () => {
      showCateg('salty');
    });



    document.querySelectorAll('.favorite-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.textContent === '❤️') {
            btn.textContent = '🤍';
          } else {
            btn.textContent = '❤️';
          }
        });
      });
      
      document.querySelectorAll('.rating').forEach(rating => {
        const stars = rating.querySelectorAll('.star');
        stars.forEach((star, index) => {
          star.addEventListener('click', () => {
            stars.forEach((s, i) => {
              s.textContent = i <= index ? '★' : '☆';
            });
          });
        });
      });

      document.querySelectorAll('.instructions').forEach(button => {
        button.addEventListener('click', () => {
          const container = button.nextElementSibling;
          container.classList.toggle('visible');
          button.textContent = container.classList.contains('visible') ? 'Hide Instructions' : 'Show Instructions';
        });
      });

      document.querySelectorAll('.ingredients').forEach(button => {
        button.addEventListener('click', () => {
          const container = button.nextElementSibling;
          container.classList.toggle('visible');
          button.textContent = container.classList.contains('visible') ? 'Hide Ingredients' : 'Show Ingredients';
        });
      });
      

 
 