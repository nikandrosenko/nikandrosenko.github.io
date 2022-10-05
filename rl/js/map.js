;(function() {
    if (typeof ymaps === 'undefined') {
      return;
    }
  
    ymaps.ready(function () {
      var myMap = new ymaps.Map('ymap', {
              center: [56.078402, 37.377891],
              zoom: 17
          }, {
              searchControlProvider: 'yandex#search'
          }),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              balloonContent: 'г. Москва, Бульвар Радости, д.2'
          }, {
              iconLayout: 'default#image',
              iconImageHref: '../img/logo.png',
              iconImageSize: [39, 31],
              iconImageOffset: [-10, -38]
          });
  
      myMap.geoObjects.add(myPlacemark);
  
      myMap.behaviors.able('scrollZoom');
  });
  
  
  })();
  