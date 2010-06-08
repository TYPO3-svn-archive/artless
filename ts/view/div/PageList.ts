A.views.PageList = HMENU
A.views.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	special = directory
	special.value = {$A.itemsStoragePids}
	
	maxItems = {$A.itemsPerPage}
	#begin = {GPvar:tx_pagebrowse_pi1|page} * {$A.itemsPerPage}
	begin.cObject = TEXT
	begin.cObject {
		value = {GPvar:tx_pagebrowse_pi1|page} * {$A.itemsPerPage}
		insertData = 1
	}
	
	1 = TMENU
	1 {
		
		NO = 1
		NO {
			
			doNotShowLink = 1
			
			before.cObject =< A.models.Page
			
			# wrapItemAndSub = <li class="A_first">|</li>|*|<li>|</li>|*|<li class="A_last">|</li>
			
		}
		
	}
	
}








/*

A.views.PageList = COA
A.views.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	100 = CONTENT
	100 {
		
		table = pages
		select {
			pidInList = {$A.itemsStoragePids}
			orderBy = title asc
			max = {$A.itemsPerPage}
			begin.cObject = TEXT
			begin.cObject {
				value = {GPvar:tx_pagebrowse_pi1|page} * {$A.itemsPerPage}
				insertData = 1
			}
			### TODO: intval?!!
		}
		
		renderObj =< A.models.Page
		renderObj {
			
		}
		
	}
	
	# 200 =< A.menus.Pager
	
}

*/