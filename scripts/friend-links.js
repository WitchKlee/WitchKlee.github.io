'use strict';

const { escapeHTML, url_for: urlFor } = require('hexo-util');

function avatarMarkup(friend) {
  if (!friend.avatar) {
    const monogram = friend.monogram || Array.from(friend.name)[0];
    return `<span class="friend-avatar" aria-hidden="true">${escapeHTML(monogram)}</span>`;
  }

  const avatarUrl = urlFor.call(hexo, friend.avatar, { relative: false });
  return `<img class="friend-avatar" src="${escapeHTML(avatarUrl)}" alt="" width="44" height="44" loading="lazy">`;
}

hexo.extend.tag.register('friend_links', () => {
  const friends = hexo.locals.get('data').friends || [];
  if (friends.length === 0) return '<p>暂无友链。</p>';

  const links = friends.map(friend => {
    const url = new URL(friend.url);
    if (url.protocol !== 'https:' && url.protocol !== 'http:') {
      throw new Error(`友链「${friend.name}」需要使用 http 或 https 网址`);
    }

    return `<li><a class="friend-card" href="${escapeHTML(url.href)}">
      ${avatarMarkup(friend)}
      <span class="friend-details"><strong>${escapeHTML(friend.name)}</strong>
      <span>${escapeHTML(friend.description || '')}</span></span>
    </a></li>`;
  });

  return `<ul class="friend-grid">${links.join('')}</ul>`;
});
