const splides = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < splides.length; i++ ) {
  new Splide( splides[ i ] ).mount();
}

const lightbox = GLightbox({
  selector: 'data-glightbox',
  loop: true
});

document.addEventListener('DOMContentLoaded', function() {
  const headerHeight = document.querySelector('.sticky-header').offsetHeight;

  const StickyHeader = new hcSticky('.sticky-header', {
    stickTo: 'body',
    onStart: function () {
      document.querySelector('.sticky-header').classList.add("shadow")
    },
    onStop: function () {
      document.querySelector('.sticky-header').classList.remove("shadow")
    }
  });

  const StickyFilter = new hcSticky('.sticky-filter', {
    stickTo: '.sticky-filter-container',
    followScroll: false,
    top: headerHeight + 15
  });

});
