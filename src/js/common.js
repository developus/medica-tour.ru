const splides = document.getElementsByClassName( 'splide' );

for ( var i = 0; i < splides.length; i++ ) {
  new Splide( splides[ i ] ).mount();
}

const lightbox = GLightbox({
  selector: 'data-glightbox',
  loop: true
});

const headerHeight = document.querySelector('.sticky-header').offsetHeight + 15;

const stickyHeader = new Sticky('.sticky-header');

const stickyFilter = new Sticky('.sticky-filter', {
  marginTop: headerHeight
});
