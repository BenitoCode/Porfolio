/*===== MENU SHOW =====*/
const showMenu = ( toggleId, navId ) => {
  const toggle = document.getElementById( toggleId ),
    nav = document.getElementById( navId );

  if ( toggle && nav ) {
    toggle.addEventListener( "click", () => {
      nav.classList.toggle( "show" );
    } );
  }
};
showMenu( "nav-toggle", "nav-menu" );

/*===== ACTIVE AND REMOVE MENU =====*/
const navLinks = document.querySelectorAll( ".nav-link" );
const sections = document.querySelectorAll( ".section" );

window.addEventListener( "scroll", () => {
  let current = '';
  sections.forEach( section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if ( scrollY >= sectionTop - 390 ) {
      current = section.getAttribute( 'id' );
    }
  } )

  navLinks.forEach( link => {
    link.classList.remove( 'active' );
    if ( link.classList.contains( current ) ) {
      link.classList.add( 'active' );
    }
  } )
} )

/*===== PRELOADER =====*/
function hidePreloader() {

  const preloader = document.querySelector('.loader-container');

  preloader.style.opacity = '0';

  setTimeout(() => {
      preloader.style.display = 'none';
  }, 500);
}
window.addEventListener('load', () => {
  setTimeout(hidePreloader, 1000);
});


/*===== DARK AND WHITE =====*/
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
   
    if (document.body.classList.contains('dark-mode')) {
  
        document.body.classList.remove('dark-mode');
        document.body.style.backgroundColor = 'white'; 
        document.body.style.color = '#333'; 
        themeToggle.innerHTML = '<i class="bx bx-moon"></i> Modo Oscuro'; 
    } else {
      
        document.body.classList.add('dark-mode');
        document.body.style.backgroundColor = '#121212'; 
        document.body.style.color = '#e0e0e0'; 
        themeToggle.innerHTML = '<i class="bx bx-sun"></i> Modo Claro'; 
    }
});





//   /*Remove menu mobile*/
const navMenu = document.getElementById( "nav-menu" );

// }
navLinks.forEach( ( n ) => n.addEventListener( "click", () => { navMenu.classList.remove( "show" ) } ) );

/*===== COPY Email =====*/
const copy = document.getElementById( "copy" );
copy.addEventListener( "click", () => {
  navigator.clipboard.writeText( "benito.gallardoperal@outlook.com" );
  copy.innerHTML = "copied";
  setTimeout( () => {
    copy.innerHTML = null;
  }, 1000 );
} );

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal( {
  origin: "top",
  distance: "80px",
  duration: 800,
  reset: true,
} );

/*SCROLL HOME*/
sr.reveal( ".home-title", {} );
sr.reveal( ".button", { delay: 200 } );
sr.reveal( ".home-img", { delay: 400 } );
sr.reveal( ".home-social-icon", { interval: 200 } );

/*SCROLL ABOUT*/
sr.reveal( ".about-img", {} );
sr.reveal( ".about-subtitle", { delay: 400 } );
sr.reveal( ".about-text", { delay: 400 } );

/*SCROLL SKILLS*/
sr.reveal( ".skills-subtitle", {} );
sr.reveal( ".skills-text", {} );
sr.reveal( ".skills-data", { interval: 100 } );

// sr.reveal(".skills-img", { delay: 600 });

/*SCROLL projects*/
sr.reveal( ".project-img", { interval: 200 } );



  