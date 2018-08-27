// javascript
// 1-color-change.html
//************************************************************************* */
// const colorBtn = document.querySelector('.colorBtn');
// const bodyBCG = document.querySelector('body');
// const colors = ["red","green","yellow","purple"];

// colorBtn.addEventListener('click', changeColor);

// function changeColor(){
//     const totalColors = colors.length;
//     const randomColors = Math.floor(Math.random()*totalColors + 1);
//     bodyBCG.style.backgroundColor = colors[randomColors];
//     console.log(randomColors);
// }

// 2-hex-color.html
//************************************************************************* */
// const hexColors = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','D','F'];
// const bodyBCG = document.querySelector('body');
// const hexBtn = document.querySelector('.hexBtn');
// const hexColorSpan = document.querySelector('.hexColor');

// hexBtn.addEventListener('click', getHex);

// function getHex(){
//     var hash = '#';
//     var hexColLength = hexColors.length;
    
//     for (let i=0;i<6;i++){
//         var randomHex = Math.floor(Math.random()*hexColLength); 
//         hash += hexColors[randomHex]; 
//         console.log(hash);
//     }
//     hexColorSpan.innerHTML = hash;
//     bodyBCG.style.backgroundColor = hash;
// }

// 3-display-quotes.html
//************************************************************************* */
// Step 1 : Create an array with objects named as name & quote
// const simpleQuotes = [
//     {
//         name: "Author number 1",
//         quote: "“Knowing yourself is the beginning of all wisdom”" 
//     },
//     {
//         name: "Author number 2",
//         quote: "“Be yourself; everyone else is already taken.”" 
//     },
//     {
//         name: "Author number 3",
//         quote: "Quote number 3" 
//     },
// ]
// const quoteBtn = document.getElementById('quoteBtn');
// const quote = document.getElementById("quote");
// const quoteAuthor = document.getElementById("quoteAuthor");
// quoteBtn.addEventListener('click',displayQuote);

// function displayQuote(){
//    var number = Math.floor(Math.random()*simpleQuotes.length);
//    quoteAuthor.innerHTML = simpleQuotes[number].name;
//    quote.innerHTML = simpleQuotes[number].quote;
// }

// 4-message-status.html
//************************************************************************* */
// const messageIn = document.querySelector("#messageIn");
// const messageOut = document.querySelector("#messageOut");
// const btnSend = document.querySelector("#btnSend");

// btnSend.addEventListener('click', sendMsg);

// function sendMsg(){
//    const message = messageIn.value;
//    if(message === ''){
//         alert("Please enter any message");
//    }else{
//         messageOut.innerHTML= "The last sent message is: " + '<br>' + message;
//         messageIn.value = ''; 
//    }
// }

// 5-basic-counter.html
//************************************************************************* */
// const counter = document.querySelector(".counter");
// const addCount = document.querySelector("#addCount");
// const lowerCount = document.querySelector("#lowerCount");
// addCount.addEventListener('click', incrementCounter);
// lowerCount.addEventListener('click', decrementCounter);
// let count =0;
// function incrementCounter(){
//     count++
//     counter.innerHTML=count;
//     counter.innerHTML > 0 ? counter.style.color = "green" : "";
//     counter.animate([{opacity:0.2}, {opacity: 1.0}],{duration: 900,fill:'forwards'});
// }

// function decrementCounter(){
//     count--;
//     counter.innerHTML=count;
//     counter.innerHTML < 0 ? counter.style.color = "red" : "";
//     counter.animate([{opacity:0.2},{opacity:1.0}],{duration:900,fill:'forwards'});
// }

// 6-calculator.html
//************************************************************************* */
// const btns = document.querySelectorAll('.btn');
// const screen = document.querySelector('.screen');
// const btnEquall = document.querySelector('.btn-equall');
// const btnClear = document.querySelector('.btn-clear');

// for(let i=0;i<btns.length;i++){
//     btns[i].addEventListener('click', function(){
//        var number = btns[i].getAttribute('data-prop');
//        screen.value+= number;
//     });
// }
// btnEquall.addEventListener('click', function(){
//     if(screen.value === ""){
//         screen.value = "";
//     }else{
//     var value = eval(screen.value);
//     screen.value = value;
//     }
// });
// btnClear.addEventListener('click', function(){
//     screen.value= "";
// });

//7-digital-clock.html
//************************************************************************* */
function showClock(){
    var date = new Date();
    var hours = date.getHours();
    var mins = date.getMinutes()
    var seconds = date.getSeconds();
    var showTime = document.getElementById("clock");
    var formatHours = convertFormat(hours);
    var hour = checkTime(hours);
    showTime.innerHTML = `${hour} : ${mins} : ${seconds} ${formatHours}`;
}
function convertFormat(time){
    var am = "AM";
    if(time >12){ am = "PM"; }
    return am;
}
function checkTime(time){
    time >=12 ? time = time-12 : time=time;
    time < 10 ? time = '0'+time : time=time;
    time === "00" ? time = 12 : time = time;
    return time;
}
showClock();
setInterval(showClock,1000);



