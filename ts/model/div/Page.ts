A.model.div.Page = COA
A.model.div.Page {
	
	wrap = <div class="A_page">|</div>
	
	100 = TEXT
	100 {
		field = title
		typolink < A.model.a.Page
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
		stdWrap.typolink < A.model.a.Page
		stdWrap.wrap = <p class="A_image">|</p>
	}
	
	300 = TEXT
	300 {
		field = crdate
		date = d.m.Y
		wrap = <p class="A_date">|</p>
	}
	
	400 = TEXT
	400 {
		field = author
		typolink {
			parameter.field = author_email
			ATagParams.cObject = TEXT
			ATagParams.cObject {
				field = author
				wrap = title="|"
			}
		}
		wrap = <p class="A_author">|</p>
	}
	
	500 = TEXT
	500 {
		field = abstract
		wrap = <p class="A_abstract">|</p>
	}
	
}