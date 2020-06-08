(function(window){
    var byeSpeaker = new Object();
    var speakword = "Goodbye";
    byeSpeaker.speak = function(name){
        console.log(speakword + " " + name);
    };
    window.byeSpeaker = byeSpeaker;
})(window);
