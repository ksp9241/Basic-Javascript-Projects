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
// function showClock(){
//     var date = new Date();
//     var hours = date.getHours();
//     var mins = date.getMinutes()
//     var seconds = date.getSeconds();
//     var showTime = document.getElementById("clock");
//     var formatHours = convertFormat(hours);
//     var hour = checkTime(hours);
//     showTime.innerHTML = `${hour} : ${mins} : ${seconds} ${formatHours}`;
// }
// function convertFormat(time){
//     var am = "AM";
//     if(time >12){ am = "PM"; }
//     return am;
// }
// function checkTime(time){
//     time >=12 ? time = time-12 : time=time;
//     time < 10 ? time = '0'+time : time=time;
//     time === "00" ? time = 12 : time = time;
//     return time;
// }
// showClock();
// setInterval(showClock,1000);

//8-navbar.html
//************************************************************************* */
// const navbarBtn = document.querySelector(".navbar-btn");
// const navbarLinks = document.querySelector(".navbar-links");

// navbarBtn.addEventListener('click', function(){
//     var val = navbarLinks.classList.contains('navbarCollapse');
    
//     if(val){
//         navbarLinks.classList.remove('navbarCollapse');
//         navbarBtn.classList.remove('close');
//     }else{
//         navbarLinks.classList.add('navbarCollapse');
//         navbarBtn.classList.add('close');
//     }
// });


// 9-event-count-down.html
//************************************************************************* */
var screen = document.getElementById("screen");
var day = document.getElementById("day");
var hour = document.getElementById("hour");
var min = document.getElementById("min");
var sec = document.getElementById("sec");
function setup(){
    var now = new Date();
    var eventDate = new Date('2018,09,31');
    var curretTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = (eventTime - curretTime);
    var ct = convertTime(remTime);
    day.innerHTML = `${ct[0]} <span> Days </span>`;
    hour.innerHTML = `${ct[1]} <span> Hours </span>`;
    min.innerHTML = `${ct[2]} <span> Mins </span>`;
    sec.innerHTML = `${ct[3]} <span> Sec </span>`;
}
function convertTime(milliSecond){
    var s , m , h , d;
    s = Math.floor(milliSecond/1000); //Seconds
    m = Math.floor(s/60);             //Minutes in seconds
    h = Math.floor(m/60);             //Hours in seconds
    d = Math.floor(h/24);             //Actual remaining Days
    s = s % 60;         //Actual remaining Seconds
    m = m % 60;         //Actual remaining Minutes
    h = h % 24;         //Actual remaining Hours
    var conVal = [d,h,m,s];
    // return(`day${d} : Days ${h} : Hours ${m} : Minutes ${s} : Seconds`);
    return conVal;
}
setup();
setInterval(setup,1000);







    
    
// function setup(){
//     var now = new Date();
//     var eventDate = new Date('08/30/2018');
//     var curretTime = now.getTime();
//     var eventTime = eventDate.getTime();
    
//     days.innerHTML = converTime(eventTime);

//     setInterval(converTime,1000);
// }

// setup();

// function convertSeconds(s){
//     var min = Math.floor(s/60);
//     var sec = s%60;
//     return `${min} : ${sec}`;
// }

// function setup(){
//     var counter = document.getElementById("counter");
//     var count = 0;
//     var timeLeft = 1440;
    
//     function countIt(){
//         count++;
//         counter.innerHTML = convertSeconds(timeLeft - count);
//     }
    
// setInterval(countIt,1000);
// }

// setup();







