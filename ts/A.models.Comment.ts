A.models.Comment = COA
A.models.Comment {
	
	100 = COA
	100 {
		
		wrap = <h4>|</h4>
		
		100 = TEXT
		100 {
			value = {field:firstname} {field:lastname}
			insertData = 1
			typolink {
				parameter.field = homepage
			}
			wrap = <span>|</span>
		}
		
		300 = TEXT
		300 {
			field = tstamp
			date = \a\m d.m.y \u\m H:i \U\h\r
			wrap = &nbsp;<span>|</span>
		}
		
	}
	
	400 = TEXT
	400 {
		field = content
		wrap = <p>|</p>
	}
	
}