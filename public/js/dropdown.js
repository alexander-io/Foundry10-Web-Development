(function(){
  // set booleans to track the state of the mouse's location
  // this is useful for closing drop-down menus when mouse is both away from the nav-items and drop-down menus
  let mouse_in_nav_item = false, mouse_in_drop_down = false


  // NOTE - if you are a user, you'll want to 'bind' the navitems to the dropmenu items by referencing their ids in this function
  let build_nav_lst = () => {
    let gi = (elem) => {
      return document.getElementById(elem)
    }
    return [
      [
        gi('nav-item-01'), gi('navdrop01')
      ],
      [
        gi('nav-item-02'), gi('navdrop02')
      ],
      [
        gi('nav-item-03'), gi('navdrop03')
      ]
    ]
  }

  /*
   * this function hides all of the drop-down menus
   * @param nav_lst, the corresponding list of nav-items and drop-down menus
   */
  let hide_all_drop_down = function(nav_lst) {
    for (let i = 0; i < nav_lst.length; i++){
      nav_lst[i][1].style.visibility = 'hidden'
    }
  }

  console.log('screen width :', window.innerWidth)
  console.log('screen height :', window.innerHeight)
  console.log('width/height ratio :', window.innerWidth/window.innerHeight)

  /*
   * workhorse function that 'reveals' the a link-corresponding drop-down menu
   * also , add 'mouseover' and 'mouseleave' event listeners to the nav-items -> this is useful for tracking the position of the mouse in the DOM so to close the drop-down menus when appropriate
   * @param n, the nav-item document-object-model element
   * @param d, the drop-down document-object-model element
   */
  let drop_the_down = function(n, d){
    // the the rectangle and positional data associated with 'this'
    // keep in mind that 'this' is meant to be an instance of a nav-item
    let rect = n.getBoundingClientRect()
    let d_rect = d.getBoundingClientRect()
    // console.log(rect);
    hide_all_drop_down(nav_lst)
    d.style.visibility = 'visible'
    d.style.backgroundColor = '#ffffff'
    // d.width = n.getBoundingClientRect().width+'px'

    // console.log('dropdown width :', d_rect.width)

    let nav_center_point = rect.right - (rect.width/2)
    // console.log('nav center point :', nav_center_point);


    if (window.innerWidth <= 1090) {
      d.style.left = (window.innerWidth/2) - (d_rect.width/2) + 'px'
    } else {
      d.style.left = (nav_center_point - (d_rect.width/2)) + 'px'
    }



    // d.style.left = (n.getBoundingClientRect().left - (n.getBoundingClientRect().width*1.85))  + 'px'
    // d.style.left = (n.getBoundingClientRect().left - (n.getBoundingClientRect().width*1.85))  + 'px'


    d.style.top = n.getBoundingClientRect().bottom+'px'

    d.addEventListener('mouseover', function(){
      mouse_in_drop_down = true
      // console.log('mouse in drop down :', mouse_in_drop_down)
    })

    // if the mouse move out of the drop down, set it to hidden
    d.addEventListener('mouseleave', function(){
      d.style.visibility = 'hidden'
      mouse_in_drop_down = false
      // console.log('mouse in drop down :', mouse_in_drop_down)
    })
  }

  let add_event_listeners_to_nav_items = (nav_lst, eventtt) => {

    // for all of the navigation items
    for (let i = 0; i < nav_lst.length; i++){

      // add a click event listener to the nav item, changing
      // the visibility of the corresponding drop down menu
      nav_lst[i][0].addEventListener(eventtt, function(e) {
        if (nav_lst[i][1].style.visibility == 'hidden') drop_the_down(nav_lst[i][0], nav_lst[i][1])
        else nav_lst[i][1].style.visibility = 'hidden'
      });


      // add an event listener to each of the nav items, listening for mouse over
      // this is useful when attempting to close the drop-down menu items on click-away
      nav_lst[i][0].addEventListener('mouseover', function(){
        mouse_in_nav_item = true
      })
      nav_lst[i][0].addEventListener('mouseleave', function(){
        mouse_in_nav_item = false
      })
    }
  }

  // build a list that associates the nav-item links with their corresponding drop-down menus
  let nav_lst = build_nav_lst()
  add_event_listeners_to_nav_items(nav_lst, 'click')

  // select the body
  let body = document.getElementById('body');


  // on scroll hide dropdown
  let flag = true
  $(window).scroll(function(){
    // console.log(obj);
    if (flag) {
      flag = !flag
      hide_all_drop_down(nav_lst)
      setTimeout(function() {
        flag = !flag
      }, 2000);
    }
  })

  // add a click event to the body of the document...
  // if  a use clicks the document and their mouse is not over a nav-item or the drop-down,
  // then 'close' all drop-down menu items by setting their visibility to 'hidden'
  body.addEventListener('click', function(e) {
    if (!mouse_in_drop_down && !mouse_in_nav_item) {
      hide_all_drop_down(nav_lst)
    }
  });
})()
/*
* let this be a function to return an array of nav-elements that have a corresponding drop down menu
* define a nested-local function to alias document.getElementById() -> gi()
*/

/*
* build_nav_lst()
* drop_the_down(thas, n, d)
* aha, so this function does a number of things...
* first, it's important to know that it takes three parameters...
* the n => nav-item,
* the d => drop-down-item (the one that's associated with the nav item)
*
* @ thas, represents the 'this' keyword as this function is called inside of a loop
* 'this' is intended to refer to the item n the nav bar
*/

/*
* add_event_listeners_to_nav_items(nav_lst, eventtt)
* this is a function that takes a 2d array of DOM elements, containing nav-bar-items and corresponding drop-down-menus, the function adds event listeners to the nav bar
* each row of the 2D array, nav_lst, has two indices
* at the 0th index, there's a nav-bar-item
* at the 1st index, there's a corresponding drop-down element
* example
* nav_lst = [
*  [nav-bar-item-01, drop-down-menu-01],
*  [nav-bar-item-02, drop-down-menu-02],
*  [nav-bar-item-03, drop-down-menu-03],
*  ...
* ]
* where the type is a DOM element...
* nav_lst = [
*  [document.getElementById('nav-bar-item-01'), document.getElementById('drop-down-menu-01')],
*  [document.getElementById('nav-bar-item-02'), document.getElementById('drop-down-menu-02')],
*  ...
* ]
* ... and each of the drop-down-menu items are assumed to have an initial style.visibility of 'hidden'
* @ nav_lst, a list of navigation items to add corresponding event listeners to
* @ eventtt, an eventListener event string -> ex. 'mouseover', 'click'
*
*/
