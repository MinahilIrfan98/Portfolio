document.addEventListener('DOMContentLoaded', function () {
    const nareenCard = document.getElementById('nareen-card');
    const minahilCard = document.getElementById('minahil-card');
  
    if (nareenCard) {
      nareenCard.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/nareen-asad', '_blank');
      });
    }
  
    if (minahilCard) {
      minahilCard.addEventListener('click', function () {
        window.open('https://www.linkedin.com/in/minahilirfan', '_blank');
      });
    }
  });
  