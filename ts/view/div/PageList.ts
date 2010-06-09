A.view.div.PageList = HMENU
A.view.div.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	special = directory
	special.value = {$A.pids.items}
	
	maxItems = {$A.pager.itemsPerPage}
	#begin = {GPvar:tx_pagebrowse_pi1|page} * {$A.pager.itemsPerPage}
	begin.cObject = TEXT
	begin.cObject {
		value = {GPvar:tx_pagebrowse_pi1|page} * {$A.pager.itemsPerPage}
		insertData = 1
	}
	
	1 = TMENU
	1 {
		
		NO = 1
		NO {
			
			doNotShowLink = 1
			
			before.cObject =< A.model.div.Page
			
			wrapItemAndSub = <div class="A_first">|</div>|*|<div>|</div>|*|<div class="A_last">|</div>
			
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