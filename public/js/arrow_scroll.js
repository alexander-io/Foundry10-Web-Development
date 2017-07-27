(function() {
  let fixed_down_arrow = document.getElementById('fixed-down-arrow'),
    fixed_down_arrow_icon = document.getElementById('fixed-down-arrow-icon'),
    body_rect = document.body.getBoundingClientRect(), info_banner = document.getElementById('info-banner'), info_banner_rect = info_banner.getBoundingClientRect(), circ_rect = circ.getBoundingClientRect()

  let info_banner_offset = info_banner_rect.top - body_rect.top;
  let circ_offset = circ_rect.top - body_rect.top


  let target_00 = info_banner_offset, target_01 = circ_offset
  let color_range = {}

  let color_range_lst = [
    target_00,
    target_01
  ]

  let color_lst = [
    '#ff6600', '#ff7e4a'
  ]

  for (x in color_range_lst) {
    color_range[color_range_lst[x]] = color_lst[x]
  }

  // define boolean to track the state of the scroll controll arrow element
  let arrow_up = false

  $(window).scroll(function(){
    // if the arrow isn't up and the scroll value is at the bottom of the window,
    if(!arrow_up && $(window).scrollTop() + $(window).height() == $(document).height()) {
      // then change arrow to up, modify icon type and background color
      arrow_up = true
      fixed_down_arrow_icon.innerHTML = 'keyboard_arrow_up'
      fixed_down_arrow_icon.style.backgroundColor = '#f99d43'
      return
    } else if (arrow_up && $(window).scrollTop() + $(window).height() != $(document).height()) {
      // else make arrow icon down
      fixed_down_arrow_icon.innerHTML = 'keyboard_arrow_down'
      arrow_up = false
    }

    // modify the background color of the arrow element
    for (let i = 0; i < color_range_lst.length; i++) {
      if (window.scrollY < color_range_lst[i]) {
        fixed_down_arrow_icon.style.backgroundColor = color_range[color_range_lst[i]]
        return
      } else {
        continue
      }
    }
  })


  // add event listener to the arrow
  fixed_down_arrow.addEventListener('click', function(e) {
    event.preventDefault();

    // if the arrow is up, the scroll to the top of the window
    if (arrow_up) {
      $('html,body').animate({scrollTop:0}, 900)
      return
    } else /* otherwise scroll to the target location */ {
      for (x in color_range_lst) {
        if (window.scrollY < color_range_lst[x]) {
          $('html,body').animate({scrollTop:color_range_lst[x]}, 900)
          return
        }
      }
    }
  });
})()
