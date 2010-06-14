A.element.title.Title = COA
A.element.title.Title {
	
	wrap = <title>|</title>
	
	100 = TEXT
	100 {
		field = title
		noTrimWrap = || — |
	}
	
	200 = TEXT
	200 {
		value < sitetitle
	}
	
}