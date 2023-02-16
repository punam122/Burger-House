const toTop=document.querySelector(".to-top");
window.addEventListener('scroll',checkheight)

function checkheight(){
  if(window.scrollY>200){
    toTop.style.display="flex"
  }
  else{
    toTop.style.display="none"
  }
}

toTop.addEventListener('click',function()
{
  window.scrollTo({

    top:0
  })

})

