function init() {
  if (innerWidth > 820) {
    main();
  }
}

function main() {
  const CircleElements = document.querySelectorAll(".circle-background");
  const circles = [];
  CircleElements.forEach((ele) => {
    const initial = {
      top: parseInt(getComputedStyle(ele).top),
      left: parseInt(getComputedStyle(ele).left),
    };
    const randomValue = Math.random() * 100;
    circles.push({ ele, initial, randomValue });
  });

  var mouse = { x: 0, y: 0 };
  // Ticker event will be called on every frame
  addEventListener("mousemove", (e) => {
    const { x, y } = { x: e.clientX, y: e.clientY };
    mouse.x = x;
    mouse.y = y;
  });

  function animateMouse() {
    const { x, y } = mouse;
    gsap.to(".follow-mouse", {
      left: x,
      top: y,
    });

    // circles.forEach(({ ele, initial, randomValue }) => {
    //   const { top, left } = initial;
    //   ele.style.top = top - (y - innerHeight / 2 + randomValue) / 15 + "px";
    //   ele.style.left = left - (x + randomValue) / 15 + "px";
    // });

    window.requestAnimationFrame(animateMouse);
  }

  animateMouse();
}

// document
//   .querySelectorAll("object")
//   .forEach((e) => (e.style.overflow = "hidden"));

init();
