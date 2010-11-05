A.view.div.PageListBrowsable =< A.view.div.PageList
A.view.div.PageListBrowsable {
	
	wrap = <div class="A_pagelistbrowsable A_pagelist">|</div>
	
	special.value = {$A.pids.pageListBrowsable}
	
	maxItems = {$A.maxItems.pageListBrowsable}
	
	begin.cObject = TEXT
	begin.cObject.value = {$A.maxItems.pageListBrowsable}
	begin.cObject {
		stdWrap.dataWrap = (| * {GPvar:tx_pagebrowse_pi1|page}) + 1
		prioriCalc = intval
	}
	
	stdWrap.append =< A.element.div.PageBrowser
	
}