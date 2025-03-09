particlesJS("background", {

    particles: {
        number: {
            value: 15, // Number of particles
            density: {
                enable: true,
                value_area: 300, //Area where particles will be distributed
            },
        },

        color: {
            value: "#ffffff"
        },
        shape: {
            type: "triangle",
        },
        opacity: {
            value: 0.8,
            random: true,
            anum: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 5,
            random: true,
            anim: {
                enable: true,
                speed: 4,
                size_min: 0.3,
                sync: false,
            },
        },


        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },

        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "bounce",
            bounce: false,
        },
    },
    //Interactive
    interactivity: {
        dectect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true,
        },

    },

    retina_detect: true,
    

});
