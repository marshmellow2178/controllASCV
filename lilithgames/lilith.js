/* ==============================================
=========================data================== */
let comments = [
    {name: 'Dislyte', comment: 'Stylish Pop-Fantasy RPG'},
    {name: 'Tales of the Mirror', comment: 'Solve a Ming Dynasty Murder'},
    {name: 'Farlight 84', comment: 'Futuristic Wasteland Shooter Game'},
    {name: 'Warpath', comment: 'Warfare. Strategy. Glory.'},
    {name: 'Rise of Kingdoms', comment: 'Strategy Lives Here !'},
    {name: 'AFK Arena', comment: 'AFK and Chill'},
    {name: 'Art of Conquest', comment: 'Global Real-time Strategy Game'},
    {name: 'Abi', comment: 'A Robot-themed Indie Game with Puzzles'},
    {name: 'Isoland2', comment: 'Get Lost in Mystery'},
    {name: 'Mr.Pumpkin2', comment: 'Explore the City of Darkness'}
];
/* 10 */
let imgList = ['dislyte.jpg', 'mirror.jpg', 'farlight.jpg', 'warpath.jpg', 'rok.jpg', 'afk.jpg', 'aoc.jpg', 'abi.jpg', 'isoland2.jpg', 'pumpkin.jpg'];

/* =================================================================
================================header=========================== */
const subDiv = document.querySelector('.sub > div');
let strSub = '';
imgList.forEach(function(value){
    strSub+=`<figure><img src = "img/menu/${value}"></figure>`;
})
subDiv.innerHTML = `${strSub}`;

const elSub = document.querySelector('.sub');
const menu = document.querySelector('header > nav > a:nth-of-type(2)');
menu.addEventListener('mouseenter', function(){
    elSub.classList.add('active');
});
elSub.addEventListener('mouseleave', function(){
    elSub.classList.remove('active');
});

/* ==============================background========================
================================================================== */
const background = document.querySelector('.background > article');
const btn = document.querySelector('.background > span');

let str = '';
comments.forEach(function(value, index){
    str+=`<div>
    <figure><img src = "img/bgLogo/${imgList[index]}"></figure>
    <b>${value.name}</b>
    <p>${value.comment}</p>
    <button class = "btn1">Details</button>
    </div>`;
});
background.innerHTML = `${str}`;

let str2 = ''
for(let i = 0;i<imgList.length;i++){
    str2+="<button></button>";
}
btn.innerHTML = `${str2}`;

const bgList = document.querySelectorAll('.background article div');
const btnList = document.querySelectorAll('.background span button');
bgList.forEach(function(value, index){
    value.style = `background: #000 url('img/background/${imgList[index]}') center/cover no-repeat;`;
});

let i=0;
btnList[i].classList.add('active');
bgList[i].classList.add('active');
/* 초기값 */
btnList.forEach(function (value, index) {
    btnList[index].addEventListener('click', function () {
        if (i != index) {
            bgList[i].classList.remove('active');
            btnList[i].classList.remove('active');
        }
        bgList[index].classList.add('active');
        value.classList.add('active');
        i = index;
    });
});

/* ======================================================
=======================section1============================== */
const games = document.querySelector('.game ul');
let str3 = '';
comments.forEach(function(value, index){
    str3+=`<li>
    <div class=textarea>
    <b>${value.name}</b>
    <p>${value.comment}</p>
    </div>
    <figure><img src = "img/icon/${imgList[index]}"></figure>
    </li>`;
});
games.innerHTML = `${str3}`;

const gameCards = document.querySelectorAll('.game ul li');
gameCards.forEach(function(value, index){
    value.style = `background: url('img/column/${imgList[index]}') top/cover no-repeat;)`;
});

const btnLeft = document.querySelector('.game > button:nth-of-type(1)');
const btnRight = document.querySelector('.game > button:nth-of-type(2)');
let listWidth = gameCards[0].offsetWidth+20;
let fullwidth = games.offsetWidth - (listWidth*4); /* 내용을 이동시킬 거리 = 전체길이-마지막4개 */
let standard = 0;/* 기준점을 잡고 이동*/

function btnActive(standard){
    /* -offset<=x<0*/
    if(standard<=-fullwidth){
        btnRight.classList.remove('active');
        btnLeft.classList.add('active');
    }
    else if(-fullwidth<standard&&standard<-50){
        btnRight.classList.add('active');
        btnLeft.classList.add('active');
    }
    else{
        btnLeft.classList.remove('active');
        btnRight.classList.add('active');
    }
    console.log(standard);
}
btnActive(0);

btnLeft.addEventListener('click', function(){
    standard += listWidth;
    games.style = `transform: translateX(${standard}px);`;
    btnActive(standard);
});

btnRight.addEventListener('click', function(){
    standard -= listWidth;
    games.style = `transform: translateX(${standard}px);`;
    btnActive(standard);
});