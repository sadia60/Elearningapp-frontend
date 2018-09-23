$('.video').click(function(){this.paused?this.play():this.pause();});

function myFunction(){
    let isBoss = confirm("Do you want to Take a quiz?");

    // alert( isBoss ); // true if OK is pressed

    if(isBoss){
        window.location.href = '../quiz.html'
    }
    else{
        window.location.href = '../quiz.html'
    }

}

// document.getElementById('videoPlayer').addEventListener('ended',function(){
//     window.location.href = '../quiz.html';
// },false);