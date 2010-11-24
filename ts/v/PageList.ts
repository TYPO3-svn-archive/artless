A.v.PageList = CONTENT
A.v.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	table = pages
	
	select {
		pidInList = {$A.pids.pageList}
		orderBy = sorting
		max = {$A.maxItems.pageList}
	}
	
	renderObj =< A.v.PageListItem
	
}