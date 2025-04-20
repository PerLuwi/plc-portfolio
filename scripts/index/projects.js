window.addEventListener('DOMContentLoaded', function () {
  const projectButtons = document.querySelectorAll('#live-btn');

  const backDropElement = document.querySelector('.backdrop');
  const videoContainer = document.querySelector('.video-container');
  const closeIconVideoContainer = document.querySelector(
    '#close-icon-video-container'
  );

  const videoElement = document.querySelector('video');
  const videoSourceElement = document.querySelector('#video-source');

  /* Get element and change there display */
  function toggleDisplay(element, displayMode) {
    element.style.display = displayMode;
  }

  /* Locate Project index in videos folder and play */
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

  /* Adding Event Listener to each live buttons */
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
