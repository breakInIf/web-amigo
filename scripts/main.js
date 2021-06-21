let button = document.querySelector("label");
let a = 0;
button.addEventListener('change', () => {
  a ++;
  a = a%2;
  if(a==1){
    document.querySelector("body").style.visibility = "visible";
  }
  else{
    document.querySelector("body").style.visibility = "hidden";
  }
});
