window.addEventListener('DOMContentLoaded', function () {
  const projectButtons = document.querySelectorAll('#live-btn');
  const viewMoreProjectBtn = document.querySelector('.view-more-btn');

  const backDropElement = document.querySelector('.backdrop');
  const videoContainer = document.querySelector('.video-container');
  const closeIconVideoContainer = document.querySelector(
    '#close-icon-video-container'
  );

  const videoElement = document.querySelector('video');
  const videoSourceElement = document.querySelector('#video-source');

  function displayMessage() {
    const parentElement = viewMoreProjectBtn.parentElement;
    const message = 'Projects are still undergoing and will be uploaded soon!';
    parentElement.innerHTML = `<p data-aos="fade-up">${message}</p>`;
  }

  viewMoreProjectBtn.addEventListener('click', displayMessage);

  function toggleDisplay(element, displayMode) {
    element.style.display = displayMode;
  }

  function locateProjectVideoAndPlay(i) {
    const projectPath = `/assets/videos/project-${i + 1}.mp4`;
    videoSourceElement.src = projectPath;
    videoElement.load();
  }

  function openVideoContainer(i) {
    toggleDisplay(backDropElement, 'block');
    toggleDisplay(videoContainer, 'flex');

    locateProjectVideoAndPlay(i);
  }

  for (let i = 0; i < projectButtons.length; i++) {
    projectButtons[i].addEventListener('click', function () {
      openVideoContainer(i);
    });
  }

  function closeVideoContainer() {
    toggleDisplay(backDropElement, 'none');
    toggleDisplay(videoContainer, 'none');
  }

  closeIconVideoContainer.addEventListener('click', closeVideoContainer);
});
