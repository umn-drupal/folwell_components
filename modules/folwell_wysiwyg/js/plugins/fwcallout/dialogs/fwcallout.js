(function ($, Drupal, CKEDITOR) {
  CKEDITOR.dialog.add('fwcallout', function(editor) {
    return {
      title: 'Callout style',
      minWidth: 200,
      minHeight: 100,
      contents: [
        {
          id: 'settings',
          elements: [
            {
              id: 'style',
              type: 'select',
              label: 'Select callout style',
              items: [
                  ['Background', 'callout-background'],
                  ['Box', 'callout-border-all'],
                  ['Top Border', 'callout-border-top'],
                  ['Left Border', 'callout-border-left']
              ],
              setup: function(widget) {
                this.setValue(widget.data.style);
              },
              commit: function(widget) {
                widget.setData('style', this.getValue());
              }
            }
          ]
        }
      ]
    };
  });
})(jQuery, Drupal, CKEDITOR);