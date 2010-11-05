A.view.div.PageListLatest =< A.view.div.PageList
A.view.div.PageListLatest {
	
	wrap = <div class="A_pagelistlatest A_pagelist">|</div>
	
	special.value = {$A.pids.pageListLatest}
	
	maxItems = {$A.maxItems.pageListLatest}
	
	1 {
		
		alternativeSortingField = crdate desc
		
		NO.before.cObject =< A.view.div.PageListLatestItem
		
	}
	
}