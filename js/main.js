M.AutoInit();

AOS.init({
    easing: 'ease-out-back',
    duration: 100
});

// auto typing text
var typed = new Typed('.typing-text', {
    strings: ["Foli Martin"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 100,
    backDelay: 1000,
});

