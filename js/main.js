var $submit = document.querySelector('.submit-button');
var $form = document.querySelector('form');
var $scoreHeader = document.querySelector('.scores-header')


$form.addEventListener('submit', function(e){
  e.preventDefault();
  data.profile.name = $form.elements['name'].value;
  data.profile.favTeam = $form.elements['favTeam'].value;
  data.profile.email = $form.elements['email'].value;

})
