function ExecuteScript(strId)
{
  switch (strId)
  {
      case "640wGSOqs9R":
        Script1();
        break;
      case "5b4rqNFhcPn":
        Script2();
        break;
      case "67WxZ7pHzoD":
        Script3();
        break;
      case "6p0yZ4jN4DK":
        Script4();
        break;
      case "6QfH9TaBFaI":
        Script5();
        break;
      case "5i9GaHbZ0JG":
        Script6();
        break;
      case "6L2sVc3SX19":
        Script7();
        break;
      case "6a3gNOpsSdU":
        Script8();
        break;
      case "63QI6QIBYZj":
        Script9();
        break;
      case "6BXdPHNz4G3":
        Script10();
        break;
      case "5rvERaRu9Q4":
        Script11();
        break;
      case "5hsIqziKyvo":
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

