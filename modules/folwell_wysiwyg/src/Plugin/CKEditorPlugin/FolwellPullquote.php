<?php
/**
 * @file
 * Contains \Drupal\folwell_wysiwyg\Plugin\CKEditorPlugin\FolwellPullquote.
 */

namespace Drupal\folwell_wysiwyg\Plugin\CKEditorPlugin;

use Drupal\ckeditor\CKEditorPluginBase;
use Drupal\editor\Entity\Editor;

/**
 * Defines the "FolwellPullquote" plugin.
 *
 * @CKEditorPlugin (
 *   id = "fwpullquote",
 *   label = @Translation("FolwellPullquote"),
 *   module = "folwell_wysiwyg"
 * )
 */
class FolwellPullquote extends CKEditorPluginBase {

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
    return drupal_get_path('module', 'folwell_wysiwyg') . '/js/plugins/fwpullquote/plugin.js';
  }

  /**
   * {@inheritdoc}
   */
  public function getButtons() {
    $path = drupal_get_path('module', 'folwell_wysiwyg') . '/js/plugins/fwpullquote/icons';
    return array(
      'fwpullquote' => array(
        'label' => t('Add Pull Quote'),
        'image' => $path . '/fwpullquote.png',
      ),
    );
  }

}
