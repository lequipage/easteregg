function easterEgg(){
}

var current_tip = "";

// Tip Something
easterEgg.prototype.tipSomething = function(e, el, word, action){
  if ($('input:focus').length == 0){
    current_tip += String.fromCharCode(e.which);
    console.log(current_tip);
    if(current_tip.includes(word)){
        if (action == "drunk")
          this.drunk(el);
        current_tip = "";
    }
  }
}

/*Function Drunk*/
easterEgg.prototype.drunk = function (el, it = 3, t = 4, f = 1) {
    let c = 0;
    const a = () => {
        if (c < it) {
            el.setAttribute("style", "transition: "+t+"s; filter: blur(" + f + "px); transform: scale(1.02); transform: rotate(0.4deg); overflow: hidden;");
            setTimeout(function () {
            el.setAttribute("style", "transition: "+t+"s; filter: blur(0px); transform: scale(1); transform: rotate(-0.4deg); overflow: hidden;");
            setTimeout(function () {
                a();
            }, t * 1000 / 2);
        }, t * 1000 / 2);
            c++;
        } else {
            el.setAttribute("style", "transition: "+t+"s;");
            setTimeout(function () {
                el.setAttribute("style", "");
            }, t * 1000 / 2);
        }
    }
    a();
}
