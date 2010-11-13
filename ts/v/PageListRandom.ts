A.v.PageListRandom =< A.v.PageList
A.v.PageListRandom {
	
	wrap = <div class="A_pagelistrandom A_pagelist">|</div>
	
	maxItems = $A.maxItems.pageListRandom
	
	1 {
		
		alternativeSortingField = rand()
		
		NO.before.cObject =< A.v.PageListRandomItem
		
	}
	
}