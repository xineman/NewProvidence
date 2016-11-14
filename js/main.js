window.onscroll = function() {myFunction()};

function myFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
      var elm = document.getElementById("main-menu");
      elm.classList.remove("wide-header");
      elm.classList.add("thin-header");
    } else {
      var elm = document.getElementById("main-menu");
      elm.classList.add("wide-header");
      elm.classList.remove("thin-header");
    }
}
