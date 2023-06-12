const selectMenu = document.querySelector('.mobile-menu');
const menuItems = document.querySelectorAll('.nav-links ul li');

selectMenu.addEventListener('change', function() {
  const selectedPage = this.value;
  if (selectedPage) {
    window.location.href = selectedPage;
  }
});

menuItems.forEach(function(item) {
  item.addEventListener('click', function(e) {
    e.stopPropagation();
  });
});
