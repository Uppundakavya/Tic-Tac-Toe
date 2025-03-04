let boxes = document.querySelectorAll(".box");
let resetgame = document.querySelector("#reset-game");
let turno = true;
const winPatterns = {
    [0, 1, 2],
    [0 ,3, 6],
    [0, 4, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
boxes.forEach(box)=> {
    box.EventListener("click",() => {
        console.log("box was clicked");
        if(turnO) {
            box.innerText="O";
            turnO = false;
            }else{
                box.innerText="x";
                turn0 = true;
            }

    });
}
