A.res.Date = TEXT
A.res.Date {
	
	innerWrap = <span class="A_date">|</span>
	
	field = crdate
	# strftime = %a, %d. %B
	
	strftime = {$A.dateFormat.creationDate}
	insertData = 1
	
	# strftime = {LLL:EXT:artless/locallang.xml:A.element.span.CreationDate.date}
	# stdWrap.insertData = 1
	
}