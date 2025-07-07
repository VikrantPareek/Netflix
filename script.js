let faqs = document.getElementsByClassName("faq");

for (let faq of faqs) {
  faq.addEventListener("click", () => {
    const p = faq.getAttribute("p");
    faq.nextElementSibling.innerHTML = p;
    let last = faq.childNodes[3];
    if (faq.nextElementSibling.style.display != "block") {
      faq.nextElementSibling.style.display = "block";
      last.style.transform = "rotate(45deg)";
    } else {
      faq.nextElementSibling.style.display = "none";
      last.style.transform = "rotate(0deg)";
    }
  });
}
