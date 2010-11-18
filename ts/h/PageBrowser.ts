A.h.PageBrowser = CONTENT
A.h.PageBrowser {
	
	wrap = <div class="A_pagebrowser">|</div>
	
	table = pages
	
	select.selectFields.cObject = TEXT
	select.selectFields.cObject.value = {$A.maxItems.pageListBrowsable}
	select.selectFields.cObject {
		wrap = CEIL(COUNT(*) / |) as counter
	}
	
	select.pidInList {
		cObject = TEXT
		cObject.value = {$A.pids.pageListBrowsable}
		ifEmpty.cObject = TEXT
		ifEmpty.cObject.data = {TSFE:id}
	}
	
	renderObj =< plugin.tx_pagebrowse_pi1
	renderObj {
		numberOfPages.field = counter
		templateFile = EXT:artless/html/tx_pagebrowse_pi1.html
	}
	
}