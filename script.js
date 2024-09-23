let turn = "x";
let title = document.querySelector("span");
let h4 = document.querySelector("h4");
let arr = [];
function w(first , second , third){
    h4.innerHTML = `Player <span>${arr[first]}</span> is winner`;
    document.getElementById("item"+first).style.backgroundColor = "#3D074A";
    document.getElementById("item"+second).style.backgroundColor = "#3D074A";
    document.getElementById("item"+third).style.backgroundColor = "#3D074A";
}
function winner(){
    for(let i = 1; i < 10; i++){
        arr[i] = document.getElementById("item"+i).innerHTML;
    }
    if(arr[1] == arr[2] && arr[2] == arr[3] && arr[1] !=""){
        w(1,2,3);
    }
    else if (arr[4] == arr[5] && arr[5] == arr[6] && arr[4]!=""){
        w(4,5,6);
    }    
    else if (arr[7] == arr[8] && arr[8] == arr[9] && arr[7]!=""){
        w(7,8,9);
    }
    else if (arr[1] == arr[5] && arr[5] == arr[9] && arr[1]!=""){
        w(1,5,9);
    }

    else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1]!=""){
        w(1,4,7);
    }
    else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2]!=""){
        w(2,5,8);
    }
    else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[3]!=""){
        w(3,6,9);
    }
    else if (arr[3] == arr[6] && arr[6] == arr[9] && arr[3]!=""){
        w(3,6,9);
    }
    else if (arr[3] == arr[5] && arr[5] == arr[7] && arr[3]!=""){
        w(3,5,7);
    }
}
function game(id){
    let ele = document.querySelector(`#${id}`);
    if(ele.innerHTML == "" && turn == "x"){
        ele.innerHTML = "x";
        turn = "o";
        title.innerHTML = "o";
        ele.style.color = "#F1F5F5";
        ele.style.textShadow = `
        0 0 10px #3649CA, 
        0 0 20px #3649CA, 
        0 0 30px #3649CA, 
        0 0 40px #3649CA, 
        0 0 50px #3649CA, 
        0 0 60px #3649CA
    `;
        winner();
    }
    if(ele.innerHTML == "" && turn == "o"){
        ele.innerHTML = "o";
        turn = "x";
        title.innerHTML = "x";
        ele.style.textShadow = `
            0 0 10px #CF1F6B, 
            0 0 20px #CF1F6B, 
            0 0 30px #CF1F6B, 
            0 0 40px #CF1F6B, 
            0 0 50px #CF1F6B, 
            0 0 60px #CF1F6B
        `;
        winner();
    }
}
document.querySelector(".again").onclick = () => {
    location.reload();
}
