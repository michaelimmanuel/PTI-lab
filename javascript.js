
char_array = ["img/char1.png", "img/char2.png"];
let player = {"nama": "", "char": "","jurusan": "", "semester":1, "hunger":50, "health":50, "sleep":50, "belajar":0, "counter":0};


function clear_canvas(){
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = "";
    canvas.style.backgroundImage = "";
}

function change_src(index){
    let char = document.getElementById("char");
    char.src = char_array[index];
}

function menu_awal(){
    clear_canvas();
    let canvas = document.getElementById("canvas");
    canvas.innerHTML = `
        <div id="canvas">
            <div></div>
            <div class="row justify-content-center text-center d-flex">
                <div class="row">
                    <div class="col">
                        <button id="start_btn" onclick="create_menu();"> Start Game</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <button id="about_btn" onclick="about_menu();"> About Us</button>
                    </div>
                </div>
            </div>
        </div>`;
}

function about_menu(){
    clear_canvas();
    let canvas = document.getElementById("canvas");
    let row_head1 = document.createElement("div");
    let row_name1 = document.createElement("div");
    let row_name2 = document.createElement("div");
    let row_name3 = document.createElement("div");
    let row_name4 = document.createElement("div");
    let row2 = document.createElement("div");
    row_head1.id = "developer";
    row_head1.className = "row text-center";
    row_head1.innerHTML = "<h1>Developer</h1>";

    row_name1.innerHTML = "<p>Christsen Alston Angello (00000053444)</p>";
    row_name2.innerHTML = "<p>Michael Imanuel (00000054631)</p>";
    row_name3.innerHTML = "<p>Koong Hiap (00000055136)</p>";
    row_name4.innerHTML = "<p>Wahyu Dwi Setio Wibowo (00000055320)</p>";

    
    row2.innerHTML = `<div class="col text-center"><button id="start_btn" onclick="menu_awal();"> Back to Start</button></div>`;
    

    canvas.appendChild(row_head1);
    canvas.appendChild(row2);
    row_head1.appendChild(row_name1);
    row_head1.appendChild(row_name2);
    row_head1.appendChild(row_name3);
    row_head1.appendChild(row_name4);
}


function create_menu(){
    clear_canvas();
    let canvas = document.getElementById("canvas");
    let start_button = document.getElementById("start_btn");
    let index = 0;
    //remove start 


    let row = document.createElement("div");
    row.className = "row  align-items-center text-center d-flex";
    canvas.appendChild(row);

    let col_left = document.createElement("div");
    col_left.className = "col justify-content-center text-center ";
    row.appendChild(col_left);

    let col_center = document.createElement("div");
    col_center.className = "col justify-content-center text-center ";
    row.appendChild(col_center);

    let col_right = document.createElement("div");
    col_right.className = "col justify-content-center text-center align-items-center ";
    row.appendChild(col_right);

    // create button
    
    let char = document.createElement("img");
    char.src = char_array[0];
    // set char id 
    char.id = "char";

    let left_button = document.createElement("button");
    left_button.className = "btn";
    //change src to left onclick
    left_button.onclick = function(){
        // change src
        if(index - 1 < 0){
            index = char_array.length - 1;
        }
        else{
            index -= 1;
        }
        change_src(index);
    }

    let left_icon = document.createElement("i");
    left_icon.className = "bi bi-caret-left-square-fill";
    left_icon.setAttribute("style", "font-size: 70px; color: #152238;");

    left_button.appendChild(left_icon);

    let right_button = document.createElement("button");
    right_button.className = "btn";
    right_button.onclick = function(){
        if (index + 1 > char_array.length - 1){
            index = 0;
        }
        else{
            index += 1;
        }
        change_src(index);
    }

    let right_icon = document.createElement("i");
    right_icon.className = "bi bi-caret-right-square-fill";
    right_icon.setAttribute("style", "font-size: 70px; color:#152238");

    right_button.appendChild(right_icon);


    col_left.appendChild(left_button);
    col_center.appendChild(char);
    col_right.appendChild(right_button);
    
    let nama_row = document.createElement("div");
    nama_row.className = "row ";
    let jurusan_row = document.createElement("div");
    jurusan_row.className = "row mt-3 ";

    canvas.appendChild(nama_row);
    canvas.appendChild(jurusan_row);

    let nama_col = document.createElement("div");
    nama_col.className = "col justify-items-center";
    nama_row.appendChild(nama_col);
    
    let jurusan_col = document.createElement("div");
    jurusan_col.className = "col justify-items-center";
    jurusan_row.appendChild(jurusan_col);

    let nama_box = document.createElement("input");
    nama_box.setAttribute("type", "text");
    nama_box.id = "nama";
    nama_box.placeholder = "Input Nama";
    nama_box.className = "form-control w-50 mx-auto";
    
    nama_col.appendChild(nama_box);

    let jurusan_box = document.createElement("input");
    jurusan_box.setAttribute("type", "text");
    jurusan_box.id = "Jurusan";
    jurusan_box.placeholder = "Jurusan";
    jurusan_box.className = "form-control w-50 mx-auto";
    jurusan_col.appendChild(jurusan_box);


    let submit_row = document.createElement("div");
    submit_row.className = "row  align-items-center text-center my-4";
    canvas.appendChild(submit_row)

    let submit_col = document.createElement("div");
    submit_col.className = "col justify-content-center align-items-center";
    submit_row.appendChild(submit_col);


    let submit_button = document.createElement("button");
    submit_button.innerText = "Start Game";
    submit_button.id = "start_game";
    submit_button.onclick = ()=>{
        if (nama_box.value == ""){
            alert("Nama tidak boleh kosong");
            return; 
        }
        else if(jurusan_box.value == ""){
            alert("Jurusan tidak boleh kosong");
            return;
        }
        else{
            player.nama = nama_box.value;
            player.jurusan = jurusan_box.value;
        }
        player.char = char_array[index];
        player.health = 50;
        player.belajar = 0;
        player.sleep = 50;
        player.hunger = 50;

        play_game();
        console.log(player); //remove this
    }
    submit_col.appendChild(submit_button);
}
let salamCounter = 0;

function clock() {
    const date = new Date();
    const hours = date.getMinutes();
    const minutes = date.getSeconds();

    const salam = ["Selamat Pagi", "Selamat Siang", "Selamat Sore", "Selamat Malam"];
    let salam_text = document.getElementById("salam");
    
    const hour_deg = (((hours)+11)%12+1) * 30 + minutes * 0.5;
    const minute_deg = minutes * 6;

    if(document.querySelector(".hour") != null){
        document.querySelector('.hour').style.transform = `rotate(${hour_deg}deg)`
        document.querySelector('.min').style.transform = `rotate(${minute_deg}deg)`
    }
    let time_controller = hours % 24;
    let canvas = document.getElementById("content");

    if(time_controller >= 6 && time_controller < 12 ){
        canvas.style.backgroundImage = "url(img/morning.png)"; // pagi
        canvas.style.backgroundPosition="center";
        salam_text.innerText = salam[0] + " " + player.nama;
    }
    else if(time_controller >= 12 && time_controller < 15 ){
        canvas.style.backgroundImage = "url(img/noon.png)"; //siang
        canvas.style.backgroundPosition = "center";
        salam_text.innerText = salam[1] + " " + player.nama;
        
        
    }
    else if(time_controller >= 15 && time_controller < 18 ){
        canvas.style.backgroundImage = "url(img/afternoon.png)"; //sore
        canvas.style.backgroundPosition = "center";
        salam_text.innerText = salam[2] + " " + player.nama;
        
        
    }
    else if(time_controller >= 18 || time_controller < 6 ){
        canvas.style.backgroundImage = "url(img/night.png)"; //malam
        canvas.style.backgroundPosition = "center";
        salam_text.innerText = salam[3] + " " + player.nama;
    }
}



function play_game(){
    clear_canvas();
    var clock_interval = setInterval(clock, 1000);
    let canvas = document.getElementById("canvas");
    
    let message = document.createElement("span");
    message.id = "salam";


    let header = document.createElement("div");
    header.className = " text-white text-center py-2 px-4 font-big";

    let row_clock = document.createElement("div");
    row_clock.className = "row my-2 gap-3";

    row_clock.innerHTML =`<div class="text-light text-start col-3">
                                Nama: `+player.nama +`<br> <div id = "semester">Semester: `+player.semester+`</div> <br>Jurusan: `+player.jurusan+`
                            </div>
                            <div class="col-6 justify-content-center" id="clock" >
                                <div class="wrap">
                                    <span class="hour"></span>
                                    <span class="min"></span>
                                    <span class="dot"></span>
                                </div>
                            </div>
                            <div class="col-3" >
                            </div>`;
    header.appendChild(row_clock);

    
    let row_prog1 = document.createElement("div");
    let row_prog2 = document.createElement("div");
    row_prog1.className = "row justify-content-center ";
    
    row_prog1.innerHTML = `
    <div class="col text-center"><div class="progress"><div id="health" class="progress-bar bg-danger" role="progressbar" style="width: 50%"  aria-valuemin="0" aria-valuemax="100"></div></div>Mental Health</div>
    <div class="col text-center"><div class="progress"><div id="hunger" class="progress-bar bg-warning progress-bar-striped" role="progressbar" style="width: 50%" aria-valuemin="0" aria-valuemax="100"></div></div>Hunger</div>
    `;

    row_prog2.className = "row justify-content-center";
    row_prog2.innerHTML = `
    <div class="col text-center"><div class="progress"><div id="sleep" class="progress-bar progress-bar-striped" role="progressbar" style="width: 50%"  aria-valuemin="0" aria-valuemax="100"></div></div>Sleep</div>
    <div class="col text-center"><div class="progress"><div id="belajar" class="progress-bar bg-success progress-bar-striped" role="progressbar" style="width: 0%" aria-valuemin="0" aria-valuemax="100"></div></div>Belajar</div>
    `;

    //  `<div class="col text center"><btn class="btn btn-primary" onclick = "add_hunger()" >Eat Food</btn></div>`
    
    let main_content = document.createElement("div");
    main_content.className = "text-center";
    main_content.id ="content";

    let footer = document.createElement("div");
    footer.className = " text-white text-center py-2 px-4";

    let button_row = document.createElement("div");
    button_row.className = "row justify-content-center p-4";
    button_row.innerHTML = `
    <div class="col"><button class="btn dark-blue px-5 btn-primary" onclick = "add_hunger()" >Eat Food</button></div>
    <div class="col"><button class="btn dark-blue px-5 btn-primary" onclick = "add_sleep()" >Sleep</button></div>
    <div class="col"><button class="btn dark-blue px-5 btn-primary" onclick = "add_belajar()" >Study</button></div>
    <div class="col"><button class="btn dark-blue px-5 btn-primary" onclick = "add_health()" >Game</button></div>
    `;

    footer.appendChild(button_row);

    char_img = document.createElement("img");
    char_img.id = "char";
    char_img.setAttribute("src", player.char);
    main_content.appendChild(char_img);
    main_content.appendChild(message);


    //append row prog1
    header.appendChild(row_prog1);
    header.appendChild(row_prog2);
    canvas.appendChild(header);
    canvas.appendChild(main_content);
    canvas.appendChild(footer);

    progress_animate(clock_interval);

}

function add_hunger (){
    let char = document.getElementById("char");
    char.setAttribute("src", player.char.slice(0,9)+"_makan.png");
    setTimeout(function(){
        char.setAttribute("src", player.char);
    }, 3000);
    
    player.hunger += 10;

    if (player.hunger > 100){
        player.hunger = 100;
    }
    document.getElementById("hunger").style.width = player.hunger + "%";

}

function add_sleep (){
    let char = document.getElementById("char");
    char.setAttribute("src", player.char.slice(0,9)+"_tidur.png");
    setTimeout(function(){
        char.setAttribute("src", player.char);
    }, 3000);

    player.sleep += 10;
    if (player.sleep > 100){
        player.sleep = 100;
    }
    document.getElementById("sleep").style.width = player.sleep + "%";
}

function add_belajar (){
    player.counter = 0;
    let char = document.getElementById("char");
    let img_src = player.char.slice(0,9);
    char.setAttribute("src", img_src+"_belajar.png");
    setTimeout(function(){
        char.setAttribute("src", img_src+".png");
    }, 3000);

    player.belajar += 10;
    player.health -= 10;
    player.hunger -= 10;
    
    if (player.belajar > 100){
        player.belajar = 100;
    }
    document.getElementById("belajar").style.width = player.belajar + "%";
}

function add_health (){
    let char = document.getElementById("char");
    char.setAttribute("src", player.char.slice(0,9)+"_main.png");
    setTimeout(function(){
    char.setAttribute("src", player.char);
    }, 3000);


    let salam_text = document.getElementById("salam");
    let counter =0;
    // random number between 0 and 1
    let random_num = Math.round(Math.random());

    if(char.getAttribute("src") == "img/char1_main.png"){
        console.log("char1");
        if (random_num == 0){
            player.health -= 8;

            
            let delay = setInterval(function(){
                counter++;
                salam_text.innerHTML = "You lose the game";
                if (counter == 500){
                    
                    clearInterval(delay);
                }
            }, 1);
            if (player.health < 0){
                player.health = 0;
            }
        }
        
        else{
            player.health += 40;
            let delay = setInterval(function(){
                counter++;
                salam_text.innerHTML = "You won the game";
                if (counter == 500){
                    
                    clearInterval(delay);
                }
            }, 1);
            if (player.health > 100){
                player.health = 100;
            }
        }
    }

    else if(char.getAttribute("src") == "img/char2_main.png"){
        console.log("char2");
        if (random_num == 0){
            player.health -= 8;

            
            let delay = setInterval(function(){
                counter++;
                salam_text.innerHTML = "Your drawing is ugly";
                if (counter == 500){
                    
                    clearInterval(delay);
                }
            }, 1);
            if (player.health < 0){
                player.health = 0;
            }
        }
        else{
            player.health += 40;
            let delay = setInterval(function(){
                counter++;
                salam_text.innerHTML = "Your drawing is beautiful";
                if (counter == 500){
                    
                    clearInterval(delay);
                }
            }, 1);
            if (player.health > 100){
                player.health = 100;
            }
        }
        
    
    }
    
    document.getElementById("health").style.width = player.health + "%";
    
}

function reset_interval(sleep, hunger, clock, belajar, health){
    clearInterval(sleep);
    clearInterval(hunger);
    clearInterval(clock);
    clearInterval(belajar);
    clearInterval(health);
    
}


function progress_animate(clock_interval) {

    let hunger = document.getElementById("hunger");
    let sleep = document.getElementById("sleep");
    let health = document.getElementById("health");
    let belajar = document.getElementById("belajar");

    let belajar_interval = setInterval(function(){
        if (player.belajar >= 100){
            player.belajar = 0;
            belajar.style.width = player.belajar + "%";

            let semester = document.getElementById("semester");
            player.semester += 1;
            semester.innerText = "Semester: " + player.semester;
            if(player.semester == 8){
                alert("You won the game");
                reset_interval(sleep_interval, hunger_interval, clock_interval, belajar_interval, health_interval);
                create_menu();
            }
        }
    }, 1000);

    let hunger_interval = setInterval(()=>{
        // reduce hunger
        player.hunger -= 1;
        hunger.style.width = player.hunger + "%";
        if (player.hunger <= 0 ){
            alert("Game over (death by starvation)");
            reset_interval(sleep_interval, hunger_interval, clock_interval, belajar_timer, health_interval);
            create_menu();
        }}, 1000);
    
    let sleep_interval = setInterval(()=>{
        // reduce sleep
        player.sleep -= 1;
        sleep.style.width = player.sleep + "%";
        if (player.sleep <= 0){
            alert("Game over (death by sleep deprivation)");
            reset_interval(sleep_interval, hunger_interval, clock_interval, belajar_timer, health_interval);
            create_menu();
        }} , 4000);
        
    let belajar_timer = setInterval(()=>{
        player.counter += 1;
        if (player.counter >= 300){
            alert("Game over (Anda di DO))");
            reset_interval(sleep_interval, hunger_interval, clock_interval, belajar_timer, health_interval);
            create_menu();
            player.counter = 0;
        }
    }, 1000);

    let health_interval = setInterval(()=>{
        // reduce health
        player.health -= 1;
        health.style.width = player.health + "%";
        if (player.health <= 0){
            alert("Game over (death by suicide)");
            reset_interval(sleep_interval, hunger_interval, clock_interval, belajar_timer, health_interval);
            create_menu();
        }
    } , 4000);
}
