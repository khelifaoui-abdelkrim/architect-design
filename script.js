document.querySelector('.menu').addEventListener('click',()=>{
  document.querySelector('.container').classList.toggle('change');
})
document.querySelector('.home-btn').addEventListener('click',()=>{
  document.querySelector('html').style.scrollBehavior='smooth';
})
setTimeout(()=>{
    document.querySelector('html').style.scrollBehavior = 'unset';
},1000)

// hide menu btn 
section2 = document.querySelector(".about-us")
btn = document.querySelector(".home-btn")
window.addEventListener('scroll',()=>{
    if(window.pageYOffset > section2.offsetTop - 400){
    btn.style.visibility = 'visible';
  }else{
    btn.style.visibility = 'hidden';
  }
})

// spiner 
 window.onload = ()=>{
  setTimeout(()=>{
    document.querySelector('body').classList.add('display')
  },4000)
 }
