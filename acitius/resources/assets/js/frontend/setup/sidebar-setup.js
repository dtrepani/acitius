import getClassProp from '../../modules/get-class-prop';

export default function() {
  const $sidebar = $('.aside-nav');
  const $main = $('main');
  const $overlay = $('.overlay');
  const mdWidth = parseInt(getClassProp('width', 'breakpoint-md'), 10);
  const transitionSpeed = parseFloat(getClassProp('transition-duration', 'speed')) * 1000;
  let prevWindowWidth, contentTimeout, overlayTimeout;

  toggleSidebarAsNeeded();

  $(window).resize(toggleSidebarAsNeeded);

  $sidebar.on('sidebar.toggle', toggleSidebar);
  $('#nav-accordion').on('show.bs.collapse', showSidebarWhenSubnavExpanded);

  $('.toggle-nav').click(() => { $sidebar.trigger('sidebar.toggle'); });
  $overlay.click(() => {
    if (!sidebarIsClosed()) {
      toggleSidebar();
    }
  });

  /**
   * Min-width is set back to 0 after the class is toggled and animation takes place to avoid
   * the content's width from changing while the sidebar is still transitioning;
   */
  function setContentMinWidthTimeout() {
    clearTimeout(contentTimeout);

    contentTimeout = setTimeout(() => {
      if (sidebarIsClosed()) {
        $main.css('min-width', 0);
      }
    }, transitionSpeed);
  }

  /**
   * Overlay should be hidden after it has finished transitioning to inactive. Because the
   * timeout could be cancelled, check whether the overlay is active to decide whether or
   * not to hide the overlay (instead of merely toggling its hidden state).
   */
  function setOverlayHideTimeout() {
    clearTimeout(overlayTimeout);

    if (sidebarIsClosed()) {
      $overlay.removeClass('hidden');
    } else {
      overlayTimeout = setTimeout(() => {
        $overlay.addClass('hidden');
      }, transitionSpeed);
    }
  }

  function sidebarIsClosed() {
    return $sidebar.hasClass('closed');
  }

  function showSidebarWhenSubnavExpanded() {
    if (sidebarIsClosed()) {
      $sidebar.trigger('sidebar.toggle');
    }
  }

  function toggleSidebar() {
    if (sidebarIsClosed()) {
      $main.css('min-width', $main.width());
    }
    setContentMinWidthTimeout();

    setOverlayHideTimeout();
    $('.overlay').toggleClass('active');

    toggleSidebarOnly();
  }

  function toggleSidebarAsNeeded() {
    const currWindowWidth = $(window).width();

    if (transitionedFromDesktopToMobileWidths(currWindowWidth) ||
      transitionedFromMobileToDesktopWidths(currWindowWidth)
    ) {
      toggleSidebarOnly();
    }

    prevWindowWidth = currWindowWidth;
  }

  /**
   * On initial page load and the transition from desktop to mobile widths, the content's
   * min-width does not to be changed, only the sidebar is affected.
   */
  function toggleSidebarOnly() {
    const $elemsInSidebarNotNav = $sidebar.children('*:not(.main-nav)');

    if (!$sidebar.hasClass('closed')) {
      $('.main-subnav.collapse.show').collapse('hide');
    }

    $sidebar.toggleClass('closed');
    $elemsInSidebarNotNav.toggleClass('hidden');
    $('.main-nav .title .name').toggleClass('no-opacity');
  }

  function transitionedFromDesktopToMobileWidths(currWindowWidth) {
    return (currWindowWidth <= mdWidth &&
      (prevWindowWidth === undefined || prevWindowWidth > mdWidth)
    );
  }

  function transitionedFromMobileToDesktopWidths(currWindowWidth) {
    return ((currWindowWidth > mdWidth &&
      (prevWindowWidth === undefined || prevWindowWidth <= mdWidth)) &&
      sidebarIsClosed()
    );
  }
}

