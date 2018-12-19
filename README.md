# Folwell Components

This module and it's two submodules, [Folwell WYSIWYG](#folwell-wysiwyg) and [Folwell Paragraphs](#folwell-paragraphs), supplement the Folwell theme with additional modular styles and either WYSIWYG styles and plugins, or Paragraph types that can be used to add those components to your sites.

The main Folwell Components module includes CSS/JavaScript for Folwell Accordions, Callouts, and Pull Quotes, and adds the following styles to the CKEditor styles dropdown for the Rich Text text format:

- Regular Button
- Small Button
- Emphasis Button
- Outline Button
- Full-Width Button
- Give Button
- Emphasis Link
- 50% Image
- 33% Image
- 20% Image
- Full-width Image
- Circle Image

*Note: to make use of the styles dropdown in CKEditor, the following setting for "Allowed HTML tags" in the Rich Text format is recommended:*

```
<a class href hreflang title id target rel> <em> <strong> <cite class> <blockquote cite> <code> <ul type> <ol start type> <li> <dl class> <dt> <dd> <h2 id> <h3 id> <h4 id> <h5 id> <h6 id> <s> <sup> <sub> <img src alt data-entity-type data-entity-uuid data-align data-caption> <table> <caption> <tbody> <thead> <tfoot> <th> <td> <tr> <hr> <p class> <br> <h1> <pre> <drupal-entity data-* title alt class> <section class> <div class> <aside class> <header class>
```

## Folwell WYSIWYG

The Folwell WYSIWYG module provides toolbar buttons that can be added to your text formats to add Callouts and Pull quotes in your WYSIWYG editor. Use the ![Small button with a 'C'](modules/folwell_wysiwyg/js/plugins/fwcallout/icons/fwcallout.png) button to add a Callout (a dialog will appear with additional options). Use the ![Small button with a 'P'](modules/folwell_wysiwyg/js/plugins/fwpullquote/icons/fwpullquote.png) button to add a Pull quote.

## Folwell Paragraphs

Currently, the Folwell Paragraphs module only includes an Accordion component, but more (e.g. image callouts) will be included in future releases. After enabling this module, new paragraph types for Folwell Accordion, Accordion Item, Text with Optional Header, and Table will be available on your site.

To use an accordion on your pages, add a Paragraph field to the appropriate content type that includes the Folwell Accordion paragraph type. When you add a Folwell Accordion paragraph to a node, you can then add Accordion Items to that paragraph. Those have a required header (so you have something to click on to activate the accordion), and you can then add the other paragraph types listed above to the accordion content (including nesting accordions, though that hasn't been extensively tested).