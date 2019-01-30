function load(){
    let time = 10000;
    setInterval(times,time);

    let lastTime = "";
    console.log(lastTime);
    function times(){
        // your ajax, thx
        lastTime++ ;
        document.getElementById("count").innerHTML = lastTime;
    };
    times();
};

