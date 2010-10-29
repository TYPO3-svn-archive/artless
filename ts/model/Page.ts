A.model.Page {
	
	title = TEXT
	title {
		field = title
		wrap = <h1>|</h1>
		typolink < A.lib.typolink.PageLink
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