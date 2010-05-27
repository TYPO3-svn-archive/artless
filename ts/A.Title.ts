A.Title = COA
A.Title {
	
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