A.element.img.RequiredThumbnail = TEXT
A.element.img.RequiredThumbnail {
	
	cObject =< A.element.img.Thumbnail
	
	ifEmpty.cObject =< A.element.img.ThumbnailNotFound
	
}