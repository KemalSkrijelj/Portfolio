document.getElementById("btn").onclick = function () {
  location.href = "file:///C:/Users/computer/Desktop/html-css-course/Travelly/index.html";
};
document.getElementById("btn_photography").onclick = function () {
  location.href = "file:///C:/Users/computer/Desktop/html-css-course/Gallery/index.html";
};
document.getElementById("btn_gallery").onclick = function () {
  location.href = "file:///C:/Users/computer/Desktop/Kemal%20Skrijelj/dropDownMenu/index.html";
};
document.getElementById("btn_youtube").onclick = function () {
  location.href = "file:///C:/Users/computer/Desktop/html-css-course/Youtube-exercise/youtube.html";
};
document.getElementById("gitHub").onclick = function () {
  location.href = "https://github.com/KemalSkrijelj"
}
document.getElementById("instagram").onclick = function () {
  location.href = "https://www.instagram.com/kemal.skrijelj/"
}
document.getElementById("linkedin").onclick = function () {
  location.href = "https://www.linkedin.com/in/kemal-%C5%A1krijelj-b72785218/"
}
document.querySelectorAll('.certificate-containers img').forEach(image => {
  image.onclick = () => {
  document.querySelector('.popup-img').style.display = 'block';
  document.querySelector('.popup.img img').src = image.getAttribute('src');
  }
})

document.querySelector('.popup.img span').onclick = () => {
  document.querySelector('.popup-img').style.display = 'none';

}