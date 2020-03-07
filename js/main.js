function smoothScroll() {
    var target = document.querySelector(target);
    var targetPos = target.getBoundingClientRect().top;
    var start = window.pageYOffset;
    var dist = targetPos - start;
    var startTime = null;
}

function animation(currentTime){
    if (startTime == null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed,start,dist,duration);
    window.scrollTo(0,run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
}

function ease(t, b, c, d) {
    t /= d / 2;
    if (t<1) return c / 2 * t * t + b;
    t--;
    return -c /2 * (t * (t - 2) - 1) + b;

    requestAnimationFrame(animation);
}

var about = document.querySelector("#about-button");
about.addEventListener(click, function(){
    smoothScroll("#leather", 1000);
})
function returnFunction(){
    return true;
}