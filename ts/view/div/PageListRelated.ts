A.view.div.PageList = HMENU
A.view.div.PageList {
	
	wrap = <div class="A_pagelist A_related">|</div>
	
	special = keywords
	special.keywordsField = uid
	special.keywordsField.sourceField = tx_artlesspages_authors
	# special.mode = tx_scrbl_lastname
	
	1 = TMENU
	1 {
		
		NO = 1
		NO {
			
			doNotShowLink = 1
			
			before.cObject =< A.model.div.Page
			
			allWrap = <div class="A_pagelist-item">|</div>
			
		}
		
	}
	
}