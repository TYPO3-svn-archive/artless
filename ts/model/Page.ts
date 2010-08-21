A.model.Page {
	
	title = TEXT
	title {
		field = title
		typolink  {
			parameter.field = uid
		}
		wrap = <h3>|</h3>
	}
	
	subtitle = TEXT
	subtitle {
		field = subtitle
		wrap = <p>|</p>
	}
	
	thumbnail =< A.element.img.Thumbnail
	thumbnail {
		stdWrap.wrap = <p class="A_thumbnail">|</p>
	}
		
	creationDate =< A.element.span.Date
	creationDate {
		wrap = <p class="A_date">|</p>
	}
	
	crdate < creationDate
	
	author = TEXT
	author {
		field = author
		typolink {
			parameter.field = author_email
			ATagParams.cObject = TEXT
			ATagParams.cObject {
				field = author
				wrap = title="|"
			}
		}
		wrap = <p class="A_author">|</p>
	}
	
	abstract = TEXT
	abstract {
		field = abstract
		wrap = <p class="A_abstract">|</p>
	}
	
}