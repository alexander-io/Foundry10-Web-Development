(function(){
  let tech = document.getElementById('banner-item-01')
  let collective = document.getElementById('banner-item-02')
  let art = document.getElementById('banner-item-03')

  let banner_sub_item_01 = document.getElementById('banner_sub_item_01');
  let banner_sub_item_02 = document.getElementById('banner_sub_item_02');
  let banner_sub_item_03 = document.getElementById('banner_sub_item_03');
  let banner_sub_item_04 = document.getElementById('banner_sub_item_04');



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
        relationship[x].nav.style.backgroundColor = 'white'

      } catch (e) {
        console.log(e)
      }
    }
  }

  tech.addEventListener('click', function(e) {
    console.log('click event on tech ')
    nav_items_to_white()
    this.style.backgroundColor = '#ccc'
  });

  collective.addEventListener('click', function(e) {
    console.log('click on collective')
    nav_items_to_white()
    this.style.backgroundColor = '#ccc'


  });

  art.addEventListener('click', function(e) {
    console.log('click event on art')
    nav_items_to_white()
    this.style.backgroundColor = '#ccc'
    

  });





  console.log(relationship)




})()
