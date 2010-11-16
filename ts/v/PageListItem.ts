A.v.PageListItem = COA
A.v.PageListItem {
	
	wrap = <div class="A_pagelistitem">|</div>
	
	100 =< A.m.Page.title
	100 {
		wrap = <h3 class="A_page-title">|</h3>
		typolink < A.h.linkToPage
	}
	
	200 =< A.m.Page.thumbnail
	200 {
		stdWrap.typolink < A.h.linkToPage
	}
	
	300 =< A.m.Page.abstract
	
}