
console.log("TEST");

const showImgTitle = document.getElementById("idH2-1");
const idUl = document.getElementById("idUl");

showImgTitle.addEventListener("click", () => {
  if (idUl.style.visibility == "hidden") {
    idUl.style.visibility = "visible";
    idImg1.style.visibility = "visible";
    idImg2.style.visibility = "visible";
    idImg3.style.visibility = "visible";
  } else {
    idUl.style.visibility = "hidden";
    idImg1.style.visibility = "hidden";
    idImg2.style.visibility = "hidden";
    idImg3.style.visibility = "hidden";
  }
});

const idImg1 = document.getElementById("idImg1");
const idImg2 = document.getElementById("idImg2");
const idImg3 = document.getElementById("idImg3");

idImg1.addEventListener("mousemove", () => {
  idImg1.style.opacity = 0.7;
});

idImg2.addEventListener("mousemove", () => {
  idImg2.style.filter = "grayscale(100%)";
});

idImg3.addEventListener("mousemove", () => {
  idImg3.style.transform = "rotate(45deg)";
  idImg3.style.animation = "10s ease";
});

// const clImg = document.getElementsByClass("clImg1");
// console.log(clImg);

// let showText = "<p>Patates Douces Coupées</p>"
// let showText = "<script>alert('I am John in an annoying alert!')</script>"
// console.log(showText);

// showImgTitle.addEventListener("mousemove", () => {
//   // if (idImg.style.visibility == "hidden") {
//   //   idImg.style.visibility = "visible";
//   // }
//   console.log(idImg.style.visibility);
//   idImg.style.visibility = "visible";
//   // clImg.classList.toggle("clImg1Show");
// });

// idImg.addEventListener("click", (showText) => {
//   el.innerHTML = showText;
// });
