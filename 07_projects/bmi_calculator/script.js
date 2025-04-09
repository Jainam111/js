const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('.result');
    const comment = document.querySelector('.comment');

    if(height === "" || height <0 || isNaN(height) ){
        result.innerHTML = "Please enter a valid height"
    } else if(weight === "" || weight <0 || isNaN(weight) ){
        result.innerHTML = "Please enter a valid weight"
    } else {
        const bmi = (weight*10000 / (height*height)).toFixed(2);
        result.innerHTML = `<span>${bmi}</span>`;   
        if (bmi < 18.6) {
            comment.innerHTML = "You are underweight. Your BMI is under 18.6"
        } else if (bmi > 18.6 && bmi < 24.9) {
            comment.innerHTML = "You are in normal range. Your BMI is under between 18.6 and 24.9"
        } else if (bmi > 24.9) {
            comment.innerHTML = "You are overweight. Your BMI is over 24.9"
        }
    
    }

});