A.model.div.Page = COA
A.model.div.Page {
	
	wrap = <div class="A_page">|</div>
	
	100 = TEXT
	100 {
		field = title
		typolink {
			parameter.field = uid
			ATagParams.cObject = TEXT
			ATagParams.cObject {
				field = title
				wrap = title="|"
			}
		}
		wrap = <h3>|</h3>
	}
	
	200 = IMAGE
	200 {
		file {
			import = uploads/media/
			import {
				field = media
				listNum = 0
			}
			width = 575c
			height = 400c
		}
		stdWrap.typolink {
			parameter.field = uid
			wrap = <p class="A_image">|</p>
			required = 1
		}
	}
	
	300 = TEXT
	300 {
		field = crdate
		date = d.m.Y
		wrap = <p>|</p>
	}
	
	400 = TEXT
	400 {
		field = author
		typolink {
			parameter.field = author_email
		}
		wrap = <p>|</p>
	}
	
	500 = TEXT
	500 {
		field = abstract
		wrap = <p>|</p>
	}
	
}