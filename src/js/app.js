var windowProjects = document.getElementById('space-projects');
var windowAbout = document.getElementById('space-about');

document.getElementById('open-projects').addEventListener('click', function() {
    if (windowAbout.classList.contains('hidden')) {
        if (windowProjects.classList.contains('hidden')) {
            windowProjects.classList.remove('hidden');
        }
    } else {
        windowAbout.classList.add('hidden');
        windowProjects.classList.remove('hidden');
    }
});

document.getElementById('open-about').addEventListener('click', function() {
    if (windowProjects.classList.contains('hidden')) {
        if (windowAbout.classList.contains('hidden')) {
            windowAbout.classList.remove('hidden');
        }
    } else {
        windowProjects.classList.add('hidden');
        windowAbout.classList.remove('hidden');
    }
});

function closeAbout() {
    document.getElementById('space-about').classList.add('hidden');
}

function closeProjects() {
    document.getElementById('space-projects').classList.add('hidden');
}