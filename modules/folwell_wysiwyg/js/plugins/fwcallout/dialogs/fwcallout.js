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
              'default': 'callout-background',
              setup: function(widget) {
                this.setValue(widget.data.style);
              },
              commit: function(widget) {
                widget.setData('style', this.getValue());
              }
            },
            {
              id: 'width',
              type: 'select',
              label: 'Select callout width',
              items: [
                ['Full', 'display-100'],
                ['50%', 'display-50'],
                ['33%', 'display-33'],
                ['25%', 'display-25']
              ],
              'default': 'display-100',
              setup: function(widget) {
                this.setValue(widget.data.width);
              },
              commit: function(widget) {
                widget.setData('width', this.getValue());
              }
            },
            {
              id: 'align',
              type: 'select',
              label: 'Select callout float',
              items: [
                ['None', 'align-none'],
                ['Left', 'align-left'],
                ['Right', 'align-right']
              ],
              'default': 'align-none',
              setup: function(widget) {
                this.setValue(widget.data.align);
              },
              commit: function(widget) {
                widget.setData('align', this.getValue());
              }
            }
          ]
        }
      ]
    };
  });
})(jQuery, Drupal, CKEDITOR);