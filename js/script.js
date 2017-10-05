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
        if (langInput[i].checked) {
            currentLang = langInput[i].value;
        }
    }
    applyLanguage(currentLang);
    getCurrentMessege();
});
// var currentLang = getCurrentLanguage();
// getCurrentMessege(currentLang);

// var $save = document.getElementById('save');
// $save.addEventListener('click', function() {
//     var checkedInput = document.querySelector('#languages input[type="radio"]:checked').parentNode;
//     if (checkedInput) {
//         var checkedLanguage = checkedInput.innerText.trim().toLowerCase();
//         if (localStorage) {
//             localStorage.setItem('lang', checkedLanguage);
//         }
//         applyLanguage(checkedLanguage);
//         var elementsVisible = document.querySelectorAll('.lang.visible');
//         if (elementsVisible) {
//             for (var v = 0; v < elementsVisible.length; v++) {
//                 elementsVisible[v].classList.remove('visible');
//             }
//         }
//         getCurrentMessege(checkedLanguage);
//     }
// });
// function langChecked(lang) {
//     var langInputs = document.querySelectorAll('#languages input[type="radio"]');
//     for (var i = 0; i < langInputs.length; i++) {
//         langInputs[i].removeAttribute('checked');
//         if (langInputs[i].parentNode.innerText.trim().toLowerCase() === lang) {
//             langInputs[i].setAttribute('checked', 'checked');
//         }
//     }
// }
// function getCurrentMessege(lang) {
//     var langEls = document.getElementsByClassName('lang-' + lang);
//     langChecked(lang);
//     for (var i = 0; i < langEls.length; i++) {
//         var langEl = langEls[i];
//         langEl.classList.add('visible');
//     }
// }

// function applyLanguage(lang) {
//     alert('now language is: ' + lang);
// }

// function getCurrentLanguage() {
//     var defaultLanguage = 'ua';
//     if (localStorage.getItem("lang")) {
//         defaultLanguage = localStorage.getItem("lang");
//     }
//     return defaultLanguage;
// }

// function getCurrentMessege() {
//     var currentLang = getCurrentLanguage();
//     var invisible = document.getElementsByClassName('lang');
//     for (var j = 0; j < invisible.length; j++) {
//         invisible[j].classList.remove('visible');
//     }
//     var langEls = document.getElementsByClassName('lang-' + currentLang);
//     for (var i = 0; i < langEls.length; i++) {
//         var langEl = langEls[i];
//         langEl.classList.add('visible');
//     }
// }

// var $save = document.querySelector('html body button#save')
// getCurrentMessege();

// $save.addEventListener('click', function(){
//   var langInput = document.querySelectorAll('#languages input[type="radio"]');
//   var langInputL = langInput.length;
//   console.log(langInput);
//     if (langInput) {
//         var checkedLanguage = langInput.innerText.trim().toLowerCase();
//         if (localStorage) {
//             localStorage.setItem('lang', checkedLanguage);
//         }
//         applyLanguage(checkedLanguage);
//     }

//   getCurrentMessege();
// });



// var currentLang = getCurrentLanguage();

// // display currentLang
// displayText(currentLang);

// var $save = document.querySelector('html body button#save');

// $save.addEventListener('click', function () {
//     var checkedInput = document.querySelector('#languages input[type="radio"]:checked').parentNode;

//     if (checkedInput) {
//         var checkedLanguage = checkedInput.innerText.trim().toLowerCase();
//         if (localStorage) {
//             localStorage.setItem('lang', checkedLanguage);
//         }
//         applyLanguage(checkedLanguage);

//         var elementsVisible = document.querySelectorAll('.lang.visible');

//         if (elementsVisible) {
//             for (var v = 0; v < elementsVisible.length; v++) {
//                 elementsVisible[v].classList.remove('visible');
//             }

//         }
//         displayText(checkedLanguage);
//     }
// });


// /**
//  * function select checked language
//  * @param lang
//  * @constructor
//  */
// function langChecked(lang) {
//     var langInputs = document.querySelectorAll('#languages input[type="radio"]');

//     for (var i = 0; i < langInputs.length; i++) {
//         langInputs[i].removeAttribute('checked');
//         if (langInputs[i].parentNode.innerText.trim().toLowerCase() === lang) {
//             langInputs[i].setAttribute('checked', 'checked');
//         }
//     }
// }

// /**
//  * function display text checked language
//  * @param lang
//  */
// function displayText(lang) {
//     var langEls = document.getElementsByClassName('lang-' + lang);

//     langChecked(lang);

//     for (var i = 0; i < langEls.length; i++) {
//         var langEl = langEls[i];

//         langEl.classList.add('visible');
//     }
// }

// // var currentLang = getCurrentLanguage();
// // var langEls = document.getElementsByClassName('lang-' + currentLang);

// // for (var i = 0; i < langEls.length; i++) {
// //     var langEl = langEls[i];

// //     // langEl.style.display = 'inline';
// //     langEl.classList.add('visible');
// // }



// // // $<prefix> == DOMElement
// // var $save = document.querySelector('html body button#save')

// // $save.addEventListener('click', function() {
// //     alert(1);
// // });

// function setLocal(e){
//     var $save = document.getElementById('save');
//         $save.addEventListener('click', function() {
//            localStorage.setItem("userLang", e)
//            light();
//     })
// }