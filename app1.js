let user = prompt('Are you a member of the Glactic Empire?')

function getAnswer(){
    if(user.toLowerCase() == 'no'){
        document.write('<h3>Welcome Hero</h3>')
    } else if(user.toLowerCase() == 'yes'){
        document.write('<h4>These are not the droids you are looking for.</h4>')
    } else {
        document.write('<h4>Self Destruct in 5 Seconds</h4>')
    }
}

getAnswer();

let hourNow = parseInt(prompt('What hour is it?'))

function getaccess(){
    if(hourNow > 18){
        document.write('<h5>May the sun set on the empire.</h5>')
    } else if(hourNow >=12){
        document.write('<h5>The fight is long and can last for days.</h5>')
    } else if(hourNow >=0){
        document.write('<h5>The sun rises on the rebellion.</h5>')
    } else {
        document.write('<h5>Trust in the Force.</h5>')
    }
    return hourNow
}

getaccess();



function getpictureOnPage(){
    
    let numberOfPictures = prompt('How many?')

    for(let i = 0; i < numberOfPictures; i++){
        document.write('<img src="https://i.pinimg.com/originals/f7/f6/88/f7f6880e04d5129b8e47da73f3caaa70.jpg">')
    }
}

getpictureOnPage();

function jediSith(){

    let guess = 4
    for(let i = 0; i < guess; i++){
        let userAns = prompt('jedi or Sith?');
        let stuff = parseInt(userAns)
        console.log(stuff)
        
        // while(stuff != 1 || stuff != 2 ){
        //     userAns = prompt('Invalid input try again. Jedi or Sith?');
        // }
        if(stuff == 2 || userAns == 'sith'){
            document.write('<img src="https://i.pinimg.com/originals/f7/f6/88/f7f6880e04d5129b8e47da73f3caaa70.jpg">');
            break;
        } else if(stuff == 1 || userAns == 'jedi'){
            document.write('<img src="https://i.pinimg.com/originals/53/12/77/53127723bc4dbe2db07f4face465599c.jpg">');
            break;
        } else {
            userAns = prompt('Invalid input try again. Jedi or Sith?');
        }
    }
}


jediSith();