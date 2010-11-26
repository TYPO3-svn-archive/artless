A.h.PageBrowser =< A.v.PageList
A.h.PageBrowser {
	
	wrap = <div class="A_pagebrowser">|</div>
	
	select.selectFields.cObject = TEXT
	select.selectFields.cObject.value = {$A.itemsPerPage}
	select.selectFields.cObject {
		wrap = CEIL(COUNT(*) / |) as numberOfPages
	}
	
	select.begin.cObject = TEXT
	select.begin.cObject.value = 0
	
	renderObj =< plugin.tx_pagebrowse_pi1
	renderObj {
		numberOfPages.field = numberOfPages
		templateFile = EXT:artless/html/tx_pagebrowse_pi1.html
	}
	
	stdWrap {
		prepend =
		append =
	}
	
}