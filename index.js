document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.search-bar form');
    const searchInput = document.querySelector('.search-input');
  
    form.addEventListener('submit', function(event) {
      if (searchInput.value.trim() === '') {
        event.preventDefault();
        alert('Please enter a search query.');
      }
    });
  });
  