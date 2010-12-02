<?php

class user_artless {
	
	/**
	 * Return hash for a given string.
	 * This method can be used as a userfunction. 
	 * E.g.:
	 * 
	 * <code>
	 * 10 = TEXT
	 * 10 {
	 *		cObject = TEXT
	 * 		cObject {
	 *			field = email
	 *			ifEmpty = unknown@gravatar.com
	 *			postUserFunc = user_artless->user_md5
	 *		}
	 *		dataWrap = <div class="gravatar-image"><img src="http://www.gravatar.com/avatar/|?s=96&default=http%3A%2F%2Fwww.gravatar.com%2Favatar%2Fad516503a11cd5ca435acc9bb6523536%3Fs%3D96" title="{field:firstname} {field:lastname}"/></div>
	 * }
	 * </code>
	 *
	 * @param 	string 	content
	 * @return	string	md5 of content
	 * @author	Fabrizio Branca <mail@fabrizio-branca.de>
	 * @since	2009-03-01
	 */
	public function user_md5($content) {
		return md5($content);
	}
	
}