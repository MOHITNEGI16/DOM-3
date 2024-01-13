// Declerative Part 
const container = document.getElementById('container');
const shape = document.getElementById("shape");
const buttonColor = document.getElementById("buttonsOne");
const buttonShape = document.getElementById("buttonsTwo");
// const containerButton = document.getElementById("buttonDiv");
// // styles part
// container.style.width = "20vw";
// container.style.height = "20vh";
// container.style.border = "2px solid black";
// container.style.marginLeft = "460px";
// container.style.marginTop = "160px";

// containerButton.style.marginLeft = "500px";
// containerButton.style.marginTop = "160px";
// containerButton.style.border = "2px solid black";
// containerButton.style.width = "140px";

// container.style.width = "";

// console.log(containerButton);



buttonColor.addEventListener('click',()=>{
    let hexCodes = "0123456789ABCDEF"
    let hexVal="#";
    for(let i = 1; i <= 6; i++ ){
        let index = Math.floor(Math.random()*16);
        hexVal += hexCodes[index];
    }

    container.style.backgroundColor = hexVal;

})


buttonShape.addEventListener("click", ()=>{
    let shapeArr = ["circle","square","triangle"];
    let random = Math.floor(Math.random()*3);

    console.log(random);
    // let random = 0;

    if(shapeArr[random]=="circle"){

       shape.style.borderRadius = "50%";
       shape.style.backgroundColor = "white";

    }
    else if (shapeArr[random]=="square"){

        shape.style.width = "59%";
        shape.style.height = "59%";
        shape.style.backgroundColor = "white";
    }
    else{
        shape.style.width = "59%";
        shape.style.height = "59%";
        shape.style.borderLeft = "55px solid transparent";
        shape.style.borderRight = "55px  solid transparent";
        shape.style.borderBottom = "98.6px solid white" ; 
        shape.style.backgroundColor = " transparent";


    }
})
