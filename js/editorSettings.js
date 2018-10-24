(function ($, Drupal) {
  Drupal.behaviors.customCKEditorConfig = {
    attach: function (context, settings) {
      // if (typeof CKEDITOR !== "undefined") {
      //   settings.editor.formats.rich_text.editorSettings.format_tags += ';div;section';
      //   settings.editor.formats.rich_text.editorSettings.format_section = {
      //     element: 'section',
      //     name: 'Section'
      //   };
      //   debugger;
      // }
    }
  };
})(jQuery, Drupal);
