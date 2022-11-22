function tabs() {
    //Tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader__items'),
          tabsContent = document.querySelectorAll('.tabcontent');

    // Hide Content
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide', 'fade_out');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // Show Content and change active class
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade_in');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');

        
    }

    hideTabContent();
    showTabContent();

    // Switching content by click on tab
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item , i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

module.exports = tabs;