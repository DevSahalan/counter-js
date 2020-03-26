let counter = document.querySelector('#counter');
let addCount = document.querySelector('#addCount');
let lowerCount = document.querySelector('#lowerCount');
let grettMessage= document.querySelector('#grettMessage');

let count = 0;
addCount.addEventListener('click',increaseCount);
lowerCount.addEventListener('click',decreaseCount);



function increaseCount(){
    
count++;


counter.innerHTML=count;
if(count>0 && count<10){
    counter.style.color='green';
}
else if (count===0){
    counter.style.color='white';

}
else if(count>=10 && count<=20){
    counter.style.color='purple';
    grettMessage.innerHTML= 'Congratzz!! You Passed Level 1';
    
}


else if(count>20){
    counter.style.color='blue';
    grettMessage.innerHTML= 'Congratzz!! You Passed Level 2';
}
}

function decreaseCount(){

    count--;
    counter.innerHTML=count;
    if(count<0){
        counter.style.color='red';
    }
    else if (count===0){
        counter.style.color='white';
    
    }
    }