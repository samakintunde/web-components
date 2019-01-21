let accordions = document.getElementsByClassName("accordion-heading");

accordions = Array.from(accordions);

accordions.map(accordion => {
  accordion.addEventListener("click", () => {
    const accordionBody = accordion.nextElementSibling;
    const icon = accordion.querySelector("i.fas");
    if (accordionBody.style.maxHeight) {
      accordionBody.style.maxHeight = null;
      icon.classList.add("fa-angle-right");
    } else {
      accordionBody.style.maxHeight = `${accordionBody.scrollHeight}px`;
      icon.classList.remove("fa-angle-right");
      icon.classList.add("fa-angle-down");
    }
  });
});
