document.getElementById("clickGenerateBtn").addEventListener('click', function(){
    const randomNumber = Math.floor(1000 + Math.random() * 9999);
    document.getElementById("generateInputBox").value = randomNumber;
});
document.getElementById("pinSubmitBtn").addEventListener('click', function(){
    const generateInput = document.getElementById("generateInputBox").value;
    const submitInput = document.getElementById("submitInputBox").value;
    if( generateInput === submitInput ){
        const submitDone = document.getElementById("successMessage");
        submitDone.style.display = 'block';
        document.getElementById("generateInputBox").value = ' ';
        document.getElementById("submitInputBox").value = ' ';
    }
    if( generateInput !== submitInput  ){
        const submitError = document.getElementById("errorMessage");
        submitError.style.display = 'block';
        const countTry = document.getElementById("countThreeTimes");
        let decreaseCount = parseInt(countTry.innerText) -1;
        countTry.innerText = decreaseCount;
        if( countTry.innerText == 3){
            if(generateInput == submitInput.value){
                countTry.innerText = 3 + 'try left';
            }
        }
        if( countTry.innerText == 2){
            if(generateInput == submitInput.value){
                countTry.innerText = 2 + 'try left';
            }
        }
        if( countTry.innerText == 1){
            if(generateInput == submitInput.value){
                countTry.innerText = 1 + 'try left';
            }
        }
        if(countTry.innerText <= 0){
            if(generateInput == submitInput.value){
                alert("Too many time tried. Please check your pin again")
                countTry.innerText = 0 + 'try left';
            }
            document.getElementById("generateInputBox").value = ' ';
            document.getElementById("submitInputBox").value = ' ';
        }
    }
});