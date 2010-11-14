A.v.PageListUpcoming =< A.v.PageList
A.v.PageListUpcoming {
	
	wrap = <div class="A_pagelistupcoming A_pagelist">|</div>
	
	special.value = {$A.pids.pageListUpcoming}
	
	maxItems = {$A.maxItems.pageListUpcoming}
	
	1 {
		
		alternativeSortingField = tx_artless_startdate desc
		
		NO.before.cObject =< A.v.PageListUpcomingItem
		
	}
	
}