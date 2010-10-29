A.model.Page {
	
	title = TEXT
	title {
		field = title
		wrap = <h1>|</h1>
	}
	
	subtitle = TEXT
	subtitle {
		field = subtitle
		wrap = <h2>|</h2>
	}
	
	thumbnail =< A.element.img.Thumbnail
	
	requiredThumbnail =< A.element.img.RequiredThumbnail
	
	abstract = TEXT
	abstract {
		field = abstract
		required = 1
		# crop = 200 | ... | 1
		parseFunc =< lib.parseFunc_RTE
	}
	
	dateCreation =< A.element.span.Date
	dateCreation {
		field = crdate
	}
	
	author = TEXT
	author {
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