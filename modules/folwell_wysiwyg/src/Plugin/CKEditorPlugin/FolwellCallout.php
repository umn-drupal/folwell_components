<?php
/**
 * @file
 * Contains \Drupal\folwell_wysiwyg\Plugin\CKEditorPlugin\FolwellCallout.
 */

namespace Drupal\folwell_wysiwyg\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "FolwellCallout" plugin.
 *
 * @CKEditorPlugin (
 *   id = "fwcallout",
 *   label = @Translation("FolwellCallout"),
 *   module = "folwell_wysiwyg"
 * )
 */
class FolwellCallout extends CKEditorPluginBase {

  /**
   * {@inheritdoc}
   */
  public function getConfig(Editor $editor) {
    $config = array();
    return $config;
  }

  /**
   * {@inheritdoc}
   */
  public function getDependencies(Editor $editor) {
    return array();
  }

  /**
   * {@inheritdoc}
   */
  public function getFile() {
    return drupal_get_path('module', 'folwell_wysiwyg') . '/js/plugins/fwcallout/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    $path = drupal_get_path('module', 'folwell_wysiwyg') . '/js/plugins/fwcallout/icons';
    return array(
      'fwcallout' => array(
        'label' => t('Add Callout'),
        'image' => $path . '/fwcallout.png',
      ),
    );
  }

}
