import $ from 'jquery';

function swipeElement() {
  // Replace span-wrapper by span-element
  $('.span-wrapper').each(function (index) {
    const relatedEl = $('.span-element').eq(index);
    relatedEl.appendTo($(this));
  });
}

function hideEmpty() {
  // Masquer le parent si le CMS est vide
  $('.w-dyn-empty').each(function () {
    $(this).parent().hide();
  });
}

export { hideEmpty, swipeElement };
