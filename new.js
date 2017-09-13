// Safari Sniffing for the purpose of using mix-blend-mode
// Not default in chrome / funky in FF

(function() {
  function isSafari() {
    var userAgent = navigator.userAgent;
    return (/Safari/gi).test(userAgent) &&
      !(/Chrome/gi).test(userAgent);
  }
  if(isSafari()) {
    var overlay = document.querySelector('.overlay');
    overlay.classList.add('multiply');
  }
})();
