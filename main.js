'use strict'

//variables//
const button = document.querySelector (.js_updatebottom);
const face = document.querySelector (.js_faceh1);
const main = document.querySelector (.js_main);
const section = document.querySelector (.js_section1):



//funciones//

function getRandomNum (max) {
//  const randomNum = Math.round(Math.random() * 100);
    const randomNum = parseInt(Match.random() * max);
    console.log (randomNum);
    return randomNum;
}

function changeColor (){
    const randomNum = parseInt(Math.random() * 100);
 // const randomNum = Math.round(Math.random() * 100); también es otra manera de redondear
    console.log (randomNum);
if (randomNum % 2 === 0) {
        main.classList.add('yellow');
        main.classList.remove('orange');
    } else {
        main.classList.add('yellow');
        main.classList.remove('orange');
    }
}

function changeFace (){
    const valueFace = section.value;
    face.innherHTML = valueFace;
}

function handleClickButton (event){
    changeFace();
    changeColor();
}


//eventos//
button.addEventListener ('click', handleClickButton)
