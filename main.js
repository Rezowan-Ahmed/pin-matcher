document.getElementById('clickGenerateBtn').addEventListener('click',function(){
    let randomNumber;
    for(let i = 0; i < 1000; i++){
        let random = Math.random() * 9999;
        randomNumber = Math.floor(random);
        }
    document.getElementById("generateInputBox").value = randomNumber;
});
document.getElementById('pinSubmitBtn').addEventListener('click', function(){
    const generateInput = document.getElementById('generateInputBox').value;
    const submitInput = document.getElementById('submitInputBox').value;
    if(generateInput === submitInput){
    const submitDone = document.getElementById('pin-matched');
        submitDone.style.display = 'block';
        document.getElementById('generateInputBox').value = ' ';
        document.getElementById('submitInputBox').value = ' ';
    }
    
    if(generateInput !== submitInput){
    const submitError = document.getElementById('errorMessage');
        submitError.style.display = 'block';

        const tryLeftCount = document.getElementById("tryAgainCount");
        let decrease = parseInt(tryLeftCount.innerText)-1;
        tryLeftCount.innerText = decrease;
        if(tryLeftCount.innerText == 3){
            if(generateInput.value == submitInput.value){
                tryLeftCount.innerText= 3 + ' try left';
            }
        }
        if(tryLeftCount.innerText == 2){
            if(generateInput.value == submitInput.value){
                tryLeftCount.innerText= 2 + ' try left';
            }
        }
        if(tryLeftCount.innerText == 1){
            if(generateInput.value == submitInput.value){
                tryLeftCount.innerText= 1 + ' try left';
            }
        }
        if(tryLeftCount.innerText <= 0){
            if(generateInput.value == submitInput.value){
                alert('You enter the wrong pin. Please re-check it again ')
                tryLeftCount.innerText= 0 + ' try left';
            }
            document.getElementById('generateInputBox').value = ' ';
            document.getElementById('submitInputBox').value = ' ';            
        }
    }

});