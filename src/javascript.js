<<<<<<< HEAD

char_array = ["char1.png", "char2.png", "char3.png"];

let player = {"nama": "", "char": ""};


function clear_canvas(){
    let canvas = document.getElementById("canvas");
    //clear all child nodes
    while(canvas.hasChildNodes()){
        canvas.removeChild(canvas.lastChild);
    }
}

function change_src(n, char, index){

    if(n == 1){
        index = (index + 1) % char_array.length;
    }
    else if(n == -1){
        if(index == 0){
            index = char_array.length - 1;
        }
        else{
            index = (index - 1) % char_array.length;
        }
    }
    //change the src of the image
    console.log(index, char_array); //remove this
    char.src = char_array[index];
    
}




function create_menu(){
    let index = 0;
    let canvas = document.getElementById("canvas");
    let start_button = document.getElementById("start_btn");
    //remove start 
    clear_canvas()
    // create button

    let char = document.createElement("img");
    char.src = char_array[0];
    // set char id 
    char.id = "char";

    let left_button = document.createElement("button");
    left_button.innerText = "left";
    left_button.onclick = ()=>change_src(-1, char, index);

    let right_button = document.createElement("button");
    right_button.innerText = "right";
    right_button.onclick = ()=>change_src(1, char, index);
    // append to canvas

    let nama_box = document.createElement("input");
    nama_box.setAttribute("type", "text");
    nama_box.id = "nama";
    nama_box.placeholder = "Input Nama";
    
    let submit_button = document.createElement("button");
    submit_button.innerText = "Start Game";
    submit_button.onclick = ()=>{
        player.nama = nama_box.value;
        player.char = char_array[index];
        clear_canvas();
        console.log(player); //remove this
    }




    canvas.appendChild(left_button);
    canvas.appendChild(char);
    canvas.appendChild(right_button);
    canvas.appendChild(nama_box);
    canvas.appendChild(submit_button);

}


class character{

}
=======
>>>>>>> parent of f556b62 (Merge branch 'master' of https://github.com/michaelimmanuel/UAS)
