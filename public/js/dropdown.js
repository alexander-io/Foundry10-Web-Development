(function(){
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

  let drop_the_down = function(thas, n, d){
    // the the rectangle and positional data associated with 'this'
    // keep in mind that 'this' is meant to be an instance of a nav-item
    let rect = thas.getBoundingClientRect()
    d.style.visibility = 'visible'
    d.style.backgroundColor = '#ffffff'
    d.width = n.getBoundingClientRect().width+'px'
    d.style.left = (n.getBoundingClientRect().left - (n.getBoundingClientRect().width))+'px'
    d.style.top = n.getBoundingClientRect().bottom+'px'

    // if the mouse move out of the drop down, set it to hidden
    d.addEventListener('mouseleave', function(){
      d.style.visibility = 'hidden'
    })
  }

  let add_event_listeners_to_nav_items = (nav_lst, eventtt) => {
    for (let i = 0; i < nav_lst.length; i++){
      nav_lst[i][0].addEventListener(eventtt, function(e) {
        if (nav_lst[i][1].style.visibility == 'hidden') drop_the_down(this, nav_lst[i][0], nav_lst[i][1])
        else nav_lst[i][1].style.visibility = 'hidden'
      });
    }
  }

  let nav_lst = build_nav_lst()
  add_event_listeners_to_nav_items(nav_lst, 'click')

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
