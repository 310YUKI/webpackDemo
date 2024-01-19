import { Hello } from "./hello";
new Hello("John").greet();

let converse = (a) =>{
    if(time < 12){
        return "Good Morning";
    }else if(a < 18){
        return "Good Afternoon";
    }else{
        return "Good Evening";
    }
}

let converseBox = document.querySelector('h2');
let time = new Date().getHours();
converseBox.innerHTML = converse(time);

import '../css/style.scss'
