let faqs = document.getElementsByClassName("faq");

for (let faq of faqs) {
  faq.addEventListener("click", () => {
    const p = faq.getAttribute("p");
    faq.nextElementSibling.innerHTML = p;
    if (faq.nextElementSibling.style.display != "block") {
      faq.nextElementSibling.style.display = "block";
    } else{
      faq.nextElementSibling.style.display = "none";
    }
  });
}

