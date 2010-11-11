A.v.PageListItem = COA
A.v.PageListItem {
	
	wrap = <div class="A_pagelistitem">|</div>
	
	100 =< A.m.Page.title
	100 {
		wrap = <h3>|</h3>
		typolink < A.lib.PageLink
	}
	
	200 =< A.m.Page.thumbnail
	200 {
		stdWrap.typolink < A.lib.PageLink
	}
	
	300 =< A.m.Page.abstract
	
}