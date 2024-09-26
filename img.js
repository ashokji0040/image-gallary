document.querySelectorAll(".image-gallary img").forEach((photo) => {
  photo.onclick = () => {
    document.querySelector(".open-img").style.display = "block";
    document.querySelector(".open-img img").src = photo.getAttribute("src");
  };
});
document.querySelector(".open-img span").onclick = () => {
  document.querySelector(".open-img").style.display = "none";
};
