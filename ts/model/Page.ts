A.model.Page {
	
	title = TEXT
	title {
		field = title
	}
	
	subtitle = TEXT
	subtitle {
		field = subtitle
	}
	
	thumbnail =< A.element.img.Thumbnail
	
	requiredThumbnail =< A.element.img.RequiredThumbnail
	
	creationDate = TEXT
	creationDate {
		
		innerWrap = <span class="A_creationdate A_date">|</span>
		
		field = crdate
		# strftime = %a, %d. %B
		
		strftime = {$A.dateFormat.creationDate}
		insertData = 1
		
		# strftime = {LLL:EXT:artless/locallang.xml:A.element.span.CreationDate.date}
		# stdWrap.insertData = 1
		
	}
	
	abstract = TEXT
	abstract {
		field = abstract
		required = 1
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