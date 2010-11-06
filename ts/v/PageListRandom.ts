A.view.div.PageListRandom =< A.view.div.PageList
A.view.div.PageListRandom {
	
	wrap = <div class="A_pagelistrandom A_pagelist">|</div>
	
	maxItems = $A.maxItems.pageListRandom
	
	1 {
		
		alternativeSortingField = rand()
		
		NO.before.cObject =< A.view.div.PageListRandomItem
		
	}
	
}