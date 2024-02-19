function cambiaColore() {
  let div = document.getElementById("navbar");
  let button = document.getElementById("getStarted");

  window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY;

    if (scrollTop > 400) {
      div.style.backgroundColor = "white";
      button.style.backgroundColor = "#198917";
    } else {
      div.style.backgroundColor = "#febf17";
      button.style.backgroundColor = "#198917";
    }
  });
}

cambiaColore();
