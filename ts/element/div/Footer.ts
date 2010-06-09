A.element.div.Footer = COA
A.element.div.Footer {

	wrap = <div class="A_footer">|</div>
	
	100 =< A.element.ul.Menu
	100 {
		special = directory
		special.value = {$A.footerStoragePid}
	}

}