const homeBtn = document.getElementById('home-btn');
const projectsBtn = document.getElementById('projects-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');

function homePage() {
  homeBtn.classList.add('navbar-active');
  projectsBtn.classList.remove('navbar-active');
  aboutBtn.classList.remove('navbar-active');
  contactBtn.classList.remove('navbar-active');

  homeBtn.classList.remove('navbar-inative');
  projectsBtn.classList.add('navbar-inative');
  aboutBtn.classList.add('navbar-inative');
  contactBtn.classList.add('navbar-inative');

  homeBtn.querySelector('p').classList.remove('hidden');
  projectsBtn.querySelector('p').classList.add('hidden');
  aboutBtn.querySelector('p').classList.add('hidden');
  contactBtn.querySelector('p').classList.add('hidden');
}

function projectsPage() {
  homeBtn.classList.remove('navbar-active');
  projectsBtn.classList.add('navbar-active');
  aboutBtn.classList.remove('navbar-active');
  contactBtn.classList.remove('navbar-active');

  homeBtn.classList.add('navbar-inative');
  projectsBtn.classList.remove('navbar-inative');
  aboutBtn.classList.add('navbar-inative');
  contactBtn.classList.add('navbar-inative');

  homeBtn.querySelector('p').classList.add('hidden');
  projectsBtn.querySelector('p').classList.remove('hidden');
  aboutBtn.querySelector('p').classList.add('hidden');
  contactBtn.querySelector('p').classList.add('hidden');
}

function aboutPage() {
  homeBtn.classList.remove('navbar-active');
  projectsBtn.classList.remove('navbar-active');
  aboutBtn.classList.add('navbar-active');
  contactBtn.classList.remove('navbar-active');

  homeBtn.classList.add('navbar-inative');
  projectsBtn.classList.add('navbar-inative');
  aboutBtn.classList.remove('navbar-inative');
  contactBtn.classList.add('navbar-inative');

  homeBtn.querySelector('p').classList.add('hidden');
  projectsBtn.querySelector('p').classList.add('hidden');
  aboutBtn.querySelector('p').classList.remove('hidden');
  contactBtn.querySelector('p').classList.add('hidden');
}

function contactPage() {
  homeBtn.classList.remove('navbar-active');
  projectsBtn.classList.remove('navbar-active');
  aboutBtn.classList.remove('navbar-active');
  contactBtn.classList.add('navbar-active');

  homeBtn.classList.add('navbar-inative');
  projectsBtn.classList.add('navbar-inative');
  aboutBtn.classList.add('navbar-inative');
  contactBtn.classList.remove('navbar-inative');

  homeBtn.querySelector('p').classList.add('hidden');
  projectsBtn.querySelector('p').classList.add('hidden');
  aboutBtn.querySelector('p').classList.add('hidden');
  contactBtn.querySelector('p').classList.remove('hidden');
}
