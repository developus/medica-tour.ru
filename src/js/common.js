$(function (){
  $('[data-slick]').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<img class="slick-prev" src="img/arrow-left.svg" alt="Назад">',
    nextArrow: '<img class="slick-next" src="img/arrow-right.svg" alt="Назад">',
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 744,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
})
