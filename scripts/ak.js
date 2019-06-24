var bye = document.getElementById('last_menu_item');
bye.addEventListener('mouseover', function(){
  console.log('hovered');
});

bye.addEventListener('click', function(){
  console.log('clicked');
})

function setUp() {
  var project_container = document.getElementsByClassName('project_container')[0];
  var rect = project_container.getBoundingClientRect();
  var pos = String(rect.left + rect.width + 17);
  var top = document.getElementById('top');
  top.style.left = pos + 'px';
}

// Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
// https://developer.mozilla.org/en-US/docs/Web/Events/scroll

var last_known_scroll_position = 0;
var ticking = false;

function doSomething(scroll_pos) {
  // do something with the scroll position
  var top = document.getElementById('top');
  if (scroll_pos >= 401){

    top.style.position = 'fixed';
    top.style.top = '0px';
    top.style.paddingTop = '5px';
  }
  else {
    top.style.position = 'absolute';
    top.style.top = '401px';
  }
}

window.addEventListener('scroll', function(e) {

  last_known_scroll_position = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(function() {
      doSomething(last_known_scroll_position);
      ticking = false;
    });

    ticking = true;

  }

});

// to fix the up:
// on window resize, get the left postion of the first project container,
// + width of project container, + a little padding == left of #top

window.addEventListener('resize', function(){

  // to fix the up:
  // on window resize, get the left postion of the first project container,
  // + width of project container, + a little padding == left of #top
  var project_container = document.getElementsByClassName('project_container')[0];
  var rect = project_container.getBoundingClientRect();
  var pos = String(rect.left + rect.width + 17);
  var top = document.getElementById('top');
  top.style.left = pos + 'px';

  // for the position of the projects
  // var screen_per = window.innerWidth/2 - rect.width/2;
  // var projects = document.getElementsByClassName('project_container');
  // console.log(projects);

  // var project;
  // for (project in projects) {
  //   project.style.left = String(screen_per) + 'px';
  // }
  // project_container.style.left = String(screen_per) + 'px';

});
