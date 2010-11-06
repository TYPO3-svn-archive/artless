A.res.BrowserTitle = COA
A.res.BrowserTitle {
	
	wrap = <title>|</title>
	
	100 = TEXT
	100 {
		value < sitetitle
	}
	
	200 = TEXT
	200 {
		field = title
		noTrimWrap = | — ||
	}
	
}