document.getElementById('submit').onclick = converter;

document.getElementById('clear').onclick = function(){
    document.getElementById('result').innerHTML = "Result";
    document.getElementById('temp').value = "";
}

function convertToCelsius(temp){
    return (temp -32) * (5/9);
}

function convertToFahrenheit(temp){
     return temp * 9 / 5 + 32;
}

function converter(){

        let temp = document.getElementById('temp').value;
        temp = Number(temp)

        if(document.getElementById('fRadio').checked){
            temp = convertToFahrenheit(temp);
            document.getElementById('result').innerHTML = temp + '°F';
        }
        else if(document.getElementById('cRadio').checked){
            temp = convertToCelsius(temp);
            document.getElementById('result').innerHTML = temp + '°C';
        }
        else{
            document.getElementById('result').innerHTML = 'please enter something';
        }
    }


//document.getElementById('submit').onclick = function(){
//     let temp = document.getElementById('temp').value;
//     temp = Number(temp)

//     if(document.getElementById('fRadio').checked){
//         temp = convertToFahrenheit(temp);
//         document.getElementById('result').innerHTML = temp + '°F';
//     }
//     else if(document.getElementById('cRadio').checked){
//         temp = convertToCelsius(temp);
//         document.getElementById('result').innerHTML = temp + '°C';

//     }
//     else{
//         document.getElementById('result').innerHTML = 'please enter something';
//     }
// }


