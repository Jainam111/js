const randomColor = function(){
    let color = '#'
    const hex = "0123456789ABCDEF"
    for(let i = 0 ; i < 6 ; i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color
};

// console.log(randomColor());
let intervalId
const startChanging = function(){
    if(!intervalId){
        intervalId = setInterval(changeBG, 800);
    }
    function changeBG(){
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChanging = function(){
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener
('click', startChanging)

document.querySelector('#stop').addEventListener
('click', stopChanging)
