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