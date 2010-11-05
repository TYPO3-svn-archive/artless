A.element.div.Footer = COA
A.element.div.Footer {

	wrap = <div class="A_footer">|</div>
	
	100 =< A.element.ul.Menu
	100 {
		
		special = directory
		special.value = {$A.pids.footer}
		
		1.wrap = <ul class="A_footermenu A_menu clearfix">|</ul>
		
	}

}