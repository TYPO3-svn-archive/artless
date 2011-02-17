A.v.Logo = IMAGE
A.v.Logo {
	
	stdWrap {
		wrap = <div class="A_logo">|</div>
		typolink < A.h.linkToHome
		required = 1
	}
	
	file {
		import.cObject = TEXT
		import.cObject {
			value < resources
			wrap = uploads/tf/|
			listNum = 0
		}
	}
	
}