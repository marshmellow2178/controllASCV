let length = 3;
let rArray = [0, 0, 0]; 
let iArray = []; /* random number*/
let correct = 0 /* counting correct numbers */
const elInput = document.querySelector('div input');
const answer = document.querySelector('div .answer');
const result = document.querySelector('div .result');
const elBtn = document.querySelector('div button');

elBtn.addEventListener('click', function(){
    event.preventDefault();
    if(isNaN(elInput.value)){
        result.innerHTML = '오류: 숫자를 입력'
        return;
    }
    else if(elInput.value.length!=length){
        result.innerHTML ='오류: 세자리 수 입력'
        return;
    }
    
    let str = '';
    for(let i = 0;i<rArray.length;i++){
        rArray[i] = Math.floor(Math.random()*10).toString();
        iArray.push(elInput.value.split('')[i]);
        if(rArray[i]==iArray[i]){
            correct++;
        }
        str += rArray[i];
    }

    answer.innerHTML = `정답: ${str}`;
    if(correct==3){
        result.innerHTML='1등 당첨';
    }
    else if(correct==2){
        result.innerHTML='2등 당첨';
    }
    else if(correct==1){
        result.innerHTML='3등 당첨';
    }
    else{
        result.innerHTML='꽝';
    }
    correct = 0;
    iArray = [];
});
