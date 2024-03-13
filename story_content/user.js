function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6UkbCo6NfPA":
        Script1();
        break;
      case "6HjEgsn6mk2":
        Script2();
        break;
      case "5xKbceZWtXq":
        Script3();
        break;
      case "6SNGhAUPJeu":
        Script4();
        break;
      case "5smoyW4LOru":
        Script5();
        break;
      case "5lVzhW47xC7":
        Script6();
        break;
      case "65lXgXR9WpF":
        Script7();
        break;
      case "6RE1DEZgWic":
        Script8();
        break;
      case "6TFkxBtqBNU":
        Script9();
        break;
      case "64KgQ8EsAMH":
        Script10();
        break;
      case "6VlFZmiDrMo":
        Script11();
        break;
      case "6mhLG0cka9N":
        Script12();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSongku');
audio.src="musikku.mp3";
audio.load();
audio.play();
audio.volume=0.3;
}

function Script2()
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

function Script3()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location+"audio2.mp3";
audio.load();
audio.play();
}

function Script4()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio1.mp3";
audio.load();
audio.play();
}

function Script5()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio4.mp3";
audio.load();
audio.play();
}

function Script6()
{
  var player = GetPlayer();
this.Location= player.GetVar("location");

var audio = document.getElementById('bgSong');
audio.src=Location + "audio3.mp3";
audio.load();
audio.play();
}

function Script7()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.0;
}

function Script8()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.2;
}

function Script9()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.4;
}

function Script10()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.6;
}

function Script11()
{
  var audio = document.getElementById('bgSong');
audio.volume = 0.8;
}

function Script12()
{
  var audio = document.getElementById('bgSong');
audio.volume = 1.0;
}

