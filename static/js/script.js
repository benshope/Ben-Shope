// SCROLLING
$(function() {
  $('#topnav a, .site-title').on('click', function(e) {
    e.preventDefault();
    var scrolldiv = $(this).attr('href');
    $(scrolldiv).animatescroll({ padding:60 });
  });
});

// ON PAGE LOAD
var map;
$(document).ready(function() {
  // BOOTSTRAP QUOTE CAROUSEL
  $('#testimonials-carousel').carousel({ interval: false });

  // MAP
  map = new GMaps({
    el: '#map',
    lat: 37.3894,
    lng: -122.0819
  });
  map.setContextMenu({
    control: 'map',
    options: [{
      title: 'Add marker',
      name: 'add_marker',
      action: function(e){
        this.addMarker({
          lat: e.latLng.lat(),
          lng: e.latLng.lng(),
          title: 'New marker'
        });
        this.hideContextMenu();
      }
    }, {
      title: 'Center here',
      name: 'center_here',
      action: function(e){
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });
  map.setContextMenu({
    control: 'marker',
    options: [{
      title: 'Center here',
      name: 'center_here',
      action: function(e){
        this.setCenter(e.latLng.lat(), e.latLng.lng());
      }
    }]
  });

  // CONTACT FORM
  $('#contact-form').submit(function(){
      $('#contact-form button').html('Sending...')
      $.post('mail', $(this).serialize(), function(data) {
        $('#contact-form').html(data);
        $('#contact-form input, #contact-form textarea').val('');
      });
      return false;
  });
});

// ANALYTICS
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-17852816-3', 'benshope.com');
ga('send', 'pageview');

