
$(document).ready(function() {
  $('#contact-form').submit(function(){
      $('#contact-form button').html('Sending...')
      $.post('mail', $(this).serialize(), function(data) {
        $('#contact-form').html(data);
        $('#contact-form input, #contact-form textarea').val('');
      });
      return false;
  });
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
ga('create', 'UA-17852816-3', 'benshope.com');
ga('send', 'pageview');
