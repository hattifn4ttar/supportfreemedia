document.getElementById('githubLink').addEventListener('click', () => window.open('https://github.com/hattifn4ttar/youtube_supportfreemedia'));
document.getElementById('youtubeLink').addEventListener('click', () => window.open('https://www.youtube.com/watch?v=eTSipyTLSjo'));
// document.getElementById('youtubeLinkEn').addEventListener('click', () => window.open('https://www.youtube.com/watch?v=jowEf5tSSyc'));
document.getElementById('extensionLink').addEventListener('click', () => window.open('https://chrome.google.com/webstore/detail/youtube-support-independe/eebejapgbcnnodjkcnnbdloicadofnoe'));
document.getElementById('extensionLink2').addEventListener('click', () => window.open('https://chrome.google.com/webstore/detail/youtube-support-independe/eebejapgbcnnodjkcnnbdloicadofnoe'));
document.getElementById('extensionLink3').addEventListener('click', () => window.open('https://chrome.google.com/webstore/detail/promote-youtube-videos/imhjfmnknoeepdohjdohpmggjhkjfpig'));

document.getElementById('ruLink').addEventListener('click', () => location.replace('ru.html'));
document.getElementById('enLink').addEventListener('click', () => location.replace('./'));

function clickHelpTab(evt, tabName) {
  let i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}