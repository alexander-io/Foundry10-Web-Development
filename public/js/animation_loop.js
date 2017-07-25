(function(){
  let intro_header = $('#intro-header')
  let intr_head = document.getElementById('intro-header');

  let lst_of_titles = [
    , 'research'
    , 'collaboration'
    , 'development'
    , 'foundry10'
  ]

  let q = {
    lst:[],
    enqueue : function(elem) {
      if (this.lst === 'undefined') this.lst = []
      this.lst.push(elem)},
    dequeue : function() { return this.lst.shift() },
    peek : function() { return lst[0] },
    load : function(lst)  {
      if (this.lst == 'undefined') this.lst = []
      lst.filter((elem) => this.enqueue(elem))
    }
  }

  // loat titles into queue
  q.load(lst_of_titles)

  // pass in a queue that has a loaded q.lst array (loaded with strings)
  let animateCss = function(q , animationName) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    // first add the animation class to the obj, this starts the animation on func call
    intro_header.addClass('animated ' + animationName).one(animationEnd, function(){
      // when the animation has ended, set visibility of elem to hidden & remove animation class
      intro_header.css('visibility', 'hidden')
      // -webkit-backface-visibility: hidden;
      intro_header.css('-webkit-backface-visibility', 'hidden')
      intro_header.removeClass('animated ' + animationName)

      // we have a list of strings to display in our queue, dequeue one
      let q_elem = q.dequeue()

      // set the innerhtml text content to correspond with the text we just dequeued
      intr_head.innerHTML = q_elem

      // place text node to back of queue
      q.enqueue(q_elem)

      // want to fade element back in smoothly, use opacity. set the opacity of the header elem to 0.0, flip switch back to visible
      let opacity = 0.0
      intro_header.css('opacity', opacity)
      // init gas on opacity as interval to increment and assign the opacity
      let gas_on_opacity = setInterval(function(){
        opacity += .05
        intro_header.css('opacity', opacity)
        if (opacity >= 1.0) {
          clearInterval(gas_on_opacity)
        }
      }, 25)
      intro_header.css('visibility', 'visible')
      intro_header.css('-webkit-backface-visibility', 'visible')

    })
  }


  // finally, call the animateCss func every time unit
  let loop_headers = setInterval(function(){
    animateCss(q, 'fadeOut')
  }, 7000)
})()
