(function(){
  let intro_header = $('#intro-header')
  let intr_head = document.getElementById('intro-header');

  let nav_header = $('#nav-header')
  let nav_headr = document.getElementById('nav-header');

  let jqs = [], jss = []

  jqs.push(intro_header)
  jqs.push(nav_header)

  jss.push(intr_head)
  jss.push(nav_headr )



  let lst_of_titles = [
    , 'research'
    , 'collaboration'
    , 'development'
    , 'foundry10'
  ]


  class Q {
      constructor () { this.lst = [] }
      enqueue (elem) { this.lst.push(elem) }
      dequeue () { return this.lst.shift() }
      peek () { return this.lst[0] }
      load (lst) { lst.filter((elem) => this.enqueue(elem)) }
  }

  let header_queue = new Q()
  header_queue.load(lst_of_titles)

  let q = {
    lst:[],
    enqueue : function(elem) {
      if (this.lst === 'undefined') this.lst = []
      this.lst.push(elem)},
    dequeue : function() { return this.lst.shift() },
    peek : function() { return this.lst[0] },
    load : function(lst)  {
      if (this.lst == 'undefined') this.lst = []
      lst.filter((elem) => this.enqueue(elem))
    }
  }

  // loat titles into queue
  q.load(lst_of_titles)

  // pass in a queue that has a loaded q.lst array (loaded with strings)
  let animateCss = function(q , animationName, jq, js) {
    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    // first add the animation class to the obj, this starts the animation on func call
    jq.addClass('animated ' + animationName).one(animationEnd, function(){
      // when the animation has ended, set visibility of elem to hidden & remove animation class
      jq.css('visibility', 'hidden')
      // -webkit-backface-visibility: hidden;
      jq.css('-webkit-backface-visibility', 'hidden')
      jq.removeClass('animated ' + animationName)

      // we have a list of strings to display in our queue, dequeue one
      let q_elem = q.dequeue()

      if (q_elem == 'foundry10') {
        js.style.color = '#ff6600'
      } else {
        js.style.color = 'white'
      }

      // set the innerhtml text content to correspond with the text we just dequeued
      js.innerHTML = q_elem

      // place text node to back of queue
      q.enqueue(q_elem)

      // want to fade element back in smoothly, use opacity. set the opacity of the header elem to 0.0, flip switch back to visible
      let opacity = 0.0
      jq.css('opacity', opacity)
      // init gas on opacity as interval to increment and assign the opacity
      let gas_on_opacity = setInterval(function(){
        opacity += .05
        jq.css('opacity', opacity)
        if (opacity >= 1.0) {
          clearInterval(gas_on_opacity)
        }
      }, 25)
      jq.css('visibility', 'visible')
      jq.css('-webkit-backface-visibility', 'visible')

    })
  }


  // finally, call the animateCss func every time unit
  let loop_headers = setInterval(function(){
    // animateCss(q, 'fadeOut', jqs, jss)
    animateCss(q, 'fadeOut', intro_header, intr_head)
    animateCss(header_queue, 'fadeOut', nav_header, nav_headr)
  }, 7000)

  // let l_header = setInterval(function(){
  // }, 7000)

})()
