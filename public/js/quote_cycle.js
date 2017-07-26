(function() {
  class Q {
      constructor () { this.lst = [] }
      enqueue (elem) { this.lst.push(elem) }
      enqueue_head (elem) { this.lst.unshift(elem) }
      dequeue () { return this.lst.shift() }
      dequeue_tail() {
        this.lst.reverse()
        let tail = this.lst.shift()
        this.lst.reverse()
        return tail
      }
      peek () { return this.lst[0] }
      load (lst) { lst.filter((elem) => this.enqueue(elem)) }
  }


  let lst_of_quotes = [
    '<color style="color:#ff6600;">"</color><quote-text id="quote-text">A philanthropic research organization promoting education in non-traditional settings and subjects.</quote-text><color style="color:#ff6600">"</color>'
    ,'<color style="color:#ff6600;">"</color><quote-text id="quote-text">We believe in transforming thoughts and ideas into actionable outcomes for students and the communities that support them. </quote-text><color style="color:#ff6600">"</color>'
    ,'<color style="color:#ff6600;">"</color><quote-text id="quote-text">We work cooperatively to empower teacher creativity and enhance both teacher and student ideas.</quote-text><color style="color:#ff6600">"</color>'
  ]
  /*
The people who know kids best are the ones who work closely with them. With this in mind, we work cooperatively to empower teacher creativity and enhance both teacher and student ideas.
  */

  let
  left_panel = document.getElementById('left-panel')
  , left_panel_jq = $('#left-panel')
  , right_panel = document.getElementById('right-panel')
  , right_panel_jq = $('#right-panel')
  , quote_text = document.getElementById('quote-text')
  , quote_text_jq = $('#quote-text')
  , quote_text_header = document.getElementById('quote-text-header')
  , quote_text_header_jq = $('#quote-text-header')
  , quote_text_wrapper_jq = $('#quote-text-wrapper')
  , left_arrow = document.getElementById('left-arrow')
  , right_arrow = document.getElementById('right-arrow')



  let animateCss = function (animationName) {

    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    quote_text_header_jq.addClass('animated ' + animationName).one(animationEnd, function() {

        quote_text_header_jq.removeClass('animated ' + animationName);
    });
  }


  let quote_queue = new Q()
  quote_queue.load(lst_of_quotes)

  let upd = quote_queue.dequeue()
  quote_text_header.innerHTML = upd
  quote_queue.enqueue(upd)

  left_panel.style.cursor = "pointer"
  right_panel.style.cursor = "pointer"

  left_panel.addEventListener('mouseover', function(e) {
    console.log('hover');
    left_arrow.style.color = "#ff6600"
  });

  left_panel.addEventListener('mouseout', function(e) {
    left_arrow.style.color = "white"
  });

  left_panel.addEventListener('click', function(e) {
    quote_text_header_jq.fadeTo(425, 0)
    animateCss('slideOutLeft')
    // TODO : modify queue and update innerhtml content


    setTimeout(function(){
      let update = quote_queue.dequeue()
      quote_text_header.innerHTML = update
      quote_queue.enqueue(update)

      animateCss('slideInRight')
      quote_text_header_jq.fadeTo(750, 1)
    }, 1050)
  });

  right_panel.addEventListener('mouseover', function(e) {
    console.log('hover');
    right_arrow.style.color = "#ff6600"
  });

  right_panel.addEventListener('mouseout', function(e) {
    right_arrow.style.color = "white"
  });

  right_panel.addEventListener('click', function(e) {
    quote_text_header_jq.fadeTo(425, 0)
    animateCss('slideOutRight')
    setTimeout(function(){
      // TODO : modify queue and update innerhtml content

      let update = quote_queue.dequeue_tail()
      quote_queue.enqueue_head(update)
      update = quote_queue.dequeue_tail()
      quote_text_header.innerHTML = update
      quote_queue.enqueue(update)


      animateCss('slideInLeft')
      quote_text_header_jq.fadeTo(750, 1)
    }, 1050)
  });




})()
