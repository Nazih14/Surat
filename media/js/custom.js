
new WOW().init();

wow = new WOW(
{
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
wow.init();

$(document).ready(function () {

	$('.star').on('click', function () {
      $(this).toggleClass('star-checked');
    });

    $('.ckbox label').on('click', function () {
      $(this).parents('tr').toggleClass('selected');
    });

    $('.btn-filter').on('click', function () {
      var $target = $(this).data('target');
      if ($target != 'all') {
        $('.table tr').css('display', 'none');
        $('.table tr[data-status="' + $target + '"]').fadeIn('slow');
      } else {
        $('.table tr').css('display', 'none').fadeIn('slow');
      }
    });

 });




/* jQuery toggle layout */
$('#btnToggle').click(function(){
  if ($(this).hasClass('on')) {
    $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
    $(this).removeClass('on');
  }
  else {
    $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
    $(this).addClass('on');
  }
});

$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});





    $(".carousel.zoom").carousel().on("slide.bs.carousel", function (data) {
      var n = $(data.target).find(".item").length;
      var active = data.relatedTarget;
      if(active===undefined){
        active = $(data.target).find(".item.active");
      }else{
        active = $(data.relatedTarget);
      }
      console.log(active);
      $(data.target).find(".item.next").removeClass("next");
      var next = $(data.target).find(".item").eq(active.index()-n+1);
      next.addClass("next");
      $(data.target).find(".item.prev").removeClass("prev");
      var prev = $(data.target).find(".item").eq(active.index()-1);
      prev.addClass("prev");
    }).trigger("slide.bs.carousel"); 
