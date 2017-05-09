export default function() {
  const $navAccordion = $('#nav-accordion');

  $navAccordion.on('shown.bs.collapse', () => {
    localStorage.setItem('collapseItem', $navAccordion.find('.collapse.show').attr('id'));
  });

  $navAccordion.on('hide.bs.collapse', () => {
    const closingItem = $navAccordion.find('.collapse.show').attr('id');
    if (collapseItem === closingItem) {
      localStorage.removeItem('collapseItem');
    }
  });

  const collapseItem = localStorage.getItem('collapseItem');
  if (collapseItem) {
    $(`#${collapseItem}`).collapse('show');
  }
}
