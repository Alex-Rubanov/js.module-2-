function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {
    //Tabs
    const tabs = document.querySelectorAll(tabsSelector),
          tabsContent = document.querySelectorAll(tabsContentSelector),
          tabsParent = document.querySelector(tabsParentSelector);

    // Hide Content
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide', 'fade_out');
            item.classList.remove('show');
        });

        tabs.forEach(item => {
            item.classList.remove(activeClass);
        });
    }

    // Show Content and change active class
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade_in');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add(activeClass);

        
    }

    hideTabContent();
    showTabContent();

    // Switching content by click on tab
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item , i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;