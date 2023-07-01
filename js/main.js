var burger = $('.menu-trigger');

burger.each(function(index){
  var $this = $(this);
  
  $this.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass('active-' + (index+1));
  })
});


(function($) {
  $(document).ready(function() {
      $.jScrollability([
          {
              'selector': '.slide-in-demo',
              'start': 'parent',
              'end': 'parent',
              'fn': {
                  'left': {
                      'start': 100,
                      'end': 0,
                      'unit': '%'
                  }
              }
          }
      ]);
  });
})(jQuery);
                  