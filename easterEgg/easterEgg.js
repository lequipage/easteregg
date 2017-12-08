function easterEgg(){
}

var current_tip = "";

/*
* function typeSomething
* Trigger an "action" when a "word" is written on keyboard
* It will only work if no input is focus
* @e : keypress event (event)
* @action : action to trig (fonction)
* @el : where the action is triggered (dom)
* @word : word to write to trig the action (string)
*/
easterEgg.prototype.typeSomething = function(e, word, action){
  if ($('input:focus').length == 0){
    current_tip += String.fromCharCode(e.which);
    console.log(current_tip);
    if(current_tip.includes(word)){
      current_tip = "";
      return true;
    }
  }
}

/*
* function tipSomething
* Got a drunk effect on an element
* @el : the element which is triggered
* @word : word to write to trig the action (string)
*/
easterEgg.prototype.drunk = function (it = 3, t = 4, f = 1, el = document.getElementsByTagName('body')[0]) {
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
