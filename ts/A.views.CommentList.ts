A.views.CommentList = CONTENT
A.views.CommentList {
	
	stdWrap.wrap = <div class="A_commentlist"><h2>Kommentare</h2>|</div>
	
	table = tx_comments_comments
	select {
		pidInList.data = page:uid
		orderBy = tstamp asc
	}
	
	renderObj =< A.models.Comment
	renderObj {
		
	}
	
	stdWrap.ifEmpty = <p>Keine Kommentare vorhanden</p>
	
}