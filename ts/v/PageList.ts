A.v.PageList = CONTENT
A.v.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	table = pages
	
	select.orderBy = sorting
	
	renderObj =< A.v.PageListItem
	
}

# add page browser if the constant A.itemsPerPage is set
[globalVar = LIT: 0 < {$A.itemsPerPage}]

A.v.PageList {
	
	select {
		begin.cObject = TEXT
		begin.cObject.value = {$A.itemsPerPage}
		begin.cObject {
			stdWrap.dataWrap = | * {gp:tx_pagebrowse_pi1|page}
			prioriCalc = intval
		}
		max = {$A.itemsPerPage}
	}
	
	stdWrap.append =< A.h.PageBrowser
	
}

[global]