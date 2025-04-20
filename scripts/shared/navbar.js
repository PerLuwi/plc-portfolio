window.addEventListener('DOMContentLoaded', function () {
  const hamburgerMenuBtn = document.getElementById('hamburger-menu');
  const closeIcon = document.getElementById('close-icon');

  const sideBarMenu = document.getElementById('sidebar-menu');
  const sideBarNavLists = document.querySelectorAll('#sidebar-nav li a');

  function closeMenuSideBar() {
    sideBarMenu.classList.remove('show-sidebar');
  }

  function toggleMenuSideBar() {
    sideBarMenu.classList.toggle('show-sidebar');
  }

  hamburgerMenuBtn.addEventListener('click', toggleMenuSideBar);
  closeIcon.addEventListener('click', toggleMenuSideBar);

  sideBarNavLists.forEach(function (sideBarNavList) {
    sideBarNavList.addEventListener('click', toggleMenuSideBar);
  });

  window.addEventListener('resize', function () {
    if (window.innerWidth > 768) {
      closeMenuSideBar();
    }
  });
});
