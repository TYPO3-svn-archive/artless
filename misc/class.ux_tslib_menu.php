<?php 

class ux_tslib_menu extends tslib_menu {
	
	/**
	 * Extending the function in order to give parameter additional stdWrap functionality
	 * 
	 * @return void
	 * @author Fabrizio Branca <typo3@fabrizio-branca.de>
	 * @since 2010-11-14
	 */
	function makeMenu()	{
		$this->mconf['begin'] = $this->parent_cObj->stdWrap($this->mconf['begin'], $this->mconf['begin.']);
		$this->conf['begin'] = $this->parent_cObj->stdWrap($this->conf['begin'], $this->conf['begin.']);
		return parent::makeMenu();
	}
	
}