import $ from 'jquery';

export const floatButtonWhenEntering = function(ele) {
  ele.hover(
    () => {
      $('.button-bottom').css({
        transform: 'translateY(-15px)',
        transition: 'opacity 0.2s ease-in, transform 0.35s'
      });
    },
    () => {
      $('.button-bottom ').css({
        transform: 'translateY(0)',
        transition: 'opacity 0.2s ease-in, transform 0.35s'
      });
    },
  );
};

export const highlightImageOnHover = function(ele) {
  $(ele).hover(
    e => {
      const others = $(e.target)
        .parent()
        .siblings()
        .children('img')
        .not(e.target);
      $(others).stop();
      $(others).css({ opacity: 0.7, transition: 'ease-in, 1s' });
    },
    e => {
      const others = $(e.target)
        .parent()
        .siblings()
        .children('img')
        .not(e.target);
      $(others).stop();
      $(others).css({ opacity: 1, transition: 'ease-in, 1s' });
    }
  );
};

export const roundToHalf = number => {
  var floor = Math.floor(number);
  var ceil = Math.ceil(number);
  var middle = (floor + ceil) / 2;

  return number <= middle
  ? number - floor <= middle - number
    ? floor
    : middle
  : number - middle <= ceil - number
    ? middle
    : ceil;
};


