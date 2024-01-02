let sections = Array.from(document.querySelectorAll('.screen-section'));
window.addEventListener('wheel', (e) => {
  let currentIndex = sections.findIndex(section => section.getBoundingClientRect().top > 0);
  if (e.deltaY < 0) {
    // Scroll up
    console.log(currentIndex);
    let previousSection = sections[currentIndex - 1];
    if (previousSection) previousSection.scrollIntoView({behavior: "smooth"});
  } else {
    // Scroll down
    console.log(currentIndex);
    let nextSection = sections[currentIndex + 1];
    if (nextSection) nextSection.scrollIntoView({behavior: "smooth"});
  }
});