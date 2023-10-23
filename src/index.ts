import './index.css';

import { swipeElement } from '$utils/jquery';
import { loadScript } from '$utils/loadScript';
import { articlesSwiper } from '$utils/swiper';
import { scrollTop, triggerHero } from '$utils/typescript';

window.Webflow ||= [];
window.Webflow.push(() => {
  // Load Finsweet Attributes scripts
  Promise.all([
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-cmsfilter@1/cmsfilter.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-richtext@1/richtext.js'),
    loadScript(
      'https://cdn.jsdelivr.net/npm/@finsweet/attributes-scrolldisable@1/scrolldisable.js'
    ),
  ]);

  // Load swipeElement
  swipeElement();

  // Trigger hero button
  triggerHero();

  // scrolltop Trigger
  scrollTop();

  // Load swiper
  articlesSwiper();
});
