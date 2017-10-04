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

  let banner_header = document.getElementById('banner-header');
  let plax_img = document.getElementById('plax_img');


  let article_title_00 = document.getElementById('article-title-00');
  let article_title_01 = document.getElementById('article-title-01');

  let article_sub_title_00 = document.getElementById('article-sub-title-00');
  let article_sub_title_01 = document.getElementById('article-sub-title-01');

  let article_text_00 = document.getElementById('article-text-00');
  let article_text_01 = document.getElementById('article-text-01');

  let article_text_truncate_00 = document.getElementById('article-text-00');
  let article_text_truncate_01 = document.getElementById('article-text-01');

  let article_icon_00 = document.getElementById('article-icon-00');
  let article_icon_01 = document.getElementById('article-icon-01');

  let article_link_00_00 = document.getElementById('article-link-00-00');
  let article_link_00_01 = document.getElementById('article-link-00-01');
  let article_link_01_00 = document.getElementById('article-link-01-00');
  let article_link_01_01 = document.getElementById('article-link-01-01');


  // num_super_categories = 3
  // num_sub_categories = 4
  // 2D array of superXsub categories, 3x4 dimension
  let the_array_of_glory = []


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
  // let nav_items_to_white = function(){
  //   for (x in relationship){
  //
  //     try {
  //       relationship[x].nav.style.backgroundColor = '#212121'
  //
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // }

  // for a click on a nav-sub item, turn all other sub-nav elements to white
  // let nav_sub_items_to_white = function(){
  //   for (x in sub_item_lst){
  //     try {
  //       sub_item_lst[x].style.backgroundColor = '#484848'
  //     } catch (e) {
  //       console.log(e)
  //     }
  //   }
  // }


  // add event listeners to each of the nav-sub-items to hide other elements and reveal 'this'
  // for (x in sub_item_lst) {
  //   sub_item_lst[x].addEventListener('click', function(e) {
  //     nav_sub_items_to_white()
  //     this.style.backgroundColor = '#ccc'
  //   });
  // }




  // take an object -> sub category
  let display = function(){
    let header = document.getElementById('banner-header'), banner_body = document.getElementById('banner-body-text'), link1 = document.getElementById('link01'), link2 = document.getElementById('link02'), img_card_01 = document.getElementById('adj-card-panel-01-top'), img_card_02 = document.getElementById('adj-card-panel-01-bottom');

    // TODO : select the other elements in the DOM that need updating (i.e., the top card-panel and bottom card-panel)
    let branch = 'tech' // initialize the bnranch to tech
    if (info_banner_xy_array_position_tuple.super == 0) {
      branch = 'tech'
    } else if (info_banner_xy_array_position_tuple.super == 1) {
      branch = 'collective'
    } else if (info_banner_xy_array_position_tuple.super == 2) {
      branch = 'art'
    }

    // console.log('tree branch :',  tree[branch])
    // console.log('art branch :', tree['art'])
    // cl()
    // test print indexing into hash table
    // console.log(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].title)

    header.innerHTML = tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].title

    banner_body.innerHTML = tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].body


    // for each category click, need to update time image in the DOM with the image on record
    plax_img.src = tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].images[0]


    // we've defined our truncation function by the number of words in the string, however -> sometimes words have variable length
    // because of this, we have variable paragraph lengths.
    // let this be a recursive function to check if the string is sort enough,
    // if not, split the string into an array, pop off the last element, convert back to string and recurse passing the shortened string as a parameter
    let if_lengthy_string_remove_word = function(str, num_chars) {
      let arr = []
      if (str.length > num_chars) {
        arr = str.split(' ')
        arr.pop()
        if_lengthy_string_remove_word(arr.join(' '))
      }
      // console.log('final length of string :', str.length);
      // shortened_string = str
      // if (str.length <= 128) return str
      return str
      // break
    }


    // having some overflow issues with the text bodies, this function is a custom truncation function
    // just pass in the string that needs to be truncated as the first parameter
    // pass in the number of words as the second parameter,
    // this function will append a ... to the end of the return string
    let truncate = function(str, num_words) {
      let text_words = str.split(' '), builder = '', i = 0

      // for every wod in the string
      for (word in text_words) {

        // are we at the word limit?
        if (i>=num_words) {
          // check number of characters
          builder = if_lengthy_string_remove_word(builder, num_words*4)
          // concat the ellipses to the string
          builder += '...'
          return builder
        }
        builder += ' ' + text_words[word]
        i++
      }
      return builder
    }
    // update article 0 title
    article_title_00.innerHTML = truncate(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[0].title, 3)

    // update article 1 title
    article_title_01.innerHTML = truncate(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[1].title, 3)


    // update article 0 sub title
    article_sub_title_00.innerHTML = truncate(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[0].sub_title, 4)

    // update article 1 sub title
    article_sub_title_01.innerHTML = truncate(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[1].sub_title, 4)

    // update the text in article 1
    article_text_00.innerHTML = truncate(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[0].text, 32)

    // update the text in article 2
    article_text_01.innerHTML = truncate(tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[1].text, 32)

    // update article icons
    // article_icon_00.src = tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[0].icon
    //
    // article_icon_01.src = tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].articles[1].icon


    /*
    article_title_00
    article_title_01

    article_sub_title_00
    article_sub_title_01

    article_text_00
    article_text_01

    article_icon_00
    article_icon_01

    article_link_00_00
    article_link_00_01
    article_link_01_00
    article_link_01_01
    */


    // img_card_01.style.backgroundImage = 'url(' + tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].images[0] + ')'
    //
    // img_card_02.style.backgroundImage = 'url(' + tree[branch][the_array_of_glory[info_banner_xy_array_position_tuple.super][info_banner_xy_array_position_tuple.sub]].images[1] + ')'
  }

  let icon_path_prefix = 'icons/flat/'
  let icp = icon_path_prefix

  let icon_path = {
    wrench : icp+'009-wrench.png',
    gears : icp+'001-gears.png',
    brick : icp+'003-brick.png',
    programmer : icp+'002-programmer.png',
    controller : icp+'005-game-controller.png',
    display : icp+'008-display.png',
    book : icp+'007-book.png',
    brush : icp+'012-paint-brush-1.png'
  }


  // each sub-category should have data associated : title, body of text, two links, two images
  let tree = {
    // tech branch
    tech : {
      robotics : {
        title : 'robotics',
        innerhtml_nav_text : 'robotics',
        body : 'Robotics is the interdisciplinary branch of engineering and science that includes mechanical engineering, electrical engineering, computer science, and others. Robotics deals with the design, construction, operation, and use of robots, as well as computer systems for their control and information processing.',
        links : [
          'l2',
          'l1'
        ],
        images : [
          'images/info_banner/DSC01400-1-e1472759462425.jpg',
          'http://link1.org'
        ],
        articles : [
          {
            title : 'Elementary After School Lego Club and Robotics Club',
            sub_title : 'Elementary Robotics',
            text : 'As part of our work focused on after school programming, we partnered with an elementary school in the greater Seattle area to run a Lego building club for early elementary students (kindergarten and first grade) and a Lego Robotics club for intermediate elementary students (grades 4, 5 and 6). The program ran after school, twice a week for an hour each session, for four weeks. Each was led by classroom teachers with an interest in Legos and each developed their own club curricula and projects. All Lego building kits and robotics kids were donated as part of the after school project with foundry10. We also supplied stipends for the teachers to run the clubs. The goal was to provide opportunities, free of charge, for students to build, explore, and be creative in an after-school setting. Bus transportation was also provided by foundry10 so that there were no transportation barriers for interested students who wanted to attend.',
            icon : icon_path.wrench,
            url_00 : 'http://foundry10.org/areas-overview/robotics/',
            url_01 : 'http://foundry10.org/wp-content/uploads/2017/06/Elementary-Lego-and-Robotics.pdf'
          } , {
            title : 'Robotics Brief',
            sub_title : 'Education Meets Robotics',
            text : 'Throughout the fall of the 2016-2017 school year, foundry10 ran robotics programs in two schools around Seattle: The Nova Project and Seattle Girl’s School. We were interested in how exposure to our student-led robotics program improved student confidence with technology, productive risk-taking, and the perception of robotics as a community exercise. We used a combination of likert-type scale survey questions and open-ended questions. We found some gains in these areas, but hope to expand our sample size to improve our understanding of the impact that this experience has on students.',
            icon : icon_path.gears,
            url_00 : 'http://foundry10.org/areas-overview/robotics/',
            url_01  : 'http://foundry10.org/wp-content/uploads/2017/06/Robotics-Fall-2016-brief.pdf'
          }
        ]
      },
      vr : {
        title : 'virtual reality',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">virtual reality</span><span class="hide-on-large-only">vr</span>',
        body : 'Virtual reality (VR) is a computer technology that uses Virtual reality headsets, sometimes in combination with physical spaces or multi-projected environments, to generate realistic images, sounds and other sensations that simulate a user\'s physical presence in a virtual or imaginary environment.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/ao-vr-crop.png',
          'images/info_banner/vr-student.jpg'
        ],
        articles : [
          {
            title : 'VR Pilot Program Initial Findings',
            sub_title : 'Virtual reality',
            text : 'In the 2015-2016 school year, foundry10 put VR in the classrooms of 390 students in the US and Canada. Our objective was to collaborate with teachers to find out more about what really happens when VR enters the classroom. Through a series of surveys and interviews, we gathered data at the beginning, middle and end of the program in each school. The teachers used the technology in the way that made sense for them and their students, and as a result we were granted a view at a wide variety of different ideas for how VR can enhance classroom learning. Below are our initial reports,the dataset that includes the anonymized survey responses from the students in the program, and a brief description of the program itself. Please take a look and reach out to us if you have any thoughts or questions.',
            icon : icon_path.brick,
            url_00  : 'http://foundry10.org/areas-overview/virtual-reality/',
            url_01  : 'http://foundry10.org/research/vr-pilot-program-initial-findings/'
          } ,  {
            title : 'Making Learning Accessible in New Ways',
            sub_title : 'Virtual reality',
            text : 'Exploring technology is a vital part of modern day students’ educational experiences. Often, however, schools come in on the tail-end of an emerging technology, thereby limiting students’ opportunities for exposure and skill development. Advanced technology can be considered a type of cultural capital which students can utilize in order to progress and navigate future career pathways. Virtual reality is one such advanced technology, now readily commercially available, which is making its way into classrooms. Our recent research focusing on the implementation of VR in classrooms provides information about how educators can make VR accessible to students. Access in virtually reality can be considered through multiple lenses and we discuss a few of them here. The first considers learning styles and nontraditional engagement, the second discusses access to a global education, and the third revolves around issues of social justice. We feel these areas are highly relevant considerations for educators as they consider the use of virtual reality.',
            icon : icon_path.programmer,
            url_00  : 'http://foundry10.org/research_category/virtual-reality/',
            url_01  : 'http://foundry10.org/research/virtual-reality-making-learning-accessible-in-new-ways/'
          }
        ]
      },
      game_dev : {
        title : 'game development',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">game development</span><span class="hide-on-large-only truncate">game dev. </span>',
        body : 'Video game development is the process of creating a video game. Development is undertaken by a game developer, which may range from one person to a large business. Traditional commercial PC and console games are normally funded by a publisher and take several years to develop.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/games-and-learning.jpg',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Beyond Programming – The Power of Making Games',
            sub_title : 'Game Development',
            text : 'Art and creative expression have an interesting way of weaving in and out of classrooms, offering students the opportunity to explore their own ideas and minds. Video games are no different, and while most of the discussion about their use in classrooms centers on play, we at foundry10 wanted to examine the value of making games. Through easily accessible programs such as Scratch and Gamemaker, students from early elementary up through college are creating games and learning while doing it. We gathered surveys from 107 game design and development professionals and 300 middle school students, before and after a game development class, about the value of teaching game development in a middle school class. Then we compared the responses of the 7th- and 8th-graders with what the game developers said they felt would be important about making games. We hope this information will help teachers who are constructing game development classes, and show the broader view of the value inherent in game development that professional game makers can provide.',
            icon : icon_path.programmer,
            url_00  : 'http://foundry10.org/areas-overview/games-and-learning/',
            url_01  : 'http://foundry10.org/research/beyond-programming-the-power-of-making-games/'
          } , {
            title : 'Number processing ability and logitunal MOBA skill',
            sub_title : 'Games and Learning',
            text : 'The popularity of multiplayer online battle arena (MOBA) games provides an opportunity to examine how cognitive skills are linked with changes in player performance within a team-based game genre. There is evidence that video game experience in other genres is connected with specific cognitive skills such as visuospatial attention and working memory capacity. Links have also been observed outside of video games such as numerical intelligence being correlated with the performance of chess experts. In the present study, we investigated whether numerical and working memory ability measured at an initial time-point predicted changes in MOBA skill and gameplay frequency measured five months later.',
            icon : icon_path.controller,
            url_00  : 'http://foundry10.org/areas-overview/games-and-learning/',
            url_01  : 'http://foundry10.org/research/number-processing-ability-and-logitunal-moba-skill/'
          }
        ]
      },
      automotive : {
        title : 'automotive',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">automotive</span><span class="hide-on-large-only truncate">auto</span>',
        body : 'The automotive industry is a wide range of companies and organizations involved in the design, development, manufacturing, marketing, and selling of motor vehicles, some of them are called automakers. It is one of the world\'s most important economic sectors by revenue.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/auto-tech-ov-blog-768x403.png',
          'images/info_banner/'
        ],
        articles : [
          {
            title : 'Learning from the Pros',
            sub_title : 'Lessons from Long Beach',
            text : 'When we brought students to Long Beach to see Formula Drift, one of the most impactful parts of the experience was getting to meet real working professionals in the automotive industry. While integrating professionals has been a key part of many of our programs, automotive technology gets particular benefits from this as the industry is so broad and the pathways into it are not always clear. We wrote the below report to showcase what the students and teachers, in their own words, got from meeting with the pros.',
            icon : icon_path.gears,
            url_00  : 'http://foundry10.org/areas-overview/automotive/',
            url_01  : 'http://foundry10.org/wp-content/uploads/2017/06/Learning-from-the-Pros.pdf'
          } , {
            title : 'Automotive Technology Research',
            sub_title : 'Automotive Research',
            text : 'Throughout our work with automotive technology, we have been studying how the students respond to the subject, and seek to answer our three critical questions for the program. The report below breaks down how we look at auto-tech, what is exciting to us in terms of learning, and some of the data that we have gathered on the subject so far.',
            icon : icon_path.wrench,
            url_00  : 'http://foundry10.org/areas-overview/automotive/',
            url_01  : 'http://foundry10.org/wp-content/uploads/2016/07/AutomotiveTechnologyResearch.pdf'
          }
        ]
      }
    },
    // collective branch
    collective : {
      intern : {
        title : 'internships',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">internships</span><span class="hide-on-large-only truncate">intern</span>',
        body : 'Internships for professional careers are similar in some ways but not as rigorous as apprenticeships for professions, but the lack of standardisation and oversight leaves the term open to broad interpretation. Interns may be college or university students, high school students, or post-graduate adults.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/foundry10-internships-thumb.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Student-Led Internships',
            sub_title : 'An Exploration of Interest, Motivation, and Process',
            text : 'Through partnerships with schools that follow the Big Picture Model of learning (which includes internship experiences within the local community), afterschool programs and summer programs, we have developed what we call the “Student-Led Internship”. The design of this program, involving high school aged students, is developmentally appropriate, cognitively challenging and a more unstructured environment through which collaboration, creativity, entrepreneurial thinking, design thinking and constructivist learning emerge. In this environment intellectual risk-taking is not only encouraged, it is a necessary component for success. What is not necessary is having a project that works “right” or even looks like the idea that the students walked in the door with. The learning is in the process, not the product.',
            icon : icon_path.brick,
            url_00  : 'http://foundry10.org/areas-overview/internships/',
            url_01  : 'http://foundry10.org/wp-content/uploads/2016/08/Student-Led-Internships.pdf'
          } , {
            title : 'Summer 2016 Internship Findings',
            sub_title : 'Internship Research Findings',
            text : 'This slideshow includes the findings from our internship program in the summer of 2016. The interns worked across a variety of subject areas from virtual reality to fashion to drone building. These findings are from the interview series that we conduct as a part of the program. Take a look at the report below for details!',
            icon : icon_path.display,
            url_00  : 'http://foundry10.org/areas-overview/internships/',
            url_01  : 'http://foundry10.org/wp-content/uploads/2016/10/Summer-Internships-2016-Summary-of-Findings.pdf'
          }
        ]
      },
      gender : {
        title : 'gender studies',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">gender studies</span><span class="hide-on-large-only truncate">gender</span>',
        body : 'Gender studies is a field for interdisciplinary study devoted to gender identity and gendered representation as central categories of analysis. This field includes women\'s studies (concerning women, feminism, gender, and politics), men\'s studies and queer studies.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/foundry10-girls-program-thumb.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Imagination, gender and their importance in perceived choices',
            sub_title : 'Gender Studies',
            text : 'One of the very first programs we ran was focused on a group of 5 female teens and their drive to try new things. Along with foundry10, the girls tried out a number of new and unusual activities ranging from skateboarding to blacksmithing to paintball. We talked to the girls about the experiences and how trying new things affected their view on the world and the choices available to them. In the summer of 2014, we shared this information with the Imaginative Education Research Group. You can find our slides with our findings below.',
            icon : icon_path.wrench,
            url_00  : 'http://foundry10.org/areas-overview/girls-programs/',
            url_01  : 'http://foundry10.org/research/dota-2-exploratory-interviews/'
          } , {
            title : 'Shakespeare for Girls',
            sub_title : 'Gender Video',
            text : 'This is a video demonstrating a gender studies drama related program : Shakespeare for girls.',
            icon : icon_path.book,
            url_00  : 'https://youtu.be/KvRvEp6IEWg',
            url_01  : 'http://foundry10.org/areas-overview/girls-programs/'
          }
        ]
      },
      early_education : {
        title : 'early education',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">early education</span><span class="hide-on-large-only truncate">early ed.</span>',
        body : 'Early childhood education is a branch of education theory which relates to the teaching of young children (formally and informally) up until the age of about eight. Infant/toddler education, a subset of early childhood education, denotes the education of children from birth to age two.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/side-by-side-oculus.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Augmented Math/Reading Intervention',
            sub_title : 'Elementary Education',
            text : 'Foundry10 and an elementary school in the greater Seattle area teamed up together to augment the district funded math and reading spring after school intervention program. We were interested in providing additional funding so that 5th and 6th graders could receive support in the target subject areas, with smaller class sizes, under the guidance of certified classroom teachers. The intervention program ran for 7 sessions concurrently with the district funded program for grades K-4. The goal was to see improvements in both students’ academic performance in the targeted subject areas as well as in their attitudes towards the subject areas.',
            icon : icon_path.book,
            url_00  : 'http://foundry10.org/areas-overview/early-education/',
            url_01  : 'http://foundry10.org/wp-content/uploads/2017/06/AugmentedMathReadingAnonymized.pdf'
          } , {
            title : 'Shoreline Kindergarten Readiness Program Report',
            sub_title : 'Early Education Report',
            text : 'In Summer 2016, foundry10 collaborated with Shoreline School District to support a month-long kindergarten readiness program. Students coming in to kindergarten have a wide range of skill sets, with some students more prepared for the demands of kindergarten than others. To close the readiness gap, Shoreline approached us with the idea to design a summer class with the express purpose of preparing students for their first year in kindergarten. We decided to focus on boosting skills at this age, because of evidence that early intervention is particularly beneficial in closing achievement gaps. Elementary schools throughout the district identified students who were enrolled in kindergarten but hadn’t previously had preschool, and invited a small number of these students to participate. One class of seven students participated in July before starting kindergarten the following month.',
            icon : icon_path.brick,
            url_00  : 'http://foundry10.org/areas-overview/early-education/',
            url_01  : 'http://foundry10.org/research/shoreline-kindergarten-readiness/'
          }
        ]
      },
      professional_development : {
        title : 'professional development',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">professional dev.</span><span class="hide-on-large-only truncate">pro. dev.</span>',
        body : 'Professional development is learning to earn or maintain professional credentials such as academic degrees to formal coursework, conferences and informal learning opportunities situated in practice. It has been described as intensive and collaborative, ideally incorporating an evaluative stage.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/lydia-2.jpg',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Parkwood Intervention Program',
            sub_title : 'Elementary School Alternative Ed.',
            text : 'The Shoreline Schools Foundation and foundry10 partnered to create an original program at Parkwood Elementary, during spring break 2016. We joined creative/dramatic arts with traditional CORE curriculum for 5-days over Spring Break. Students testing at the cusp of being able to pass the SBAC in April were invited to the week-long intervention. In this program, dedicated teachers were paired with passionate teaching artists for ten full hours of preparation in the months leading up to the week-long experience. We found that providing this amount of time for creating imaginative curriculum between two different talented and capable educators would provide the unique context for a week-long break camp where traditional classroom curriculum could be experienced in an artful way.',
            icon : icon_path.brick,
            url_00  : 'http://foundry10.org/areas-overview/professional-development/',
            url_01  : 'http://foundry10.org/research/parkwood-intervention-program-2/'
          } , {
            title : 'TAT LAB : Wonderwalls and Sharing Circles',
            sub_title : 'Professional Development',
            text : '“If there’s something you’re still wondering about, write it on this post it note and stick it to the wonder-wall and then come join me in a circle!” With over twenty hands in the air, the energy in the room at the Teaching Artist Training Lab, hosted by Seattle Children’s Theater, is palpable. The teachers just want to keep the discussion going and would do so well into the night. The wonder-wall serves as a great way to table topics for later discussion during lunch breaks, walks, and even drives home.',
            icon : icon_path.book,
            url_00  : 'http://foundry10.org/areas-overview/professional-development/',
            url_01  : 'http://foundry10.org/subject-areas/tat-lab-professional-development-teaching-artists/'
          }
        ]
      }
    },
    art : {
      artistic : {
        title : 'artistic design',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">artistic design</span><span class="hide-on-large-only truncate">design</span>',
        body : 'Design is the creation of a convention for the construction of an object, system or measurable human interaction. Design has different connotations in most fields. In some cases, the direct construction of an object. Pottery, engineering, coding, and graphic design are also considered to use design thinking.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/creativity-intern-3-768x263.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Y-We Camp Report',
            sub_title : 'Artistic Design Report',
            text : 'In this report, we dig into a fashion camp that we ran with Young Women Empowered. Please take at the document below to find out more about the camp and what we learned.',
            icon : icon_path.brush,
            url_00  : 'http://foundry10.org/areas-overview/artistic-design/',
            url_01  : 'http://foundry10.org/research/y-we-camp-report/'
          } , {
            title : 'Y-We Create Fashion Show ',
            sub_title : 'Fashoion Show Video',
            text : 'The Y-We fashin show was documented for your viewing pleasure',
            icon : icon_path.brick,
            url_00  : 'https://youtu.be/p6sw-tvxl_4',
            url_01  : 'http://foundry10.org/areas-overview/artistic-design/'
          }
        ]
      },
      digital_audio : {
        title : 'digital audio',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">digital audio</span><span class="hide-on-large-only truncate">audio.</span>',
        body : 'Digital audio is a technology that can be used to record, generate, manipulate, and reproduce sound using audio signals that have been encoded in digital form. Following significant advances in digital audio technology during the 1970s, it gradually replaced analog audio technology in many areas of sound production.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/audio-report-blog.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Digital Audio Report',
            sub_title : 'Audio, 2014 - 2016',
            text : 'This report covers what we have learned over the past 3 years running digital audio programs in schools, with community partners, and on our own.We have been running digital audio programs since 2014, and have explored many different ways of offering and structuring the courses. While there is still so much to learn about the subject, the audio team at foundry10 has put together a report showcasing the work they have done and what they have learned about how high school students interact with digital audio. Please read the report below if you want to find out more about our audio program, its history, and what we have learned so far.',
            icon : icon_path.brush,
            url_00  : 'http://foundry10.org/areas-overview/digital-audio/',
            url_01  : 'http://foundry10.org/research/digital-audio-report-2014-2016/'
          } , {
            title : 'Audio Workshops',
            sub_title : 'Digital Audio',
            text : 'A big part of learning to work with digital audio is expanding specific skillsets and learning fun new ways to create and manipulate sound. To supplement the program, we bring in exciting and fun events to showcase different functions and teach youth and adults alike.',
            icon : icon_path.brush,
            url_00  : 'http://foundry10.org/areas-overview/digital-audio/',
            url_01  : 'http://foundry10.org/subject-areas/audio-workshop-events/'
          }
        ]
      },
      drama : {
        title : 'drama',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">drama</span><span class="hide-on-large-only truncate">drama</span>',
        body : 'Drama is the specific mode of fiction represented in performance.[1] Considered as a genre of poetry in general, the dramatic mode has been contrasted with the epic and the lyrical modes ever since Aristotle\'s Poetics (c. 335 BCE)—the earliest work of dramatic theory.',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/dramatic-arts-blog-768x403.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Dramatic Storytelling and Literacy',
            sub_title : 'Drama',
            text : 'This article describes a method of exploring and expanding literacy using dramatic storytelling techniques. In this program, we paired drama teaching artists with teachers to engage young students in literacy-based exercises in a unique and fun way. You can download the report here: Dramatic Storytelling and Literacy',
            icon : icon_path.programmer,
            url_00  : 'http://foundry10.org/areas-overview/drama/',
            url_01  : 'http://foundry10.org/research/dramatic-storytelling-literacy/'
          } , {
            title : 'Shoreline Reading Intervention at Briarcrest Elementary',
            sub_title : 'Early Ed. Theater',
            text : 'In the summer of 2016, foundry10 partnered with Shoreline Schools Foundation to bring a fuller iteration of the dramatic arts infused intervention program for summer school attendees. With four teaching artists who collaborated with one another on creating curriculum that infused literature and dramatic arts, they served ten different classes, grades K-3 and ELL, with a theater arts intervention.',
            icon : icon_path.brick,
            url_00  : 'http://foundry10.org/areas-overview/drama/',
            url_01  : 'http://foundry10.org/research/shoreline-reading-intervention-briarcrest-elementary/'
          }
        ]
      },
      hiphop : {
        title : 'hip-hop',
        innerhtml_nav_text : '<span class="hide-on-med-and-down truncate">hip hop</span><span class="hide-on-large-only truncate">hip hop</span>',
        body : 'Hip hop is a subculture and art movement developed by African Americans[1] from the South Bronx in New York City during the late 1970s.[2][3][4][5][6] While people unfamiliar with hip hop culture often use the expression "hip hop" to refer exclusively to hip hop music (also called "rap")',
        links : [
          'http://link1.org',
          'http://link1.org'
        ],
        images : [
          'images/info_banner/hip-hop-dance-2.png',
          'image_path_1'
        ],
        articles : [
          {
            title : 'Parkwood Math and Reading Intervention',
            sub_title : 'Creative/Dramatic Art',
            text : 'During the spring of 2016, foundry10 teamed up with Shoreline School District to provide a week-long math and reading program that had an integrated drama component with the goal of enhancing student skills and motivation. Shoreline Schools Foundation and foundry10 partnered to create an original program at Parkwood Elementary School Spring Break 2016 where we joined creative/dramatic arts with traditional CORE curriculum for 5-days over Spring Break. Students testing at the cusp of being able to pass the SBAC in April were invited to the week-long intervention. Four teachers were recruited for the program that targeted 3rd through 6th grade students. From April 18-22, foundry10 instructors provided classroom instruction, including 20 hours of integrated and direct instruction with drama to explore the content and structure of stories.',
            icon : icon_path.programmer,
            url_00  : 'http://foundry10.org/research/parkwood-math-and-reading-intervention-spring-2016/',
            url_01  : 'http://foundry10.org/areas-overview/hip-hop/'
          } , {
            title : 'The Importance of Frustration in Dance',
            sub_title : 'Hip Hop Dance',
            text : 'Working with dance students, we frequently encounter performance anxiety and frustration. However, we believe that encountering and overcoming these difficult feelings is one of the biggest challenges through which Hip Hop, and dance in general, creates value for students of all skill levels. Now, after nearly three years of dance programs, the team at foundry10 has put together a retrospective and qualitative view on how frustration and dance mix together to create confidence, discipline, and resilience in dancers.',
            icon : icon_path.gears,
            url_00  : 'http://foundry10.org/areas-overview/hip-hop/',
            url_01  : 'http://foundry10.org/research/the-importance-of-frustration-in-dance-2/'
          }
        ]
      }
    }
  }

    let zero_array = function(arr){
      // initialize all values of array to 0
      for (let i = 0; i < 3; i++){
         arr.push(Array(4).fill(0))

      }
    }
    zero_array(the_array_of_glory)

    // i want to be able to input 0,0 and output tech > robotics...
    // here's the full map :
    //
    //    0, 0 => tech > robotics
    //    0, 1 => tech > virtual reality
    //    0, 2 => tech > game development
    //    0, 3 => tech > automotive
    //
    //    1, 0 => collective > internships
    //    1, 1 => collective > gender studies
    //    1, 2 => collective > early education
    //    1, 3 => collective > professional development
    //
    //    2, 0 => art > artistic design
    //    2, 1 => art > digital audio
    //    2, 2 => art > drama
    //    2, 3 => art > hip hop


    // i have the x,y positions being generated from clicks in the dom,
    // i want to assign keys into the 'tree' object at the array indices
    // for example :
    //    to index into the tree array for virtual reality do this...
    //    tree['tech']['vr']
    //
    let assign_keys_to_array = function(arr){

      arr[0][0] = 'robotics'
      arr[0][1] = 'vr'
      arr[0][2] = 'game_dev'
      arr[0][3] = 'automotive'

      arr[1][0] = 'intern'
      arr[1][1] = 'gender'
      arr[1][2] = 'early_education'
      arr[1][3] = 'professional_development'

      arr[2][0] = 'artistic'
      arr[2][1] = 'digital_audio'
      arr[2][2] = 'drama'
      arr[2][3] = 'hiphop'

      return arr
    }

    // setup array with keys
    the_array_of_glory = assign_keys_to_array(the_array_of_glory)


    // tech_circ.addEventListener('click', function(e) {
    //   Materialize.toast('Tech', 4000, 'circ-toast tech-toast')
    //   tech_click()
    // });
    //
    // art_circ.addEventListener('click', function(e) {
    //   Materialize.toast('Art', 4000, 'circ-toast art-toast')
    //   art_click()
    // });
    //
    // collective_circ.addEventListener('click', function(e) {
    //   Materialize.toast('Collective', 4000, 'circ-toast collective-toast')
    //   collective_click()
    // });

    // use this tuple to track what the user has selected
    let info_banner_xy_array_position_tuple = {
      super : 0,
      sub : 0
    }


    // update the text that exists in the navbar elements
    let update_nav_text = function(tree_branch){
      let i = 0;

      for (x in sub_item_lst) {
        if (sub_item_lst[x].classList.contains('mdc-tab--active')){
          sub_item_lst[x].classList.remove('mdc-tab--active')
        }
      }
      banner_sub_item_01.classList.add('mdc-tab--active')

      try {
        // document.querySelector('#basic-sub-tab-bar')
        // let bstb = document.getElementById('#basic-sub-tab-bar')
        // mdc.tabs.MDCTabBar.attachTo(N)
        mdc.tabs.MDCTabBar.attachTo(document.querySelector('#basic-sub-tab-bar'))
        // document.getElementsByClassName('basic-sub-tab-bar')
        // mdc.tabs.MDCTabBar.attachTo(document.getElementsByClassName('basic-sub-tab-bar'))
        // mdc.tabs.MDCTabBar.attachTo(bstb)

        // mdc.autoInit()
      } catch (e) {
        // console.log(e);

      } finally {

      }

      for (x in tree_branch) {
        try {
          sub_item_title_lst[i].innerHTML = tree_branch[x].innerhtml_nav_text





          ++i
        } catch (e) {
          console.log(e);
        }
      }
    }



    // the user clicked on the super category, therefore set all sub-nav elements to white and initialize the 0th sub-nav item to have a grey background
    let init_reset_sub_nav = function(){
      // nav_sub_items_to_white()
      // banner_sub_item_01.style.backgroundColor = '#ccc'
    }


    // user clicked on one of the 'tech' elements
    let tech_click = function() {
      // nav_items_to_white()
      // tech.style.backgroundColor = '#484848'

      // if (!tech.classList.contains('mdc-tab--active')) {
      //   tech.classList.add('mdc-tab--active')
      //   art.classList.remove('mdc-tab--active')
      //   collective.classList.remove('mdc-tab--active')
      // }

      // user clicked tech nav event listener, that's index 0, update info_banner_xy_array_position_tuple
      info_banner_xy_array_position_tuple.super = 0
      // user clicked on a super-nav element, so assume they want the first sub-category displayed and set y to 0 for the 0th index
      info_banner_xy_array_position_tuple.sub = 0

      // update nav elements
      update_nav_text(tree.tech)

      // set all sub nav backgrounds to white and set the initial to grey/selected
      init_reset_sub_nav()

      // populate windows with categorical content
      display()
    }


    // user clicked one of the collective elements
    let collective_click = function() {
      // nav_items_to_white()
      // collective.style.backgroundColor = '#484848'


      // if (!collective.classList.contains('mdc-tab--active')) {
      //   console.log('collect not contain active');
      //   collective.classList.add('mdc-tab--active')
      //   art.classList.remove('mdc-tab--active')
      //   tech.classList.remove('mdc-tab--active')
      // }

      // user clicked collective nav event listener, that's index 1, update info_banner_xy_array_position_tuple
      info_banner_xy_array_position_tuple.super = 1
      // user clicked on a super-nav element, so assume they want the first sub-category displayed and set y to 0 for the 0th index
      info_banner_xy_array_position_tuple.sub = 0

      // update nav elements
      update_nav_text(tree.collective)

      // set all sub nav backgrounds to white and set the initial to grey/selected
      init_reset_sub_nav()
      // populate windows with categorical content
      display()
    }

    // define function to handle a click on an art element
    let art_click = function() {
      // nav_items_to_white()
      // art.style.backgroundColor = '#484848'
      // if (!art.classList.contains('mdc-tab--active')) {
      //   console.log('collect not contain active');
      //   art.classList.add('mdc-tab--active')
      //   collective.classList.remove('mdc-tab--active')
      //   tech.classList.remove('mdc-tab--active')
      // }

      // user clicked art nav event listener, that's index 2, update info_banner_xy_array_position_tuple
      info_banner_xy_array_position_tuple.super = 2
      // user clicked on a super-nav element, so assume they want the first sub-category displayed and set y to 0 for the 0th index
      info_banner_xy_array_position_tuple.sub = 0

      //  update nav elements
      update_nav_text(tree.art)

      // set all sub nav backgrounds to white and set the initial to grey/selected
      init_reset_sub_nav()

      // populate windows with categorical content
      display()
    }


    tech.addEventListener('click', function(e) {
      tech_click()
    });

    collective.addEventListener('click', function(e) {
      collective_click()
    });

    art.addEventListener('click', function(e) {
      art_click()
    });

    banner_sub_item_01.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 0
      display()
    });

    banner_sub_item_02.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 1
      display()
    });

    banner_sub_item_03.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 2
      display()
    });

    banner_sub_item_04.addEventListener('click', function(e) {
      info_banner_xy_array_position_tuple.sub = 3
      display()
    });

    // XXX testing function for logging the state of the info-banner
    let cl = function(){
      console.log(info_banner_xy_array_position_tuple)
    }
})()
