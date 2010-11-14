A.v.PageSingleNormal = COA
A.v.PageSingleNormal {
	
	wrap = <div class="A_pagesinglenormal">|</div>

	# "Page header"	
	100 =< A.m.Page.header
	
	# "Page content"
	200 =< A.m.Page.content
	
	# "Additional elements"
	300 = COA
	300 {
		wrap = <div class="A_comments">|</div>
		stdWrap.fieldRequired = tx_artless_enablecomments
		100 =< A.v.CommentList
		200 =< A.v.CommentForm
	}
	
}