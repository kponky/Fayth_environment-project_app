document.addEventListener("DOMContentLoaded", function () {
  // navigation bar function
  const menuButton = document.getElementById("MenuBtn");
  const navbarMenu = document.getElementById("navMenu");
  const navLinks = document.querySelectorAll(".nav-link");
  // let sections = document.querySelectorAll('section');


  function handleMenuFunction() {
    navbarMenu?.classList.toggle("show");
    console.log("clicked menu");
  }

  menuButton?.addEventListener("click", handleMenuFunction);

  navLinks?.forEach((link)=>{
    link?.addEventListener("click", handleMenuFunction);
  })

  window.onscroll = function () {
    headerShadow();
  
  };

 

  function headerShadow() {
    const navbarHeader = document.getElementById("header");

    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbarHeader.style.boxShadow = "0 2px 9px 1px rgba(0, 0, 0, 0.2)";
      navbarHeader.style.height = "80px";
      navbarHeader.style.lineHeight = "60px";
    } else {
      navbarHeader.style.boxShadow = "none";
      navbarHeader.style.height = "90px";
      navbarHeader.style.lineHeight = "70px";
    }

    let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header nav a');
 
  }




});