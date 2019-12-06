const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
//end of sect
const section = document.querySelector("section");
const end = section.querySelector("h1");
const controller = new ScrollMagic.Controller();

//set scene video animation
let scene = new ScrollMagic.Scene({
  // duration of clip
  duration: 5500,
  triggerElement: intro,
  triggerHook: 0
})
  .addIndicators()
  .setPin(intro)
  .addTo(controller);

const textAnim = TweenMax.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });
//set another scene with text animation 
let scene2 = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0
})
  .setTween(textAnim)
  .addTo(controller);


let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 2000;
});
// window.addEventListener('scroll', () => {
//   scrollpos = window.scrollY / 2000;
// });

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 125.0);
// 1000/framerate * 2?