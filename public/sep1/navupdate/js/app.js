(function() {

  particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('particles!')
  })

  window.onerror = function(err) {
    let err_lst = err.split(' ')
    // handle activeTab error
    if (err_lst[7] == 'activeTab:'){
      var suppressErrorAlert = true
      return suppressErrorAlert
    } else {
      console.log(err);
    }
  };




})()
