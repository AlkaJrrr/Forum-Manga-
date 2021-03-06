jQuery(document).ready(function ($) {

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
    var slideCount = $('#slider ul li').length;
    var slideWidth = $('#slider ul li').width();
    var slideHeight = $('#slider ul li').height();
    var sliderUlWidth = slideCount * slideWidth;
    
    $('#slider').css({ width: slideWidth, height: slideHeight });
    
    $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
    
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    

  ScrollReveal().reveal('.radio_text',{
      origin: 'top',
      duration: 2000,
  });


  const voirPLus = document.querySelector('#voir_plus_film')
  const enCours = document.querySelector('.reste_one')

  voirPLus.addEventListener('click',function(e){
        e.preventDefault()
      console.log('caca');
    enCours.style.display = 'block'
    voirPLus.style.display = 'none'
  })

  const voirMoins = document.querySelector('.moins')
  
  voirMoins.addEventListener('click',function(e){
     enCours.style.display = 'none'
     voirPLus.style.display = 'inline'
  })

 