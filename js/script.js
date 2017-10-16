var applyLanguage = function(lang) {
    alert('now language is: ' + lang);
    localStorage.setItem("lang", lang);
};

var getCurrentLanguage = function() {
    var defaultLanguage = 'ua';
    if (localStorage.getItem('lang')) {
        defaultLanguage = localStorage.getItem('lang');
    }
    return defaultLanguage;
}

function getCurrentMessege() {
    var currentLang = getCurrentLanguage();
    var invisible = document.getElementsByClassName('visible');
    invisibleLength = invisible.length;
    for (var j = 0; j < invisibleLength; j++) {
        invisible[0].classList.remove('visible');
    }
    var langEls = document.getElementsByClassName('lang-' + currentLang);
    for (var i = 0; i < langEls.length; i++) {
        var langEl = langEls[i];
        langEl.classList.add('visible');
    }
}

var $save = document.querySelector('html body button#save')
getCurrentMessege();

$save.addEventListener('click', function() {
    var langInput = document.querySelectorAll('#languages input[type="radio"]');
    var currentLang;
    for (var i = 0; i < langInput.length; i++) {
        langInput[i].removeAttribute('checked');
        if (langInput[i].checked) {
            langInput[i].setAttribute('checked', 'checked');
            currentLang = langInput[i].value;
            console.log(langInput[i].checked);

        }
    }
    applyLanguage(currentLang);
    getCurrentMessege();
});
