/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	config.removePlugins = 'Image';
	  config.extraPlugins = 'inserthtml';
	  config.toolbar = 'Basic';
	  config.htmlEncodeOutput = false;
};
