const home = document.getElementById('home');
const sections = document.querySelectorAll('section');
const options = {
  root: null, // this is the viewport
  threshold: 0,
  rootMargin: '-300px',
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }

    // console.log(entry);
    entry.target.classList.toggle('move');
  });
},
options);

sections.forEach((section) => {
  sectionObserver.observe(section);
});
