$(document).ready(function(){
  setBindings();

  $(function () {
    $('[data-toggle="tooltip"]').tooltip("show");
    $(".tooltip.fade.top").remove();
 });
});

function setBindings() {
  $('nav a').click(function(e){
    e.preventDefault();
    var sectionId = e.currentTarget.id + 'Section';

    $('html,body').animate({
      scrollTop: $('#' + sectionId).offset().top
    }, 1500);
  });
}
