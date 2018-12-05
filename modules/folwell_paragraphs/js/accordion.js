(function ($, Drupal) {
  Drupal.behaviors.folwellAccordion = {
    attach: function() {
      var accordion = $('.paragraph--type--folwell-accordion .field--name-field-fa-accordion-items'),
          expandLink = $('.accordion-expand-all'),
          contentAreas;
      accordion.accordion({
        active: false,
        collapsible: true,
        heightStyle: 'content',
        header: 'h3'
      });
      contentAreas = $('.ui-accordion-content').hide();

      expandLink.click(function(){
        var isAllOpen = $(this).data('isAllOpen');

        contentAreas[isAllOpen? 'hide': 'show']()
            .trigger(isAllOpen? 'hide': 'show');
      });

      expandLink.keypress(function(e) {
        if (e.which == 13) {
          $('a.accordion-expand-all').trigger('click');
        }
      });

      // when panels open or close, check to see if they're all open
      contentAreas.on({
        // whenever we open a panel, check to see if they're all open
        // if all open, swap the button to collapser
        show: function(){
          var isAllOpen = !contentAreas.is(':hidden');
          if(isAllOpen){
            expandLink.text('Collapse All')
                .data('isAllOpen', true);
            //expandLink.addClass('ui-accordion-header-active');
            $( '.ui-accordion-header' ).addClass( 'ui-state-active');

          }
        },
        // whenever we close a panel, check to see if they're all open
        // if not all open, swap the button to expander
        hide: function(){
          var isAllOpen = !contentAreas.is(':hidden');
          if(!isAllOpen){
            expandLink.text('Expand all')
                .data('isAllOpen', false);
            $( '.ui-accordion-header' ).removeClass( 'ui-state-active');
          }
        }
      });

    }
  };
})(jQuery, Drupal);


