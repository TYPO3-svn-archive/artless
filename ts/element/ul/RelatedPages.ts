A.element.ul.RelatedPages = HMENU
A.element.ul.RelatedPages {
	
	special = list
	special.value.field = tx_artlesspages_categories
	
	1 = TMENU
	1 {
		
		wrap = <ul class="A_relatedpages">|</ul>
		
		NO = 1
		NO {
			allWrap = <li>|</li>
		}
		
	}
	
}