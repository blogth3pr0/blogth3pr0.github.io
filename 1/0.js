javascript:

var delayInput = prompt("Delay between actions (ms)", "1000");
var stopAfter = prompt("Stop after how many friend requests are cancelled?", "100");
var workDelay = parseInt(delayInput, 10);

var loading = document.createElement("div");
loading.setAttribute("id", "noni_loading");
loading.setAttribute("style", "position: fixed; background: rgba(255,255,255,0.8); top: 0; left: 0; width: 100%; font-size: 24px; z-index: 1000; padding: 12px;");
document.body.appendChild(loading);

var i=0;
var delay=0;
var cont=true;

var counter = 0;
var countUntil = Math.floor(stopAfter/5);
function foo() {
    if (counter <= countUntil){
        counter++;
        window.scrollTo(0,document.body.scrollHeight);
        window.setTimeout(foo, 1000+(Math.floor((Math.random()*10))));
    }
}

foo();

function addFriends(){
    
    var inputs = document.querySelectorAll('._54k8._56bs._56bt');
    
    var stopAfterNumber=0;
    if(parseInt(stopAfter, 10)>inputs.length) {
        stopAfterNumber=inputs.length;
    } else {
        stopAfterNumber=parseInt(stopAfter, 10);
    }

    if(inputs.length<=0) {
        document.getElementById("noni_loading").setAttribute("style", "position: fixed; background: rgba(140,60,60,0.8); top: 0; left: 0; width: 100%; font-size: 24px; color: #fff; z-index: 1000; padding: 12px;");
        document.getElementById("noni_loading").innerHTML = "No 'Add Friend'-buttons found :(";
    
        alert("That didn't work...");
        document.getElementById("noni_loading").setAttribute("style", "display: none;");
    
    } else {

        if(workDelay <= 0) {
            delay=0;
        } else if(workDelay <= 10) {
            delay=workDelay+(Math.floor((Math.random()*5)));
        } else {
            delay=workDelay+(Math.floor(Math.random()*(0.1*delay))-(0.05*workDelay));
        }

        if(i<stopAfterNumber) {
            inputs[i].click();
            document.getElementById("noni_loading").innerHTML = i+" friend requests cancelled! "+delay+"ms waiting...";
            cont=true;
        } else {
            document.getElementById("noni_loading").innerHTML = i+" friend requests cancelled";
            document.getElementById("noni_loading").setAttribute("style", "position: fixed; background: rgba(60,140,60,0.8); top: 0; left: 0; width: 100%; font-size: 24px; color: #fff; z-index: 1000; padding: 12px;");
            cont=false;
        }
    
        i++;
        if(cont==true) {
            setTimeout(addFriends, delay);
        } else {
            alert("Done!");
            document.getElementById("noni_loading").setAttribute("style", "display: none;")
        }
    }
}

addFriends();
