A.v.PageListBrowsable =< A.v.PageList
A.v.PageListBrowsable {
	
	wrap = <div class="A_pagelistbrowsable A_pagelist">|</div>
	
	select {
		pidInList = {$A.pids.pageListBrowsable}
		begin.cObject = TEXT
		begin.cObject.value = {$A.maxItems.pageListBrowsable}
		begin.cObject {
			stdWrap.dataWrap = (| * {GPvar:tx_pagebrowse_pi1|page}) + 1
			prioriCalc = intval
		}
		max = {$A.maxItems.pageListBrowsable}
	}
	
	stdWrap.append =< A.h.PageBrowser
	
}