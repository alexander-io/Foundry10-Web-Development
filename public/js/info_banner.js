(function(){
  let tech = document.getElementById('banner-item-01')
  let collective = document.getElementById('banner-item-02')
  let art = document.getElementById('banner-item-03')

  let tech_circ = document.getElementById('tech-circ');
  let collective_circ = document.getElementById('collective-circ');
  let art_circ = document.getElementById('art-circ');


  let banner_sub_item_01 = document.getElementById('banner-sub-item-01');
  let banner_sub_item_02 = document.getElementById('banner-sub-item-02');
  let banner_sub_item_03 = document.getElementById('banner-sub-item-03');
  let banner_sub_item_04 = document.getElementById('banner-sub-item-04');

  let banner_sub_item_title_01 = document.getElementById('banner-sub-item-01-title');
  let banner_sub_item_title_02 = document.getElementById('banner-sub-item-02-title');
  let banner_sub_item_title_03 = document.getElementById('banner-sub-item-03-title');
  let banner_sub_item_title_04 = document.getElementById('banner-sub-item-04-title');

  // define a list of all of the sub items
  let sub_item_lst = []
  sub_item_lst.push(banner_sub_item_01)
  sub_item_lst.push(banner_sub_item_02)
  sub_item_lst.push(banner_sub_item_03)
  sub_item_lst.push(banner_sub_item_04)

  let sub_item_title_lst = []
  sub_item_title_lst.push(banner_sub_item_title_01)
  sub_item_title_lst.push(banner_sub_item_title_02)
  sub_item_title_lst.push(banner_sub_item_title_03)
  sub_item_title_lst.push(banner_sub_item_title_04)


  let relationship = {
    tech : {
      nav : tech,
      robotics : banner_sub_item_01,
      vr : banner_sub_item_02,
      game_dev : banner_sub_item_03,
      auto : banner_sub_item_04
    },
    collective : {
      nav : collective,
      intern : banner_sub_item_01,
      gender : banner_sub_item_02,
      early_education : banner_sub_item_03,
      professional_development : banner_sub_item_04
    },
    art : {
      nav : art,
      artistic : banner_sub_item_01,
      digital_audio : banner_sub_item_02,
      drama : banner_sub_item_03,
      hiphop : banner_sub_item_04
    }
  }





  // define a function to call on nav-item click, set background color of all nav-items back to the initial value, white....
  let nav_items_to_white = function(){
    for (x in relationship){

      try {
        relationship[x].nav.style.backgroundColor = '#eee'

      } catch (e) {
        console.log(e)
      }
    }
  }


  let nav_sub_items_to_white = function(){
    for (x in sub_item_lst){
      try {
        sub_item_lst[x].style.backgroundColor = 'white'
      } catch (e) {
        console.log(e)
      }
    }
  }


  // add event listeners to each of the nav-sub-items to hide other elements and reveal 'this'
  for (x in sub_item_lst) {
    sub_item_lst[x].addEventListener('click', function(e) {
      nav_sub_items_to_white()
      this.style.backgroundColor = '#ccc'
    });
  }




  // take an object -> sub category
  let display = function(element_to_display){
    let header = document.getElementById('banner-header'), body = document.getElementById('banner-body-text'), link1 = document.getElementById('link01'), link2 = document.getElementById('link02');
    // TODO : select the other elements in the DOM that need updating (i.e., the top card-panel and bottom card-panel)
  }

  // each sub-category should have data associated : title, body of text, two links, two images
  let tree = {
    // tech branch
    tech : {
      robotics : {
        title : 'robotics',
        innerhtml_nav_text : 'robotics',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      vr : {
        title : 'virtual reality',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">virtual reality</span><span class="hide-on-large-only">vr</span>',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      game_dev : {
        title : 'game development',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">game development</span><span class="hide-on-large-only truncate">game dev. </span>',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      automotive : {
        title : 'automotive',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">automotive</span><span class="hide-on-large-only truncate">auto</span>',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      }
    },
    // collective branch
    collective : {
      intern : {
        title : 'internships',
        innerhtml_nav_text : '',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      gender : {
        title : 'gender studies',
        innerhtml_nav_text : '',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      early_education : {
        title : 'early education',
        innerhtml_nav_text : '',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      professional_development : {
        title : 'professional development',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      }
    },
    art : {
      artistic : {
        title : 'artistic design',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      digital_audio : {
        title : 'digital audio',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      drama : {
        title : 'drama',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      },
      hiphop : {
        title : 'hip-hop',
        body : 'lorem',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'image_path_1',
          'image_path_1'
        ]
      }
    }
  }

    let the_array_of_glory = []
    let zero_array = function(arr){
      // initialize all values of array to 0
      for (let i = 0; i < 3; i++){
         arr.push(Array(4).fill(0))

      }
    }
    zero_array(the_array_of_glory)
    console.log(the_array_of_glory)



    tech_circ.addEventListener('click', function(e) {
      Materialize.toast('Tech', 4000, 'circ-toast tech-toast')
    });


    art_circ.addEventListener('click', function(e) {
      Materialize.toast('Art', 4000, 'circ-toast art-toast')
    });

    collective_circ.addEventListener('click', function(e) {
      Materialize.toast('Collective', 4000, 'circ-toast collective-toast')
    });

    // use this tuple to track what the user has selected
    let info_banner_xy_array_position_tuple = {
      super : null,
      sub : null
    }


    tech.addEventListener('click', function(e) {
      // console.log('click event on tech ')
      nav_items_to_white()
      this.style.backgroundColor = '#ccc'
      // user clicked tech nav event listener, that's index 0, update info_banner_xy_array_position_tuple
      info_banner_xy_array_position_tuple.super = 0
      // user clicked on a super-nav element, so assume they want the first sub-category displayed and set y to 0 for the 0th index
      info_banner_xy_array_position_tuple.sub = 0
      cl() // XXX test print coordinate tuple


      // console.log(sub_item_title_lst);
      // TODO : update nav elements
      for (x in sub_item_title_lst) {
        try {
          // console.log('node value',sub_item_title_lst[x].nodeValue)
          console.log('innerhtml_nav_text',sub_item_title_lst[x].innerhtml_nav_text)
          console.log('tree innerhtml', tree);
          // sub_item_title_lst[x].innerHTML = tree.tech[x].innerhtml_nav_text

          // sub_item_title_lst[x].innerhtml_nav_text = '<span class="hide-on-med-and-down truncate">virtual reality</span><span class="hide-on-large-only">vr</span>'

        } catch (e) {
          console.log(e);
        }
      }



      // TODO : populate windows with categorical content
    });

    collective.addEventListener('click', function(e) {
      // console.log('click on collective')
      nav_items_to_white()
      this.style.backgroundColor = '#ccc'
      // user clicked collective nav event listener, that's index 1, update info_banner_xy_array_position_tuple
      info_banner_xy_array_position_tuple.super = 1
      // user clicked on a super-nav element, so assume they want the first sub-category displayed and set y to 0 for the 0th index
      info_banner_xy_array_position_tuple.sub = 0
      cl() // XXX test print coordinate tuple

      // TODO : update nav elements

      // TODO : populate windows with categorical content

    });

    art.addEventListener('click', function(e) {
      // console.log('click event on art')
      nav_items_to_white()
      this.style.backgroundColor = '#ccc'
      // user clicked art nav event listener, that's index 2, update info_banner_xy_array_position_tuple
      info_banner_xy_array_position_tuple.super = 2
      // user clicked on a super-nav element, so assume they want the first sub-category displayed and set y to 0 for the 0th index
      info_banner_xy_array_position_tuple.sub = 0
      cl() // XXX test print coordinate tuple

      // TODO : update nav elements

      // TODO : populate windows with categorical content

    });

    banner_sub_item_01.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 0
      cl() // XXX test print coordinate tuple
    });
    banner_sub_item_02.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 1
      cl() // XXX test print coordinate tuple
    });
    banner_sub_item_03.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 2
      cl() // XXX test print coordinate tuple
    });
    banner_sub_item_04.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 3
      cl() // XXX test print coordinate tuple
    });

    let cl = function(){
      console.log(info_banner_xy_array_position_tuple)
    }
  // console.log(relationship)




})()
