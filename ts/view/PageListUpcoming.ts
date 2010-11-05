A.view.div.PageListUpcoming =< A.view.div.PageList
A.view.div.PageListUpcoming {
	
	wrap = <div class="A_pagelistupcoming A_pagelist">|</div>
	
	special.value = {$A.pids.pageListUpcoming}
	
	maxItems = {$A.maxItems.pageListUpcoming}
	
	1 {
		
		alternativeSortingField = tx_artlesspages_startdate desc
		
		NO.before.cObject =< A.view.div.PageListUpcomingItem
		
	}
	
}