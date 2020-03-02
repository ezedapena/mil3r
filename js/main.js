function play(id){
    if(document.getElementById(id).className=="music 0")
    {
        document.getElementById(id).src="images/pause.png"
        document.getElementById(id).className="music 1"
    }else{
        document.getElementById(id).src="images/play.png"
        document.getElementById(id).className="music 0"
    }
    
}