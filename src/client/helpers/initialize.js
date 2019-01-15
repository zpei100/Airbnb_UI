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
      if ($(e.target).hasClass('reveal')) {
        const others = $('.gallery .reveal').not(e.target)

        $(others).stop();
        $(others).css({ filter: 'brightness(60%)', transition: 'ease-in, 1s' });
      }
    },
    e => {
      if ($(e.target).hasClass('reveal')) {
        const others = $('.gallery .reveal').not(e.target)
        
        $(others).stop();
        $(others).css({ filter: 'brightness(100%)', transition: 'ease-in, 1s' });
      }
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


