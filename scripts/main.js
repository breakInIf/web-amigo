confirm( 'علي بابا بالدراجة frases cristianas استمتعت.com');
const audio = document.getElementById('audio');
let my_input = document.getElementById('doge');
my_input.addEventListener('change', product);
function product(){
  let num = my_input.value;
  document.getElementById('ethereum').value = num*100;
}
//const back_music = new Audio('../music/file_example_MP3_700KB.mp3');
let popup = document.querySelector('.popup-wrapper');
document.getElementById('rich-button').addEventListener('click', () => {
  popup.style.display = 'block';
  audio.src = 'music/haram.mp3';
  audio.play();
});

let close = document.querySelector('.popup-close');
close.addEventListener('click', (event) => {
  popup.style.display = "none";
  audio.src = 'music/back_music.mp3';
  audio.play();
});
