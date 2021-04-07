$(function () {
    $(".top-slider__inner").slick({
        arrows: false,
        dots: true,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
    
    $(".star").rateYo({
        rating: 5,
        starWidth: "17px",
        normalFill: "#ccccce",
        ratedFill: "#ffc35b",
        readOnly: true,
    });
    
    function getTimeRemaining(endtime) {
  const total = Date.parse(endtime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  
  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(promo, endtime) {
  const clock = document.querySelector('.promo__list-clock');
  const daysSpan = clock.querySelector('.promo__list-days');
  const hoursSpan = clock.querySelector('.promo__list-hours');
  const minutesSpan = clock.querySelector('.promo__list-minutes');
  const secondsSpan = clock.querySelector('.promo__list-seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  const timeinterval = setInterval(updateClock, 1000);
}

const deadline = $('.promo__list-clock').attr('data-time');
initializeClock('promo__list-clock', deadline);
});