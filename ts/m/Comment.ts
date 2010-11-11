A.m.Comment {
	
	author = TEXT
	author {
		value = {field:firstname} {field:lastname}
		insertData = 1
		wrap = <span>|</span>
	}
	
	authorLinked < .author
	authorLinked {
		typolink.parameter.field = homepage
	}
		
	date = TEXT
	date {
		field = tstamp
		date = \a\m d.m.y \u\m H:i \U\h\r
		wrap = &nbsp;<span>|</span>
	}
	
	content = TEXT
	content {
		field = content
		wrap = <p>|</p>
	}
	
}