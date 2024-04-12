const navLinkEls=document.querySelectorAll('.nav-link')

navLinkEls.forEach(navLinkEls =>{
  navLinkEls.addEventListener('click', () =>{
    document.querySelector('.active')?.classList.remove('active');
    navLinkEls.classList.add('active');
  });
});

var typed= new Typed(".multple-text" ,{
    strings: ["Frontend Developer" , "Web Developer" ,
    "Web Designer" , "Python Programer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:100,
    loop:true
})

const abouttitilelink=document.querySelectorAll('.about-titile-link')

abouttitilelink.forEach(abouttitilelink =>{
  abouttitilelink.addEventListener('click', () =>{
    document.querySelector('.active-link')?.classList.remove('active-link');
    abouttitilelink.classList.add('active-link');
  });
});
