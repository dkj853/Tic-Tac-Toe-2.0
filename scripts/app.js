let switch1 = true;
let endArr = [];
let myArr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];
let gameOver = false;

buttons = document.getElementsByClassName('btn')
resetButton = document.getElementById('resetGame');
document.getElementById('players-turn').innerHTML = "Player X's Turn"

buttons = [...buttons]
buttons.forEach(button => {
    button.addEventListener('click', function (event) {
        //top-left button        
        if (gameOver == false) {
            if (button.value == "1") {
                if (switch1 == true) {
                    document.getElementById("top-left").innerText = "X";
                    endArr.push("X");
                    console.log('endArr', endArr)
                    myArr[0][0] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("top-left").innerText = "O"
                    endArr.push("O");
                    myArr[0][0] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }

            //top-mid button
            if (button.value == "2") {
                if (switch1 == true) {
                    document.getElementById("top-mid").innerText = "X";
                    endArr.push("X");
                    myArr[0][1] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("top-mid").innerText = "O"
                    endArr.push("O");
                    myArr[0][1] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            // //top-right button
            if (button.value == "3") {
                if (switch1 == true) {
                    document.getElementById("top-right").innerText = "X";
                    endArr.push("X");
                    myArr[0][2] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("top-right").innerText = "O"
                    endArr.push("O");
                    myArr[0][2] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            // //mid-left button
            if (button.value == "4") {
                if (switch1 == true) {
                    document.getElementById("mid-left").innerText = "X";
                    endArr.push("X");
                    myArr[1][0] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("mid-left").innerText = "O"
                    endArr.push("O");
                    myArr[1][0] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            //mid-mid button
            if (button.value == "5") {
                if (switch1 == true) {
                    document.getElementById("mid-mid").innerText = "X";
                    endArr.push("X");
                    myArr[1][1] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("mid-mid").innerText = "O"
                    endArr.push("O");
                    myArr[1][1] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            //mid-right button
            if (button.value == "6") {
                if (switch1 == true) {
                    document.getElementById("mid-right").innerText = "X";
                    endArr.push("X");
                    myArr[1][2] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("mid-right").innerText = "O"
                    endArr.push("O");
                    myArr[1][2] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            //bottom-left button
            if (button.value == "7") {
                if (switch1 == true) {
                    document.getElementById("bottom-left").innerText = "X";
                    endArr.push("X");
                    myArr[2][0] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("bottom-left").innerText = "O"
                    endArr.push("O");
                    myArr[2][0] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            //bottom-mid button
            if (button.value == "8") {
                if (switch1 == true) {
                    document.getElementById("bottom-mid").innerText = "X";
                    endArr.push("X");
                    myArr[2][1] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("bottom-mid").innerText = "O"
                    endArr.push("O");
                    myArr[2][1] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            //bottom-right button
            if (button.value == "9") {
                if (switch1 == true) {
                    document.getElementById("bottom-right").innerText = "X";
                    endArr.push("X");
                    myArr[2][2] = "X";
                    switch1 = false;
                    document.getElementById("players-turn").innerText = "O's Turn"
                    button.setAttribute("disabled", true)
                }
                else {
                    document.getElementById("bottom-right").innerText = "O"
                    endArr.push("O");
                    myArr[2][2] = "O";
                    switch1 = true;
                    document.getElementById("players-turn").innerText = "X's Turn "
                    button.setAttribute("disabled", true)
                }
            }
            console.log('button value', button.value)
            if (myArr[0][0] == 'X' && myArr[0][1] == 'X' && myArr[0][2] == 'X' 
            || myArr[1][0] == 'X' && myArr[1][1] == 'X' && myArr[1][2] == 'X'
            || myArr[2][0] == 'X' && myArr[2][1] == 'X' && myArr[2][2] =='X'
            || myArr[0][0] == 'X' && myArr[1][0] == 'X' && myArr[2][0] =='X'
            || myArr[0][1] == 'X' && myArr[1][1] == 'X' && myArr[2][1] =='X'
            || myArr[0][2] == 'X' && myArr[1][2] == 'X' && myArr[2][2] =='X'
            ||myArr[0][0] == 'X' && myArr[1][1] == 'X' && myArr[2][2] =='X'
            ||myArr[0][2] == 'X' && myArr[1][1] == 'X' && myArr[2][0] =='X'
            ) {
                console.log("X Wins")
                setTimeout(function myFunction() {
                    alert("Good Job 'X' You Win !");
                    gameOver = true
                }, 100)
            }

            if (myArr[0][0] == 'O' && myArr[0][1] == 'O' && myArr[0][2] == 'O' 
            || myArr[1][0] == 'O' && myArr[1][1] == 'O' && myArr[1][2] == 'O'
            || myArr[2][0] == 'O' && myArr[2][1] == 'O' && myArr[2][2] =='O'
            || myArr[0][0] == 'O' && myArr[1][0] == 'O' && myArr[2][0] =='O'
            || myArr[0][1] == 'O' && myArr[1][1] == 'O' && myArr[2][1] =='O'
            || myArr[0][2] == 'O' && myArr[1][2] == 'O' && myArr[2][2] =='O'
            ||myArr[0][0] == 'O' && myArr[1][1] == 'O' && myArr[2][2] =='O'
            ||myArr[0][2] == 'O' && myArr[1][1] == 'O' && myArr[2][0] =='O'
            ) {
                console.log("O Wins")
                setTimeout(function myTimer() {
                    alert("Good Job 'O' You Win !");
                    gameOver = true
                }, 100)
            }
            else if(endArr.length == 9){
                setTimeout(function myTimer() {
                alert('Nobody Won, Try Again');
                gameOver = true
                }, 100)
                }



        }
    });
})






