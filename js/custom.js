$('.angle_top').click(function(){
    $('html').animate({
        scrollTop: 0
    },1200);
});
$(window).scroll(function(){
    var scroll= $(this).scrollTop();
    if(scroll >100){
        $('.nave_bar').addClass('fixed')
    }
    else{
      $('.nave_bar').removeClass('fixed')  
    }
    if(scroll > 500) {
        $('.angle_top').fadeIn();
    }
    else{
        $('.angle_top').fadeOut();
    }
});

$('.clint_review_slide').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    centerMode: true,
  centerPadding: '0px',
    responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
          
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
        
        
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
        
        
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
          arrows: false,
          dots: false,
      }
    }
    
  ]
    
});
	
$(document).ready(function(){
    $('.venobox').venobox({
    spinner:'cube-grid',
}); 
});

var mixer = mixitup('.work_part_images');
$(document).ready(function(){

	$('#bar1').barfiller();
	$('#bar2').barfiller();
	$('#bar3').barfiller({ barColor: '#eb4d55' });
	$('#bar4').barfiller({ barColor: '#eb4d55', duration: 3000 });
	$('#bar5').barfiller({ barColor: '#eb4d55', duration: 3000 });
	$('#bar6').barfiller({ barColor: '#eb4d55', duration: 3000 });
	$('#bar7').barfiller({ barColor: '#eb4d55', duration: 3000 });
	
});

var typed = new Typed('.element', {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */
  strings: [
    'I am',
      'Web Designer',
    'And',
    'Developer!',
  ],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 100,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 0,
    

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 500,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: true,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: true,
  cursorChar: '|',
  autoInsertCss: true,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html',

  /**
   * Before it begins typing
   * @param {Typed} self
   */
  onBegin: (self) => {},

  /**
   * All typing is complete
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * During looping, after last string is typed
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {},

  /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {},

  /**
   * After reset
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * After destroy
   * @param {Typed} self
   */
  onDestroy: (self) => {}
});





particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});


/* ---- stats.js config ---- */

var count_particles, stats, update;
stats = new Stats;
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);
count_particles = document.querySelector('.js-count-particles');
update = function() {
  stats.begin();
  stats.end();
  if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
    count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
  }
  requestAnimationFrame(update);
};
requestAnimationFrame(update);

//............................/


























