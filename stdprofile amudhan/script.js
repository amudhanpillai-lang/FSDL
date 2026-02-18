document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function(e){
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({
      behavior:"smooth"
    });
  });
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{
  btn.addEventListener("click", ()=>{
    alert("Thanks for reaching out! I will contact you soon.");
  });
});
