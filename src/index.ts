import './index.css';

import { hideEmpty, swipeElement } from '$utils/jquery';
import { loadScript } from '$utils/loadScript';
import { articlesSwiper, chiffresSwiper, referencesSwiper, uneBlogSwiper } from '$utils/swiper';
import {
  LogoScroll,
  scrollTop,
  translateDatesInContent,
  triggerContact,
  triggerFooter,
  triggerHero,
} from '$utils/typescript';

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
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-socialshare@1/socialshare.js'),
    loadScript('https://cdn.jsdelivr.net/npm/@finsweet/attributes-toc@1/toc.js'),
  ]);

  // Load swipeElement
  swipeElement();
  hideEmpty();

  // Load month
  translateDatesInContent();

  // Trigger hero button
  triggerHero();
  triggerFooter();
  triggerContact();

  // scrolltop Trigger
  scrollTop();
  LogoScroll();

  // Load swiper
  articlesSwiper();
  referencesSwiper();
  chiffresSwiper();

  // Load swiper - Blog
  uneBlogSwiper();
});
