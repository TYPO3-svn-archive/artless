A.v.PageListLatest =< A.v.PageList
A.v.PageListLatest {
	
	wrap = <div class="A_pagelistlatest A_pagelist">|</div>
	
	special.value = {$A.pids.pageListLatest}
	
	maxItems = {$A.maxItems.pageListLatest}
	
	1 {
		
		alternativeSortingField = crdate desc
		
		NO.before.cObject =< A.v.PageListLatestItem
		
	}
	
}