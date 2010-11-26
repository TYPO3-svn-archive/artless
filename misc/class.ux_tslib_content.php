<?php

class ux_tslib_cObj extends tslib_cObj {
	
	function getQuery($table, $conf, $returnQueryArray = FALSE) {
		$conf['selectFields'] = $this->stdWrap($conf['selectFields'], $conf['selectFields.']);
		$conf['begin'] = $this->stdWrap($conf['begin'], $conf['begin.']);
		return parent::getQuery($table, $conf, $returnQueryArray);
	}
	
}