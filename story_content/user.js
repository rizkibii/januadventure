function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5pMyWQwTW5W":
        Script1();
        break;
      case "5dBOzWZB91D":
        Script2();
        break;
      case "5W8sQM0gL1R":
        Script3();
        break;
      case "6e6YewHzbW6":
        Script4();
        break;
      case "5kc7uc2uAEF":
        Script5();
        break;
      case "6LMtwcZt0xJ":
        Script6();
        break;
      case "5ia7d7LkSnH":
        Script7();
        break;
      case "6E0Akd02AqG":
        Script8();
        break;
      case "6hVqQHFjJ3m":
        Script9();
        break;
      case "6686dAuAUeN":
        Script10();
        break;
      case "68Dxmu9N9vd":
        Script11();
        break;
  }
}

function Script1()
{
  //load the scripts dynamically into the head of the document
function add_line() {
    var line = document.createElement("audio");
    var head=document.getElementsByTagName('body')[0];
    line.type = "audio/mp3";
    line.src="";
    line.id="bgSong" ;
	line.autoplay = true;
	line.loop = true;
    head.appendChild(line);
}

//but we only want to add these once!
if(document.getElementById('bgSong')==null){
	add_line();
var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

}

function Script2()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio2.mp3";
audio.load();
audio.play();
}

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio1.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio4.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio3.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

