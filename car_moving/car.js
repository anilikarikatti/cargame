m=0;
var y;



function start(){
    y = setInterval(run,100);

    function run(){
        if(m == 1110){
            clearInterval(y);
            m=0;
        }
        else{
            m+=5;
            let x = document.getElementById("img");
            x.style.marginLeft = m+'px';

        }
        // console.log(y);
       
    }

    
}


function stop(){
    clearInterval(y);
}

function reset(){
    m=0;
    let x = document.getElementById("img");
            x.style.marginLeft = m+'px';
    
}