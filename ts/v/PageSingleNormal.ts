A.v.PageSingleNormal = COA
A.v.PageSingleNormal {
	
	wrap = <div class="A_pagesinglenormal">|</div>
	
	100 =< A.m.Page.title
	
	200 =< A.m.Page.subtitle
	
	300 =< A.m.Page.thumbnail
	
	400 =< A.m.Page.abstract
	
	500 =< A.m.Page.contentLeft
	
	600 =< A.m.Page.contentNormal
	
	700 =< A.m.Page.contentRight
	
	800 =< A.m.Page.contentBorder
	
	900 = COA
	900 {
		wrap = <div class="A_comments">|</div>
		stdWrap.fieldRequired = tx_artless_enablecomments
		100 =< A.v.CommentList
		200 =< A.v.CommentForm
	}
	
}