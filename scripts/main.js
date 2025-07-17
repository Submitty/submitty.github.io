document.addEventListener('DOMContentLoaded', function() {
  let element = null;

  // Set up the collapse/expand feature of the arrows that sit next to
  // the sidebar links
  for (element of document.getElementsByClassName('nav-click')) {
    element.addEventListener('click', function(event) {
      event.stopPropagation();
      event.preventDefault();
      let parent = event.target;
      while (parent.tagName.toLowerCase() !== 'li') {
        parent = parent.parentElement;
      }
      parent.classList.toggle('open');
    });
  }

  // Add anchor svg next to all headers within the content div of our page to make it easier to
  // get the hash of that element so that you can more easily copy/paste links to specific sections
  for (let header of ['h1', 'h2', 'h3', 'h4']) {
    for (element of document.getElementsByClassName('content')[0].getElementsByTagName(header)) {
      element.insertAdjacentHTML('beforeend', '<a href="#' + element.getAttribute('id') + '"><small style="visibility: hidden;">a</small><svg class="anchor" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>');
    }
  }
});

// Wait for all CSS/JS to be loaded in, which is useful given how Jekyll works on Github pages
window.addEventListener('load', function() {
  // If there is a hash tag in the URL, scroll to it via JS as Jekyll breaks the built-in browser
  // autoscroll feature with how it serves up ages.
  let url = window.location.href;
  if (url.indexOf('#') !== -1) {
    let oldHash = url.substr(url.indexOf('#'));
    location.hash = '';
    location.hash = oldHash;
    url = url.substr(0, url.indexOf('#'));
  }

  // Scroll the sidebar to the element marked as "current", useful if it's out of the browser's
  // viewport
  let current = document.getElementsByClassName('current')[0];
  if (current) {
    current.scrollIntoView();
  }

  document.getElementById('open-nav').addEventListener('click', function() {
    document.body.classList.toggle('nav-open');
  });
});


function toggle_display(id) {
    if (document.getElementById(id).style.display == "none") {
        document.getElementById(id).style.display= "block";
    } else {
        document.getElementById(id).style.display= "none";
    }
    return false;
}

function changeMode() {
  const toggle = document.getElementById('dark-mode-toggle');
  let saved = localStorage.getItem('site_mode') || 'light';

  if (saved !== 'dark') {
    saved = 'dark';
    toggle.innerHTML = 'Toggle Light Mode';
    console.log('Setting dark mode');
  }
  else {
    saved = 'light';
    toggle.innerHTML = 'Toggle Dark Mode';
    console.log('Setting light mode');
  }

  localStorage.setItem('site_mode', saved);
  document.documentElement.setAttribute('data-theme', saved);
}

window.addEventListener('DOMContentLoaded', () => {
  const html   = document.documentElement;
  const toggle = document.getElementById('dark-mode-toggle');
  const saved  = localStorage.getItem('site_mode') || 'light';

  html.setAttribute('data-theme', saved);
  toggle.textContent = saved === 'dark' ? 'Light Mode' : 'Dark Mode';
});

