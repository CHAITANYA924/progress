let circles = document.querySelectorAll(".circle");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let progress = document.querySelector(".progress");

let countNext = 1;

next.addEventListener("click",()=>{
  countNext ++;
  if(countNext>circles.length){
    countNext = circles.length
  }
  update()
})

prev.addEventListener("click",()=>{
  countNext --;
  if(countNext<1){
    countNext = 1
  }
  update()
})

let update=()=>{
  circles.forEach((circle,index)=>{
    if(countNext>index){
      circle.classList.add("active")
    }else{
      circle.classList.remove("active")
    }
  })
 pushLine();
 
}
let pushLine =()=>{
  let actives = document.querySelectorAll(".active");
  console.log(actives.length,circles.length)
  progress.style.width = (actives.length-1)/(circles.length-1) * 100  +`%`;
  btnCheck();
}

let btnCheck=()=>{
  if(countNext=== 1){
    prev.disabled = true;
  }else if (countNext ===circles.length){
        next.disabled = true;
  }else{
    prev.disabled = false;
    next.disabled = false
  }
}