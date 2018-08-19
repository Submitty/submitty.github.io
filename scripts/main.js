// This function moves the window to the specified #hash (if one exists)
// as well as applies the 'current' class to the sidebar link for the
// page we're currently on and scrolls sidebar to its position.
document.addEventListener('DOMContentLoaded', function() {
  var element = null;
  for (element of document.getElementsByClassName('nav-arrow')) {
    element.addEventListener('click', function(event) {
      console.log('test');
      event.stopPropagation();
      event.preventDefault();
      let parent = event.target;
      while (parent.tagName.toLowerCase() !== 'li') {
        parent = parent.parentElement;
      }
      parent.classList.toggle('open')
    });
  }

  /*
  <svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>
  */
  var header;
  for (header of ['h1', 'h2', 'h3']) {
    for (element of document.getElementsByClassName('content')[0].getElementsByTagName(header)) {
      element.insertAdjacentHTML('beforeend', '<a href="#' + element.getAttribute('id') + '"><svg class="anchor" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>');
    }
  }
});

// Wait for all CSS/JS to be loaded in, which is useful given how Jekyll works on Github pages
window.addEventListener('load', function() {
  var url = window.location.href;
  if (url.indexOf('#') !== -1) {
    var oldHash = url.substr(url.indexOf('#'));
    location.hash = '';
    location.hash = oldHash;
    url = url.substr(0, url.indexOf('#'));
  }

  document.getElementsByClassName('current')[0].scrollIntoView();
});