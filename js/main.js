'use strict'
 const progressBar = document.querySelector('.progressbar') 
 const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
 window.addEventListener('scroll', ()=>{
    const windowscroll = window.pageYOffset
    const progressBarWidth = (windowscroll / windowHeight).toFixed(2);
    progressBar.setAttribute('style', `transform:scaleX(${progressBarWidth});`)
 })