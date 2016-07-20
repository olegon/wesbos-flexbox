(function() {
    "use strict";

    var toggleButton = document.querySelector('.toggleNav');
    var navList = document.querySelector('.flex-nav ul');

    toggleButton.addEventListener('click', function() {
        var CLASS_NAME = 'hide';

        if (navList.classList.contains(CLASS_NAME)) {
            navList.classList.remove(CLASS_NAME);
        } else {
            navList.classList.add(CLASS_NAME);
        }
    });

})();
