let user = prompt('Are you a member of the Glactic Empire?')

function getAnswer(){
    if(user.toLowerCase() == 'no'){
        document.write('<h3>Welcome Hero</h3>')
    } else {
        document.write('<h4>Self Destruct in 5 Seconds</h4>')
    }
}

getAnswer();