console.log('Lets Learn');

function changeLevel() {
    level = document.getElementById('levels')
    console.log(level.value);
    
    problemDiv = document.getElementById('problems');
    console.log(problemDiv);

    if(problemDiv != null) {
        firstChild = problemDiv.firstChild;
        console.log(firstChild);
        if(firstChild != null) {
            problemDiv.remove(firstChild);
        }
        
        x = document.createElement('h2')
        x.textContent = level.value;
        problemDiv.appendChild(x);
    }    
}