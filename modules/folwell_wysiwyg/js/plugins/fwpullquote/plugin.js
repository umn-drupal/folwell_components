/**
 * @file
 * Functionality to enable pullquote functionality in CKEditor.
 */

(function($, Drupal, CKEDITOR) {
  "use strict";
  CKEDITOR.plugins.add("fwpullquote", {
    requires: "widget",
    icons: "fwpullquote",
    init: function(editor) {
      editor.widgets.add("fwpullquote", {
        button: "Add a pull quote",
        // dialog: 'fwpullquote',
        template:
          '<aside class="pullquote">' +
          '<p class="pullquote-content">This is an example of a pull quote. Use this to highlight text that is within the content of your web page.</p>' +
          '<cite class="pullquote-citation">Your pullquote should include a citation</cite>' +
          "</aside>",
        editables: {
          "pullquote-content": ".pullquote-content",
          "pullquote-citation": ".pullquote-citation"
        },
        allowedContent:
          "aside(!pullquote); p(!pullquote-content); cite(!pullquote-citation)",
        requiredContent:
          "aside(!pullquote); p(!pullquote-content); cite(!pullquote-citation)",
        upcast: function(element) {
          return element.name === "aside" && element.hasClass("pullquote");
        },
        init: function() {
          // if (this.element.hasClass('callout-background')) {
          //   this.setData('style', 'callout-background');
          // } else if (this.element.hasClass('callout-border-all')) {
          //   this.setData('style', 'callout-border-all');
          // } else if (this.element.hasClass('callout-border-top')) {
          //   this.setData('style', 'callout-border-top');
          // } else if (this.element.hasClass('callout-border-left')) {
          //   this.setData('style', 'callout-border-left');
          // }
        },
        data: function() {
          // this.element.removeClass('callout-background');
          // this.element.removeClass('callout-border-all');
          // this.element.removeClass('callout-border-top');
          // this.element.removeClass('callout-border-left');
          // if (this.data.style) {
          //   this.element.addClass(this.data.style);
          // }
        }
      });
      // CKEDITOR.dialog.add('fwcallout', this.path + 'dialogs/fwcallout.js' );
      if (editor.ui.addButton) {
        editor.ui.addButton("fwpullquote", {
          label: "Pull Quote",
          command: "fwpullquote"
        });
      }
    }
  });
})(jQuery, Drupal, CKEDITOR);
