A.model.Page {
	
	h1 {
	
		title = TEXT
		title {
			wrap = <h1>|</h1>
			field = title
		}
	
	}
	
	h2 {
		
		subtitle = TEXT
		subtitle {
			wrap = <h2>|</h2>
			field = subtitle
		}
		
	}
	
	h3 {
		
		title = TEXT
		title {
			wrap = <h3>|</h3>
			field = title
		}
		
		titleLinked < .title
		titleLinked {
			typolink < A.lib.typolink.PageLink
		}
		
	}
	
	img {
		
		thumbnail =< A.element.img.Thumbnail
		
		requiredThumbnail =< A.element.img.RequiredThumbnail
		
	}
	
	p { 
		
		subtitle = TEXT
		subtitle {
			field = subtitle
			wrap = <p class="A_subtitle">|</p>
		}
		
		thumbnail =< A.element.img.Thumbnail
		thumbnail.wrap = <p class="A_thumbnail">|</p>
		
		requiredThumbnail =< A.element.img.RequiredThumbnail
		requiredThumbnail {
			wrap = <p class="A_requiredthumbnail A_thumbnail">|</p>
		}
		
		requiredThumbnailLinked < .requiredThumbnail
		requiredThumbnailLinked {
			stdWrap.typolink < A.lib.typolink.PageLink
		}
		
		creationDate =< A.element.span.CreationDate
		creationDate {
			wrap = <p class="A_creationdate">|</p>
		}
		
		abstract = TEXT
		abstract {
			wrap = <p class="A_abstract">|</p>
			field = abstract
			required = 1
		}
		
		author = TEXT
		author {
			wrap = <p class="A_author">|</p>
			field = author
		}
		
		authorLinked < .author
		authorLinked {
			typolink {
				parameter.field = author_email
				ATagParams.cObject = TEXT
				ATagParams.cObject {
					field = author
					wrap = title="|"
				}
			}
		}
		
	}
	
}