// ScrollMagicJS animations

function runAnimation(trigger, reverse, blockTween, offset) {
  let controller = new ScrollMagic.Controller();
  let containerScene = new ScrollMagic.Scene({
    offset,
    reverse,
    triggerElement: trigger
  })
    .setTween(blockTween)
    .addTo(controller);
}

function animateWhiteBar(bar, offset) {
  var blockTween = new TweenMax.to(bar, 1.5, {
    width: "200px",
    opacity: 1,
    ease: Power4.easeOut,
  });
  runAnimation(bar, false, blockTween, offset)
}

function animateSlideHorizontal(bar, offset) {
  var blockTween = new TweenMax.to(bar, 1.5, {
    opacity: 1,
    x: 0,
    ease: Power4.easeOut,
  });
  runAnimation(bar, false, blockTween, offset)
}

function animateSlideVertical(bar, offset) {
  var blockTween = new TweenMax.to(bar, 1.5, {
    opacity: 1,
    y: 0,
    ease: Power4.easeOut,
  });
  runAnimation(bar, false, blockTween, offset)
}

animateWhiteBar('#about-me-white-bar', -300);

animateWhiteBar('#skills-white-bar', -300);
animateSlideVertical('#skills-subtitle-slide-up', -300);

animateWhiteBar('#experience-white-bar', -300);
animateSlideVertical('#experience-subtitle-slide-up', -300);

animateWhiteBar('#applications-white-bar', -300);
animateSlideVertical('#applications-subtitle-slide-up', -300);

animateWhiteBar('#education-white-bar', -300);
animateSlideVertical('#education-subtitle-slide-up', -300);

animateWhiteBar('#contact-white-bar', -300);
animateSlideVertical('#contact-subtitle-slide-up', -300);