'use strict';

const { escapeHTML, url_for: urlFor } = require('hexo-util');

hexo.extend.injector.register('body_end', () => {
  const scriptPath = urlFor.call(hexo, 'js/blog-controls.js', { relative: false });
  return `<script src="${escapeHTML(scriptPath)}" defer></script>`;
});
