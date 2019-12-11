$(document).ready(function() {
  setBindings();

  // shows tooltip on pageload
  $(function() {
    $('[data-toggle="tooltip"]').tooltip("show");
  });

  // fades out tooltip after 4 secs
  setTimeout(function() {
    $(".tooltip").fadeOut("slow");
  }, 4000);

  // tooltip fades in when you hover over nav item
  $('[data-toggle="tooltip"]').hover(function() {
    $(".tooltip").fadeIn(500);
  });
});

function setBindings() {
  $("nav a").click(function(e) {
    e.preventDefault();
    const sectionId = e.currentTarget.id + "Section";

    $("html,body").animate(
      {
        // - 50px to overcome navbar height
        scrollTop: $("#" + sectionId).offset().top - 50
      },
      1500
    );
  });
}
