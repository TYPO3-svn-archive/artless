<?php

class tx_artless_tcatools {
	
	/**
	 * Mofify showitem string
	 * 
	 * @param string current showitem configuration (passed by reference)
	 * @param string field
	 * @param array newDefinition (available keys: label, palette, special, style)
	 */
	public static function modifyShowItemByField(&$current, $field, array $newDefinition) {
		$currentParts = t3lib_div::trimExplode(',', $current);
		foreach ($currentParts as &$part) {
			$subParts = t3lib_div::trimExplode(';', $part);
			if ($subParts[0] == $field) {
				if (isset($newDefinition['label'])) {
					$subParts[1] = $newDefinition['label'];
				}
				if (isset($newDefinition['palette'])) {
					if (!isset($subParts[1])) { $subParts[1] = ''; }
					$subParts[2] = $newDefinition['palette'];
				}
				if (isset($newDefinition['special'])) {
					if (!isset($subParts[1])) { $subParts[1] = ''; }
					if (!isset($subParts[2])) { $subParts[2] = ''; }
					$subParts[3] = $newDefinition['special'];
				}
				if (isset($newDefinition['style'])) {
					if (!isset($subParts[1])) { $subParts[1] = ''; }
					if (!isset($subParts[2])) { $subParts[2] = ''; }
					if (!isset($subParts[3])) { $subParts[3] = ''; }
					$subParts[4] = $newDefinition['style'];
				}
			}
			$part = implode(';', $subParts);
		}
		$current = implode(',', $currentParts);
	}	
	
	public static function modifyShowItemByPaletteKey(&$current, $paletteKey, array $newDefinition) {
		$currentParts = t3lib_div::trimExplode(',', $current);
		foreach ($currentParts as &$part) {
			$subParts = t3lib_div::trimExplode(';', $part);
			if ($subParts[2] == $paletteKey) {
				if (isset($newDefinition['field'])) {
					$subParts[0] = $newDefinition['field'];
				}
				if (isset($newDefinition['label'])) {
					if (!isset($subParts[0])) { $subParts[0] = ''; }
					$subParts[1] = $newDefinition['label'];
				}
				if (isset($newDefinition['palette'])) {
					if (!isset($subParts[0])) { $subParts[0] = ''; }
					if (!isset($subParts[1])) { $subParts[1] = ''; }
					$subParts[2] = $newDefinition['palette'];
				}
				if (isset($newDefinition['special'])) {
					if (!isset($subParts[0])) { $subParts[0] = ''; }
					if (!isset($subParts[1])) { $subParts[1] = ''; }
					if (!isset($subParts[2])) { $subParts[2] = ''; }
					$subParts[3] = $newDefinition['special'];
				}
				if (isset($newDefinition['style'])) {
					if (!isset($subParts[0])) { $subParts[0] = ''; }
					if (!isset($subParts[1])) { $subParts[1] = ''; }
					if (!isset($subParts[2])) { $subParts[2] = ''; }
					if (!isset($subParts[3])) { $subParts[3] = ''; }
					$subParts[4] = $newDefinition['style'];
				}
			}
			$part = implode(';', $subParts);
		}
		$current = implode(',', $currentParts);
	}
	
}