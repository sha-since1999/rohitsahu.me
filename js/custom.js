$(function() {

	function testAnim(x) {
    $('.js-last').removeClass().addClass(x + ' last js-last slow animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
      $(this).addClass('js-last last sleep slow');
      console.log('setTimeout before');

      setTimeout(function() {
      	console.log('setTimeout');
      	$('body').find('.js-last').addClass('awake');
      }, 800)

      
    });
  };

  setInterval(function() {
  	testAnim('last js-last animated hinge');
  	console.log('nice');
  }, 4000);

});