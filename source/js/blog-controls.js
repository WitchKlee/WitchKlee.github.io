'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // When Muse's desktop sidebar becomes an overlay, close it so it cannot cover mobile navigation.
  window.matchMedia('(min-width: 1200px)').addEventListener('change', event => {
    window.dispatchEvent(new Event(event.matches ? 'sidebar:show' : 'sidebar:hide'));
  });

  const controls = document.querySelectorAll(
    '.site-nav-toggle .toggle, .sidebar-toggle, .popup-trigger, .popup-btn-close, .back-to-top, .sidebar-nav li'
  );

  document.querySelector('.sidebar-toggle')?.setAttribute('aria-label', '切换侧栏');
  document.querySelector('.popup-btn-close')?.setAttribute('aria-label', '关闭搜索');
  document.querySelector('.search-input')?.setAttribute('aria-label', '搜索文章');

  for (const control of controls) {
    control.tabIndex = 0;
    control.setAttribute('role', 'button');
    control.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        control.click();
      }
    });
  }
});
