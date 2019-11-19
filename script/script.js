slide = 1
swch1st = 1
swch2st = 1
function up(){
  if (slide > 1){
    console.log(slide*100-200);
  body.style.transform = "translate(0, -"+(slide*100-200)+"vh)";
  slider.style.transform = "translate(0, "+(slide*100-200)+"vh)";
  slide -= 1;
  }
}

function down(){
  if (slide < 3){
    console.log("Down");
  body.style.transform = "translate(0, -"+slide*100+"vh)";
  slider.style.transform = "translate(0, "+slide*100+"vh)";
  slide += 1;
  }

}

function toogle1(){
  if (swch1st == 1){
    tgl1.style.left = "1.6vw";
  tgl1.style.background = "blue";
  swch1.style.background = "white"
  swch1.style.border = "2px #696969 solid";
  title.style.transform = "scale(1.7,1.7)"
  swch1st = 2;
  }
  else if(swch1st == 2){
    tgl1.style.left = "0.15vw";
  tgl1.style.background = "white";
  swch1.style.background = "#696969";
  swch1.style.border = "none";
  title.style.transform = "scale(1,1)"
  swch1st = 1;
  }
  
}
function toogle2(){
  if (swch2st == 1){
    tgl2.style.left = "1.6vw";
  tgl2.style.background = "blue";
  swch2.style.background = "white"
  swch2.style.border = "2px #696969 solid";
  swch1.style.opacity = "0";
  swch2st = 2;
  }
  else if(swch2st == 2){
    tgl2.style.left = "0.15vw";
  tgl2.style.background = "white";
  swch2.style.background = "#696969";
  swch2.style.border = "none";
  swch1.style.opacity = "1";
  swch2st = 1;
}
}
swch1.addEventListener('click', toogle1);
swch2.addEventListener('click', toogle2);
btn__up.addEventListener('click', up);
btn__down.addEventListener('click', down);
document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 38:
            up();
            break;
        case 40:
            down();
            break;
    }
};