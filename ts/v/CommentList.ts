A.v.CommentList = CONTENT
A.v.CommentList {
	
	wrap = <div class="A_commentlist">|</div>
	
	table = tx_comments_comments
	select {
		pidInList.data = page:uid
		orderBy = tstamp asc
		where = approved = 1
	}
	
	renderObj =< A.v.CommentListItem
	
	stdWrap.ifEmpty = <p>Keine Kommentare vorhanden</p>
	
}