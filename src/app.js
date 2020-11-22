const sechand=document.querySelector(`.sec`)
const minhand=document.querySelector(`.min`)
const hrhand=document.querySelector(`.hour`)

function setDate(){
    const now= new Date();


    const sec=now.getSeconds();
    const secDeg=(sec*6)+90;
    sechand.style.transform=`rotate(${secDeg}deg)`

    const min=now.getMinutes();
    const minDeg= ((mins / 60) * 360) + ((seconds/60)*6) + 90;
    minhand.style.transform=`rotate(${minDeg}deg)`

    const hour=now.getHours();
    const horDeg=  ((hour / 12) * 360) + ((mins/60)*30) + 90;
    hrhand.style.transform=`rotate(${horDeg}deg)`


    
    
    
    sechand.style.transform=`rotate(${secDeg}deg)`
}
setInterval(setDate,1000)