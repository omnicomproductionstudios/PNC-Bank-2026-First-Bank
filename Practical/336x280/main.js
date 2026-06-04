var tl;
var tl2;
var startTime;


function init() {
  startTime = new Date();
  tl = gsap.timeline({ onComplete: logDuration });
  animate();
  setRollover();
  setupDisclaimer();
}
gsap.config({
    force3D: true
  });
function animate() {
  tl.set("#main_content", { autoAlpha: 1, force3D: true });
  // Frame 1
  tl.addLabel("frame1", 0)
    .staggerFrom(".copy1 span", 1, { y: 80, autoAlpha: 0, ease: "Power2.easeInOut" }, 0.05, "frame1")
    .staggerFrom(".copy2 span", 1, { y: 80, autoAlpha: 0, ease: "Power2.easeInOut" }, 0.05, "frame1+=1.3")
    .from("#cta", 1, { y: 40, autoAlpha: 0, ease: "Power2.easeInOut" }, "frame1+=2.6")
  tl.addLabel("frame2", "frame1+=3.3")
    .to(".logo", 0.7, {x:-72, ease: "Power2.easeInOut" }, "frame2")
    .to(".tagBg", 0.7, {autoAlpha: 1, ease: "Power2.easeInOut" }, "frame2+=0.5")
    .staggerFrom(".tag span", 0.7, { x: -80, autoAlpha: 0, ease: "Power2.easeInOut" }, 0.05, "frame2+=1")
}

function setupDisclaimer() {
  const rollBtn = document.getElementById("rollbtn");
  const rollover = document.getElementById("rollover");
  const closeBtn = document.getElementById("closeBtn");

  // open disclaimer
  rollBtn.addEventListener("click", function(e){
    e.stopPropagation();
    rollover.classList.add("show");
    tl.pause();
  });

  // close + replay
  closeBtn.addEventListener("click", function(e){
    e.stopPropagation();
    rollover.classList.remove("show");

    tl.restart(); // replay from start
  });
}

function setRollover() {
  document
    .getElementById("default_exit")
    .addEventListener("mouseover", defaultOver, false);
  document
    .getElementById("default_exit")
    .addEventListener("mouseout", defaultOut, false);
}

function defaultOver() {
  gsap.to("#cta", 0.15, { scale: 1.1, ease: Power1.easeInOut });
}

function defaultOut() {
  gsap.to("#cta", 0.15, { scale: 1, ease: Power1.easeInOut });
}


function logDuration() {
  let endTime = new Date();
  console.log(
    "Animation duration: " +
      ((endTime - startTime) / 1000).toFixed(2) +
      " seconds",
  );
}
