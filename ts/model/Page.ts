A.models.Page = COA
A.models.Page {
	
	wrap = <div class="A_page">|</div>
	
	100 = TEXT
	100 {
		field = title
		typolink {
			parameter.field = uid
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
		}
		wrap = <p>|</p>
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