A.m.Page {
	
	# attributes of the table "pages"
	
	title = TEXT
	title {
		wrap = <h1 class="A_page-title">|</h1>
		field = title
	}
	
	subtitle = TEXT
	subtitle {
		wrap = <h2 class="A_page-subtitle">|</h2>
		field = subtitle
		required = 1
	}
	
	thumbnail =< A.h.Thumbnail
	
	thumbnailRequired =< A.h.ThumbnailRequired
	
	abstract = TEXT
	abstract {
		wrap = <div class="A_page-abstract">|</div>
		field = abstract
		required = 1
		# crop = 200 | ... | 1
		parseFunc =< lib.parseFunc_RTE
	}
	
	dateCreation =< A.h.Date
	dateCreation {
		field = crdate
		fieldRequired = crdate
	}
	
	dateStart =< A.h.Date
	dateStart {
		field = tx_artless_startdate
		fieldRequired = tx_artless_startdate
	}
	
	dateEnd =< A.h.Date
	dateEnd {
		field = tx_artless_enddate
		fieldRequired = tx_artless_enddate
	}
	
	author = TEXT
	author {
		wrap = <span class="A_page-author">|</span>
		field = author
	}
	
	authorEmail = TEXT
	authorEmail {
		wrap = <span class="A_page-authoremail">|</span>
		field = author_email
	}
	
	authorPages =< A.h.RelatedPages
	authorPages {
		wrap = <div class="A_page-authorpages">|</div>
		special.value.field = tx_artless_authorpages
		stdWrap.fieldRequired = tx_artless_authorpages
	}
	
	categories =< A.h.RelatedPages
	categories {
		wrap = <div class="A_page-categories">|</div>
		special.value.field = tx_artless_categories
		stdWrap.fieldRequired = tx_artless_categories
	}
	
	relatedPages =< A.h.RelatedPages
	relatedPages {
		wrap = <div class="A_page-relatedpages">|</div>
		special.value.field = tx_artless_relatedpages
		stdWrap.fieldRequired = tx_artless_relatedpages
	}
	
	# special properties
	
	authorMailto =< A.m.Page.author
	authorMailto {
		wrap = <span class="A_page-authormailto">|</span>
		typolink {
			parameter.field = author_email
			ATagParams.cObject = TEXT
			ATagParams.cObject {
				field = author
				wrap = title="|"
			}
		}
	}
	
	datePeriod = COA
	datePeriod {
		wrap = <div class="A_pagedateperiod">|</div>
		100 =< A.model.Page.dateStart
		200 =< A.model.Page.dateEnd
		200 {
			noTrimWrap = | - ||
			# hide this for "one day periods"
		}
		fieldRequired = tx_artless_startdate
	}
	
}