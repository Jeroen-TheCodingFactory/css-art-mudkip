const label = document.getElementsByClassName("mudkip__label")[0];
const checkbox = document.getElementsByClassName("mudkip__checkbox")[0];
const audio = document.getElementsByClassName("mudkip__audio")[0];

checkbox.checked = false;

label.onclick = event => {
  if(checkbox.checked === false){
    audio.play();  
  }
}