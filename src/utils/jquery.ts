import $ from 'jquery';

function swipeElement() {
  // Replace span-wrapper by span-element
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

export { swipeElement };
