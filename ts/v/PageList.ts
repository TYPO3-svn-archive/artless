A.v.PageList = CONTENT
A.v.PageList {
	
	wrap = <div class="A_pagelist">|</div>
	
	table = pages
	
	select {
		pidInList = current
		orderBy = sorting
		begin.cObject = TEXT
		begin.cObject.value = {$A.itemsPerPage}
		begin.cObject {
			stdWrap.dataWrap = | * {GPvar:tx_pagebrowse_pi1|page}
			prioriCalc = intval
		}
		max = {$A.itemsPerPage}
	}
	
	renderObj =< A.v.PageListItem
	
}


[globalVar = LIT:0<{$A.itemsPerPage}]

A.v.PageList.stdWrap.append =< A.h.PageBrowser

[global]