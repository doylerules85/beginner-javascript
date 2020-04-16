console.log('ya ya wes we get it.. IT WORKS!');

const tabs = document.querySelector('.tabs');
const tabButtons = tabs.querySelectorAll('[role="tab"]');
const tabPanels = Array.from(tabs.querySelectorAll('[role="tabpanel"]'));

function handleTabClick(e) {
  // hide all tab panels
  tabPanels.forEach(panel => {
    panel.hidden = true;
  });
  // mark all tabs as unselected
  tabButtons.forEach(tab => {
    //   tab.ariaSelected = false;
    tab.setAttribute('aria-selected', false);
  });
  // mark clicked tab as selected
  e.currentTarget.setAttribute('aria-selected', true);
  // find tabPanel and show it
  const { id } = e.currentTarget;
  /* 
    Method 1
  const tabPanel = tabs.querySelector(`[aria-labelledby="${id}"]`);
  tabPanel.hidden = false;
  */

  // method 2 - find in the array of tabpanels
  const tabPanel = tabPanels.find(
    panel => panel.getAttribute('aria-labelledby') === id
  );
  tabPanel.hidden = false;
}

tabButtons.forEach(button => button.addEventListener('click', handleTabClick));
