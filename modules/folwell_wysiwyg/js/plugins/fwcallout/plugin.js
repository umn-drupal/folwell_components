/**
 * @file
 * Functionality to enable callout functionality in CKEditor.
 */

(function ($, Drupal, CKEDITOR) {
  'use strict';
  CKEDITOR.plugins.add('fwcallout', {
    requires: 'widget',
    icons: 'fwcallout',
    init: function(editor) {
      editor.widgets.add('fwcallout', {
        button: 'Add a callout box',
        dialog: 'fwcallout',
        defaults: {
          style: 'callout-background',
          width: 'display-100',
          align: 'align-none'
        },
        template:
          '<aside class="callout callout-background display-100 align-none">' +
            '<header class="callout-header"><h1>Header</h1></header>' +
            '<div class="callout-content"><p>Content</p></div>' +
          '</aside>',
        editables: {
          header: {
            selector: 'header.callout-header',
            allowedContent: 'h1 h2 h3 strong em'
          },
          content: {
            selector: 'div.callout-content',
            allowedContent: 'p br ul ol li strong em div'
          }
        },
        allowedContent: 'aside(!callout,callout-background,callout-border-all,callout-border-top,callout-border-left,display-100,display-50,display-33,display-25,align-none,align-right,align-left); header(!callout-header); div(!callout-content)',
        requiredContent: 'aside(!callout); div(!callout-content)',
        upcast: function(element) {
          return element.name == 'aside' && element.hasClass('callout');
        },
        init: function() {
          if (this.element.hasClass('callout-background')) {
            this.setData('style', 'callout-background');
          } else if (this.element.hasClass('callout-border-all')) {
            this.setData('style', 'callout-border-all');
          } else if (this.element.hasClass('callout-border-top')) {
            this.setData('style', 'callout-border-top');
          } else if (this.element.hasClass('callout-border-left')) {
            this.setData('style', 'callout-border-left');
          }
          if (this.element.hasClass('display-100')) {
            this.setData('style', 'display-100');
          } else if (this.element.hasClass('display-50')) {
            this.setData('style', 'display-50');
          } else if (this.element.hasClass('display-33')) {
            this.setData('style', 'display-33');
          } else if (this.element.hasClass('display-25')) {
            this.setData('style', 'display-25');
          }
          if (this.element.hasClass('align-none')) {
            this.setData('style', 'align-none');
          } else if (this.element.hasClass('align-right')) {
            this.setData('style', 'align-right');
          } else if (this.element.hasClass('align-left')) {
            this.setData('style', 'align-left');
          }
        },
        data: function() {
          this.element.removeClass('callout-background');
          this.element.removeClass('callout-border-all');
          this.element.removeClass('callout-border-top');
          this.element.removeClass('callout-border-left');
          this.element.removeClass('display-100');
          this.element.removeClass('display-50');
          this.element.removeClass('display-33');
          this.element.removeClass('display-25');
          this.element.removeClass('align-none');
          this.element.removeClass('align-right');
          this.element.removeClass('align-left');
          if (this.data.style) {
            this.element.addClass(this.data.style);
          }
          if (this.data.width) {
            this.element.addClass(this.data.width);
          }
          if (this.data.align) {
            this.element.addClass(this.data.align);
          }
        }
      });
      CKEDITOR.dialog.add('fwcallout', this.path + 'dialogs/fwcallout.js' );
      if (editor.ui.addButton) {
        editor.ui.addButton('fwcallout', {
          label: 'Callout',
          command: 'fwcallout'
        });
      }
    }
  });
})(jQuery, Drupal, CKEDITOR);