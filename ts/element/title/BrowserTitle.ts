A.element.title.BrowserTitle = COA
A.element.title.BrowserTitle {
	
	wrap = <title>|</title>
	
	100 = TEXT
	100 {
		field = title
	}
	
	200 = TEXT
	200 {
		value < sitetitle
		noTrimWrap = | — ||
	}
	
}