class Player{
    constructor(){
        var heightMain = document.getElementById("player");
        heightMain.style.height = screen.height + "px";
        if(screen.width<500){
            heightMain.style.width = screen.width +"px"
        }
        var heightDiv = document.getElementById("content");
        heightDiv.style.height=screen.height-300 + "px"
    }
}
onload = new Player();

// class buttons
class Audio_Player{
    constructor(){
        this.audio_file = document.getElementById("audio_file");
        this.title_audio = document.getElementById("title_radio");
        this.play_pause_button = document.getElementById("play");
        this.isPlayed;
        this.play_pause_button.addEventListener("click",()=>{
            this.play_pause()
        });
        this.names_radio=[];
        this.names_radio[0]="1- Radio Hits";
        this.names_radio[1]="2- Radio Masr";
        this.names_radio[2]="3- ElRadio 9090";
        this.names_radio[3]="4- Mega FM";
        this.names_radio[4]="5- Nile FM";
        this.names_radio[5]="6- Nogoum FM";
        this.names_radio[6]="7- Nagham FM";
        this.names_radio[7]="8- Mahatet Masr";
        
        this.source_audio = [];
        this.source_audio[0]= "http://178.32.62.154:8957/;";
        this.source_audio[1]= "https://live.radiomasr.net/RADIOMASR";
        this.source_audio[2]= "http://9090streaming.mobtada.com/9090FMEGYPT";
        this.source_audio[3]= "http://nebula.shoutca.st:8211/;stream.mp3"
        this.source_audio[4]= "https://reach-audio.esteam.rocks/radio/8010/live.mp3"
        this.source_audio[5]= "https://reach-audio.esteam.rocks/radio/8000/live.mp3?1608419236"
        this.source_audio[6]= "https://ahmsamir.radioca.st/stream"
        this.source_audio[7]= "https://s3.radio.co/s9cb11828c/listen"

        this.server = 0;
        this.setResource();

        document.getElementById("next").addEventListener("click",()=>{
            if(this.server<this.source_audio.length-1){
                ++this.server;
                this.isPlayed =false;
            }else{
                this.server=0;
                this.isPlayed =false;
            }
            this.setResource();
        });

        document.getElementById("back").addEventListener("click",()=>{
            if(this.server>0){
                --this.server;
                this.isPlayed =false;
            }else{
                this.server=this.source_audio.length-1;
                this.isPlayed =false;
            }
            this.setResource();
        });
    }
    setResource(){
        this.audio_file.src = this.source_audio[this.server];
        this.title_audio.innerHTML = this.names_radio[this.server];
        this.play_pause();  
    }
    play_pause(){
        if(this.isPlayed == false){
            this.play_pause_button.src = "./img/pause.png"
            this.audio_file.play();
            this.isPlayed = true;
        }else{
            this.play_pause_button.src = "./img/play.png"
            this.audio_file.pause();
            this.isPlayed = false;
        }
    }
}

onload = new Audio_Player();

class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file")
        this.audio_file.volume = 50/100;

        this.volume_range = document.getElementById("volume_range");
        this.volume_range.addEventListener("change",()=>{
            this.audio_file.volume = this.volume_range.value/100;
        });
        this.play_range = document.getElementById("play_speed");
        this.play_range.playbackRate = 1;
        this.play_range.addEventListener("change",()=>{
        this.audio_file.playbackRate = this.play_range.value/100;
        });
    }
}
onload = new Volume();

class Color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color1.addEventListener("click",()=>{
            this.select_color("color1");
        });
        this.color2 = document.getElementById("color2");
        this.color2.addEventListener("click",()=>{
            this.select_color("color2");
        });
        this.color3 = document.getElementById("color3");
        this.color3.addEventListener("click",()=>{
            this.select_color("color3");
        });
        this.color4 = document.getElementById("color4");
        this.color4.addEventListener("click",()=>{
            this.select_color("color4");
        });
        if(localStorage.getItem("COLOR")==null){
            document.body.style.background ="linear-gradient(to left,orange,red)";
        }
        this.select_color(localStorage.getItem("COLOR"));
    }
    select_color(color){
        if(color == "color1"){
            document.body.style.background ="black";
        }
        else if(color == "color2"){
            document.body.style.background ="linear-gradient(to left,orange,red)";
        }
        else if(color == "color3"){
            document.body.style.background =" rgb(243, 81, 81)";
        }
        else if(color == "color4"){
            document.body.style.background =" rgb(61, 141, 210)";
        }
        localStorage.setItem("COLOR",color)
    }
}

onload = new Color();