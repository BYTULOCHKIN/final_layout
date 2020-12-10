let progress = document.getElementById("progressbar"),
  totalHight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  let progressHeight = (window.pageYOffset / totalHight) * 100;
  progress.style.height = progressHeight + "%";
};


