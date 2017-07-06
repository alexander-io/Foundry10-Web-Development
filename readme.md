# foundry10 Web Development
## [Live Site](http://foundry10.org)
## [Development Environment](http://opensail.io)

![dev-env](md_images/f10_070617.png)

![mobile](md_images/mobile_070617.png)

![mock-up](md_images/f10070517.png)

#### Alexander Harris
#### Thursday July 6th, 2017
#### foundry10 web development intern
#### http://foundry10.org
#### http://opensail.io
#### http://35.167.90.70
#### https://github.com/alexander-io/foundry10-web-development

This morning I met with Lisa to briefly discuss the issue I've been having accesssing the foundry10 mail server. I messaged Tom about the issue!

Today I have set out to refine the navigation bar (more...). One of the current issues with the navigation bar is its readability. In my opinion, the font size for the link-titles in the navigation bar are small. For a solution, I'll apply a few style updates to the link-titles, first I'll increase the font size. Next I'll update the color and opacity. Next I'll update the letter kerning and spacing. 

Currently there are two  usability issues with the navigation bar. First is that each drop-down menu will stay 'revealed' or 'open' while there's another active drop-down. This feels clunky -> I'd prefer to see only one drop-down menu item able to be viewed at one time. The second issue is especially pronounced when using the site on a mobile device. It's a common gesture on a mobile device to remove pop-ups (including drop-down menu items), by clicking away fromm the menu. This is not currently a feature. In order to implement this, I'll select the body element of the Document-Object-Model add a 'click' event listener to it. On 'click event', close all drop-down menus. 

update 12:15pm, I have just updated the navigation bar to improive mobile usability. Here's the logic/pseudo-code that I used:

    For each click-event on the body of the webpage :
      if the mouse is not over a navigation-bar link and the mouse is not over the drop-down menu : 
        then close all drop-down menu items 

Below I'll include a code snippet describing the functionality that I've implemented
```javascript
// set booleans to track the state of the mouse's location
// this is useful for closing drop-down menus when mouse is both away from the nav-items and drop-down menus
let mouse_in_nav_item = false, mouse_in_drop_down = false

// add event listeners to the nav-items and the drop-downs to update the booleans
// let n imply a nav-item, let d imply a drop-down menu
n.addEventListener('mouseover', function(){
  mouse_in_drop_down = true
})
n.addEventListener('mouseleave', function(){
  mouse_in_drop_down = false
})
d.addEventListener('mouseover', function(){
  mouse_in_drop_down = true
})
d.addEventListener('mouseleave', function(){
  mouse_in_drop_down = false
})
// finally, for each click on the document body,
//    if the mouse isn't over the nav-item or dropdown
//        then loop through and hide all drop-downs
body.addEventListener('click', function() {
  if (!mouse_in_drop_down && !mouse_in_nav_item) {
    for (let i = 0; i < nav_lst.length; i++){
        d.style.visibility = 'hidden'
      }
    }
});

```


update 12:40pm, I have just updated the navigation bar with an aforementioned correction to its functionlaity. The update that I made enforces a rule where only one drop-down menu can be visible at a time. This prevents the user from opening all drop-down menus at one time. In order to implement this, I've defined a function in the public/js/dropdown.js to hide all drop-down menus on function call. With this function in place, I simply call the hide_all_drop_down() function immediately before 'revealing' any of the drop down menu items. This enforces the rule allowing only one drop-down menu to be visible at one time. The function is captured in the following code snippet...

```javascript
let hide_all_drop_down = function(nav_lst) {
  for (let i = 0; i < nav_lst.length; i++){
    nav_lst[i][1].style.visibility = 'hidden' // where nav_lst[i][1] evaluates to the drop-down menu elements
  }
}
```

#### Alexander Harris
#### Wednesday July 5th, 2017
#### foundry10 web development intern
#### http://foundry10.org
#### http://opensail.io
#### http://35.167.90.70
#### https://github.com/alexander-io/foundry10-web-development

Today I've worked toward implementing a the mock-up that I created. I especially put work into the nav-bar and the landing display.

For the nav bar, I have added another layer to contain re-directing links. The bottom layer of the nav has links that trigger drop-down menus.

For the landing display, I implemented the 'triangular' backdrop following inspiration from what Tom mentioned about foundry10 being an 'against the grain oranization'.

I checked in with Andrun today. He seems to be making progress toward planning his project. I gave him a demonstration of localhost development.


#### Alexander Harris
#### Friday June 30th, 2017
#### foundry10 web development
#### http://foundry10.org
#### http://opensource.eco/f10
#### https://github.com/alexander-io/foundry10-web-development

Today I set out to create a layout for the expose/about-us page that clearly and concisely describes the organization and their work.

I started today by gathering icons to represent the various on-going at foundry10. For example, I have now included icons in the project repository for a arist brush, camera aris, code-braces, gender-studies, game-controller, robotics, and a wrench. The icnons can be found at the following url :
https://github.com/alexander-io/Foundry10-Web-Development/tree/master/public/icons


In the development environment, I've added elements including icons, headers, links, text-bodies, and an image-banner. I've added code to ensure that the site stays mobile friendly.

This morning I submitted my weekly hours to Jenna. I met with Lisa regarding my experience at foundry10 as a web developer so far. Tom provided me with the server, and file-transfer-protocol credentials for the organization's server.


#### Alexander Harris
#### Thursday June 29th, 2017
#### foundry10 web development
#### http://foundry10.org
#### http://opensource.eco/f10
#### https://github.com/alexander-io/foundry10-web-development

10:00am, setting out to create nav-bar

Research Dark Site Styling Dos and Don'ts
https://www.webdesignerdepot.com/2009/08/the-dos-and-donts-of-dark-web-design/

  use more white space (or should it be called black space?)
  dark designsd have a tendency to feel "heavy", and cluttering them up can reinforce that feeling

  textual white space
    because readability is a high concern for dark-themes, pay close attention to the text itself
    one way to improve readability through the text on the page is to increase the white space by adjusting paragraph size, kerning size, and leadning size
    another way to increase readability is to increase font size

  text contrast
    pay specific attention to the contrast of the text
    in the same way that viewing a bright light in a dark room is harsh on the eyes, reading pure-white text on a black back ground may also be harsh
    below is a key with differing hex colors combinations of backs and whites for backgrounds and matching fonts. They are "pleasing" to the eye. The outer hex value represents the black-ish background color and the inner hex values represent the white-ish font color
      #background-color
        #font-color

      #000
        #cccccc
        #bbbbbb
      #111
        #dddddd
        #cccccc
        #bbbbbb
      #222
        #eeeeee
        #dddddd
        #cccccc
      #333
        #ffffff
        #eeeeee
        #dddddd

    text on backgrounds via material design
      text should be legible on the background on which it appears
      it is recommended that :
        dark-grey text is used on light backgrounds
        light-grey text is used on dark backgrounds

      light text on dark backgrounds
        primary white text occurring on a colored background should do so at 100% opacity
        secondary -> 70%
        disabled text, hints -> 50%
        dividers -> 12%

      dark text on light backgrounds
        the level of opacity used for text depends on whether the background is dark or light, for dark text on light backgrounds, apply the following opacity levels :
          the most important text has an opacity of 87%
          the secondary text which is lower in the visual hierarchy, has an opacity of 54%
          text hints (such as text fields and labels) or disabled text should have a lower opacity of 38%


  dealing with fonts
    the age old debate between sans-serif and serif (utility and beauty, readability and elegance, the head and the heart)
    there's a simple (and common sensical) trick, use serif fonts for headings, and use sans-serif for bodies of text

  use minimal color schemes
    to give their dark designs clean and uncluttered look, designers should opt for minimal color schemes

    material-design dark theme
    1. status bar,    black,    #000000
    2. app bar,       d-grey,   #212121
    3. Background,    grey,     #303030
    4. cards/dialogs, l-grey,   #424242

material design color theory
  primary color
    the primary color is the color dispalyed most frequently across the applicationns screens and componenets. It can also be used to accent elements (if there isn't a secondary color). Primary colors are indicated by the 500 value

    to create contrast between elements, you can lighten the tones of the primary color, for example choose 100 or 700 to complement the primary

  secondary color
    a secondary color is used to accent select parts of the ui.
    it can be complementary or analogous to your primary color, but it should not simply be a light or dark variation of your primary color.
    it should contrast with elements ithat surround it and be applied sparingly as an accent
    secondary colors are most effectively used for :
      buttons, floating actions buttons, and button text
      text fields, cursor, and text selection
      progress bar
      selection controls, buttons, and sliders
      links
      headlines

Today I worked with Andrun, the highschool  that's developing a portfolio website. He's curious about hosting, I suggested that he research a few technologies to help him along his way : atom text-editor, Node.js javascript runtime environment, NPM node-package-manager for auxiliary Node software, express application framework for server site web-hosting.

Throughout the day, I've been pushing all of my notes, work, and changes to GitHub, find the repository at github.com/alexander-io/foundry10-web-development

Also, I have updated the foundry10 navigation development environment which can be found at opensource.eco/f10

TODO Timeline
  Expose Page
  Restructure Site Layout & Links
  Restructure Nav-Bar
  Restructure Footer
  Add Event Trackers
  Sign up for newsletter


#### Alexander Harris
#### Wednesday June 28th, 2017
#### foundry10 web development
#### http://foundry10.org

Greetings! My notes for the day are included below.

Tom drafted three relevant questions to consider for site development moving forward.
  who are the users? what are they interested in given what's on our site?
  where are the confusions on our site?
  how to re-organize the nav bar to have greater utility?

Today we especially discussed the nav-bar layout and how one method of organizing it may be to provide a link/drop-down for each type of user. Where a user type may be a student, parent, teacher, researcher, or employee.

Currently, I have the nav-bar dev environment live at the following url.
http://opensource.eco/f10/

I contacted Henry Woody, BoS Mathematics, who has experience with Android application development. His most recent application is called Eventi and it scored great popularity among the students of our school. I will introduce the two of you via email.



Alexander Harris
Tuesday June 27th, 2017
foundry10 web development
http://foundry10.org

Thanks for an excellent first day. I'll reach out to the two Android experts that I know and provide you with updates.

The following lines are used to 'map' the current layout of the foundry10.org website.

nav-bar
  areas               => foundry10.org/areas-overview/
    artistic design   => .../areas-overview/artistic-design/
    digital audio     => .../areas-overview/digital-audio/
    early education   => .../areas-overview/early-education/
    gender studies    => .../areas-overview/girls-programs/
    interships        => .../areas-overview/ships/
    robotocs          => .../areas-overview/robotics/
    automotive        => .../areas-overview/automotive/
    drama             => .../areas-overview/drama/
    games & learning  => .../areas-overview/games-and-learning/
    hip hop           => .../areas-overview/hip-hop/
    pro. development  => .../areas-overview/professional-development/
    virtual reality   => .../areas-overview/virtual-reality/

  research            => http://foundry10.org/research/
    areas of interest => .../research-1/areas-of-interest/
    teach w. portals  => .../teach-with-portals/

  partners            => http://foundry10.org/partners/

  our team            => http://foundry10.org/who-we-are/our-team

  about us            => http://foundry10.org/about-us/
    instructors       => .../about-us/instructors/
    careers           => .../about-us/careers/
    board of advisors => .../about-us/board-of-advisors/
    IRB               => .../about-us/independent-review-board/

  contact us          => http://foundry10.org/contact-us/
/nav-bar

TODO : now that I've mapped the nav bar, map each of the major pages including their links

foundry10.org = {
  'learn more' : '/areas-overview/',    FIXME
  'learn more' : '/about-us/',
  'view programs' : '/areas-overview/', FIXME
  'explore reasarch' : '/research/',
  'lets collaborate' : '/contact-us/'
}

/areas-overview/ = {
  'contact us' : '/contact-us/',
  'virtual reality' : '/areas-overview/virtual-reality/',
  'robotocs' : '/areas-overview/robotics/',
  'hiphop' : '/areas-overview/hip-hop/',
  'digital audio' : '/areas-overview/digital-audio/',
  'automotive technology' : '/areas-overview/automotive/',
  'drama arts' : '/areas-overview/drama/',
  'girls programming' : '/areas-overview/girls-program/',
  'games and learning' : '/areas-overview/games-and-learning/',
  'professional development' : '/areas-overview/professional-development/',
  'early education' : '/areas-overview/early-education/',
  'ships' : '/areas-ovewview/ships/',
  'artistic design' : '/areas-overview/artistic-design/',
  'lets collaborate' : '/contact-us/'
}

/about-us/ = {
  'our vision' : '/who-we-are/',
  'meet the team' : '/who-we-are/our-team/',
  'areas of interest' : '/areas-overview/',
  'view our research' : '/research/',
  'view our partners' : '/partners/',
  'our board of advisors' : '/board-of-advisors/',
  'jobs at foundry 10' : '/about-us/careers/',
  'contact us' : '/contact-us/'
}

/research/ = {
  'lets collaborate' : '/contact-us/',
  /* this page contains links to the various research articles that have been produced by foundry10 */
}

/research-1/areas-of-interest = {
  'lets collaborate' : '/contact-us/'
  TODO - this page seems intended to demonstrate to viewers the primary areas of research. Using the collapsible style layout for this content seems a bit off. The /areas-overview/ page has a potential alternative style for this type of content to consider.
}

/contact-us/ = {
  'lets collaborate' : '/contact-us/' FIXME - recursive link, we're already navigated to the /contact-us/
}

Proposal Layout
  <nav-bar>
    /programs                     ul
    /programs/overview            li

    note, the following block represents routes that may exist but would not necessarily be linked to in the navbar
    /programs/overview/artistic-design
    /programs/overview/digital-audio
    /programs/overview/early-education
    /programs/overview/gender
    /programs/overview/robotics
    /programs/overview/automotive
    /programs/overview/drama
    /programs/overview/games-and-learning
    /programs/overview/hiphop
    /programs/overview/professional-developmen
    /programs/overview/virtual-reality

    /programs/ships         li
    /programs/apply               li

    /research

    /about-us                     ul
    /about-us/team                li
    /about-us/instructors         li
    /about-us/history             li
    /about-us/board-of-advisors   li
    /about-us/partners            li

    /contact-us
  </nav-bar>

  note, some of the content on the navbar of the site is traditionally placed in the footer
  making this change may improve the 'classic' quality of the site as well as allow the remaining elements left in the nav-bar to stand out and benefit from a greater emphasis.
  consider moving the careers link to the footer.
  <footer>
    /contact-us                   footer
    /careers                      footer
    /teach w. portals             footer
  </footer>

Description of Foundry10 from Tom Swanson
  let p1 = {
    on paper, we are a philanthropic research organization that studies learning, particularly in non-traditional settings or subjects. Our work generally falls into one of three categories: research, programs or outreach.  Our research is formal (complete with IRB approval) and with the intent to publish.  We have work published on spatial reasoning and long-term recall are affected by video game expertise, the impact of dance movement on student learning in early education programs, and how high school students from different countries react to different genders of authority figures.
  }

  let p2 = {
    Our programs have research components but are much more about exploration or applying a theory.  The best example of this is our VR program where we have donated HTC Vives (or other VR kits) and computers to over 40 schools around the world to see how the teachers use it, what makes for good content, and what the students themselves see as opportunities.
  }

  let p3 = {
    Finally, our "outreach" component is similar to a grant program, but is more about helping in-classroom teachers, who do not have access to resources, get what they need to carry out interesting ideas.  A good example of this is the Northshore Automotive Program where we funded an electric drag racer to be designed and built fully by high schoolers.  That car now holds some world records, here is the trailer to a documentary we made about the experience: https://www.youtube.com/watch?v=jUleWXHaM3g.  You can check out our other videos too, they capture a lot of the programs we do.
  }

  let p4 = {
    Hopefully that gives you a feel for foundry10.  As far as fees go, everything we do is free for the schools, students, teachers, and communities with which we work.  The rare times we do charge is really only for events to cover venue fees and food.  Foundry10 is privately funded by a single investor, his name is Gabe Newell of Valve Software.  When we started, we were tasked with "doing interesting things with learning", and we took that to mean we should study it as much as we can.  We also put an emphasis on student and teacher voice, making sure that most, and ideally all, of the work we do starts at the ground level with ideas from students and teachers themselves.
  }




![sketch_0001](md_images/sketches/sketch_0001.jpg)
![sketch_0002](md_images/sketches/sketch_0002.jpg)
![sketch_0003](md_images/sketches/sketch_0003.jpg)
![sketch_0004](md_images/sketches/sketch_0004.jpg)
![sketch_0005](md_images/sketches/sketch_0005.jpg)
![sketch_0006](md_images/sketches/sketch_0006.jpg)
![vr](public/images/ao-vr.jpg)