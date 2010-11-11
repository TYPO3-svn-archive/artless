A.v.PageList = HMENU
A.v.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	special = directory
	special.value = {$A.pids.pageList}
	
	maxItems = {$A.maxItems.pageList}
	
	1 = TMENU
	1 {
		
		NO = 1
		NO {
			
			doNotShowLink = 1
			
			before.cObject =< A.v.PageListItem
			
		}
		
	}
	
}