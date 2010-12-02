<?php 

// XCLASS
$GLOBALS['TYPO3_CONF_VARS'][TYPO3_MODE]['XCLASS']['tslib/class.tslib_menu.php'] = t3lib_extMgm::extPath('artless') . 'misc/class.ux_tslib_menu.php';
$GLOBALS['TYPO3_CONF_VARS'][TYPO3_MODE]['XCLASS']['tslib/class.tslib_content.php'] = t3lib_extMgm::extPath('artless') . 'misc/class.ux_tslib_content.php';

require_once t3lib_extMgm::extPath('artless') . 'misc/class.user_artless.php';

?>