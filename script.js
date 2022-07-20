const imagesSlideshow = document.getElementById('imagesSlideshow')
const btnPrev = document.getElementById('btnPrev')
const btnNext = document.getElementById('btnNext')

let index = 1;
const totalImg = 3;

const displayImage = (i) => {
  if(i > totalImg) {index = 1}
  if(i < 1) {index = totalImg}
  console.log(index)
  imagesSlideshow.style.backgroundImage = `url(img/img${index}.jpg)`
  // const content = `
  //                   <div class="imageBox"><img src="img/img${index}.jpg" alt="" ></div>
  //                 `
  // imagesSlideshow.innerHTML = content
}

btnPrev.addEventListener('click', () => {
  displayImage(index += -1)
})

btnNext.addEventListener('click', () => {
  displayImage(index += 1)
})

displayImage(index)



























// const slides = document.getElementsByClassName('imageSlides')
// console.log(slides);

// let currentIndex = 1;

// const setSlides = (num) => {
//   displaySlides(currentIndex += num)
// }

// const displaySlides = (num) => {
//   console.log(currentIndex);
//   if(num > slides.length) {currentIndex =1 }
//   if(num < 1) {currentIndex = slides.length}
//   for(x=0; x < slides.length; x++) {
//     slides[x].style.display = 'none';
//   }
//   slides[currentIndex - 1].style.display = 'block'
//   console.log(currentIndex);
// }

// displaySlides(currentIndex);