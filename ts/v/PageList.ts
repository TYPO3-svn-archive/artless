A.v.PageList = CONTENT
A.v.PageList {
	wrap = <div class="A_pagelist">|</div>
	table = pages
	select {
		pidInList = {$A.pids.pageList}
		orderBy = tx_artless_startdate desc
	}
	renderObj =< A.v.PageListItem
}	