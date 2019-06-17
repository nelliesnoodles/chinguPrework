
const deck = document.getElementsByClassName('card_image');
const card_front = "snowflake-regular.svg";
const card_back1 = "socks-solid.svg";
const card_back2 = "anchor-solid.svg";
const card_back3 = "avianex-brands.svg";
const card_back4 = "bath-solid.svg";
const card_back5 = "canadian-maple-leaf-brands.svg";
const card_back6 = "cloud-sun-rain-solid.svg";
const card_back7 = "pagelines-brands.svg";
const card_back8 = "tree-solid.svg";
var img_array1 = [card_back1, card_back2, card_back3, card_back4, card_back5, card_back6, card_back7, card_back8];
var img_array2 = [card_back1, card_back2, card_back3, card_back4, card_back5, card_back6, card_back7, card_back8];
const deck_card_names = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen']
var card_img_obj = new Map();
var timer;
var flipped_card = false;
var first_card;
var second_card;
var matches_found = 0;

function flip_card(){
  //alert("card flipped, event listener active");

  var card_id = this.id;
  var new_src = card_img_obj.get(card_id);
  if(!flipped_card){
  this.src = new_src.toString();
  flipped_card = true;
  first_card = new_src;
  }
  else if(flipped_card){
    this.src = new_src.toString();
    second_card = new_src;
    if(first_card === second_card){
      flipped_card = false;
      matches_found += 1;
      if(matches_found >= 8){
        alert("congratulations");
      }
    }
    else{

      flipped_card = false;
      matches_found = 0;
      timer = window.setInterval(reset_flip, 1000);
    }
  }
};

function assign_imgs(imgArray1, imgArray2, card_map, deck){
  var indeck = 0;
  //assign first shuffled images to map
  for (var i = 0; i<imgArray1.length; i++){
    var img_to_add = imgArray1[i];
    var card_to_add_it_to = deck[indeck];
    card_map.set(card_to_add_it_to, img_to_add);
    indeck += 1;
    //alert(indeck);
  };
  //assign second shuffled images to map
  for (var i = 0; i<imgArray2.length; i++){
    var img_to_add = imgArray2[i];
    var card_to_add_it_to = deck[indeck];
    card_map.set(card_to_add_it_to, img_to_add);
    indeck += 1;
    //alert(indeck);
  };
}


function shuffleArray(array) {
   //https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
   //  the Durstenfeld shuffle
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    };
}



function reset_flip(){

  window.clearInterval(timer);
  flipped_card = false;
  first_card = "";
  second_card = "";
  for (let i=0; i<deck.length; i++){
    let element = deck[i];
    //alert(i);
    element.src = card_front;
    };
;}

function run_game(){
  n=0;
  flipped_card = false;
  for (let i=0; i<deck.length; i++){
    let element = deck[i];
    //alert(i);
    element.addEventListener("click", flip_card);
    element.src = card_front;
  };
  shuffleArray(img_array1);
  shuffleArray(img_array2);
  assign_imgs(img_array1, img_array2, card_img_obj, deck_card_names);
  //alert(img_array1); alert(img_array2);
};


//window.onload = alert(deck.length)
