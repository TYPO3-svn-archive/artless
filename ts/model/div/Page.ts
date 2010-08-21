A.model.div.Page = COA
A.model.div.Page {
	
	wrap = <div class="A_page">|</div>
	
	100 = TEXT
	100 {
		field = title
		typolink  {
			parameter.field = uid
		}
		wrap = <h3>|</h3>
	}
	
	200 =< A.element.img.Thumbnail
	200 {
		wrap = <p class="A_thumbnail">|</p>
	}
	
	300 =< A.element.span.Date
	300 {
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