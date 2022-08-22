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
  const allHeaderHeight = document.querySelector('header').offsetHeight;

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
    top: headerHeight + 15,
    bottom: 15
  });

  Scrollbar.initAll();

  const body = document.body
  const scrollUp = "scroll-up";
  const scrollDown = "scroll-down";
  let lastScroll = 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll <= allHeaderHeight) {
      body.classList.remove(scrollUp);
      return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
      // down
      body.classList.remove(scrollUp);
      body.classList.add(scrollDown);
      if (typeof StickyFilter == 'object' && document.getElementsByClassName( 'sticky-filter' ).length) {
        StickyFilter.update({
          top: 15
        });
      }
    } else if (
      currentScroll < lastScroll &&
      body.classList.contains(scrollDown)
    ) {
      // up
      body.classList.remove(scrollDown);
      body.classList.add(scrollUp);
      if (typeof StickyFilter == 'object' && document.getElementsByClassName( 'sticky-filter' ).length) {
        StickyFilter.update({
          top: headerHeight + 15
        });
      }
    }
    lastScroll = currentScroll;
  });
});
