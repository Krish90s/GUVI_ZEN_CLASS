var temp1Num;
var temp2Num;
var m1 = '';
var m2 = '';
var mem = '';
var buttonValue;
var result = null;
var lastoperation;
var haveDot = false;
var operationNAme;

// function that perform onclick events

function click_button(id) {

// detects input keys from 0 - 9 and dot 

    if ( id === '.' || id == '1' || id == '2' || id == '3' || id == '4' || id == '5' || id == '6' || id == '7' || id == '8' || id == '9' ||
    id == '0') {

        if ( id === '.' && !haveDot){
            haveDot = true;
        }
        else if(id === '.' && haveDot){
            return;
        }
        buttonValue = document.getElementById(id).value;
        document.getElementById("result").innerHTML += buttonValue;

    }

// detects whenever the operator key is pressed

    else if (id == '+' || id == '-' || id == '*' || id == '/') {

        if (!buttonValue) result;
        haveDot = false;
        operationNAme = document.getElementById(id).value;
        document.getElementById("result").innerHTML += operationNAme;

    }

// detects the backspace and delete the last element of the string 

    else if (id == 'back' || id === 'Backspace') {
        temp1Num = document.getElementById("result").innerText;
        result = temp1Num.slice(0, -1);
        document.getElementById("result").innerHTML = result;
    }

// display the evaluated value to the screen and display the evaluation history

    else if (id == '='){

        temp1Num = document.getElementById("result").innerText;
        result = eval(temp1Num);
        document.getElementById("result").innerHTML = result;
        document.getElementById("history").innerText = temp1Num;

    }

// clears everything saved so for on the screen

    else if (id == 'ac') {

        document.getElementById("result").innerHTML = '';
        document.getElementById("history").innerHTML = '';

    }

//these peforms the mc m+ m- mr value

    else if (id == 'm+') {

        if(m1 == '' ){

            m1 = document.getElementById("result").innerHTML;
            document.getElementById("result").innerHTML = '';  

        }
        else {

            m2 = Number(m1);
            m1 = document.getElementById("result").innerHTML;
            m1 = Number(m1);
            mem = m2 + m1 ;
            document.getElementById("result").innerHTML = '';
        }
    }

    else if (id == 'm-') {

        if(m1 == '' ){

            m1 = document.getElementById("result").innerHTML;
            document.getElementById("result").innerHTML = '';  

        }
        else {

            m2 = Number(m1);
            m1 = document.getElementById("result").innerHTML;
            m1 = Number(m1);
            mem = m2 - m1 ;
            document.getElementById("result").innerHTML = '';
        }
    }

    else if (id == 'mr') {

        document.getElementById("result").innerHTML = mem;

    }

    else if (id == 'mc') {

        m1 = '';
        m2 = '';
        mem = '';

        document.getElementById("result").innerHTML = '';

    }
    
}

// function that performs keyboard events

document.onkeydown = function(event) {
  
    var key_press = event.key;
    click_button(key_press)


    }