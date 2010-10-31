A.model.Page {
	
	title = TEXT
	title {
		field = title
		wrap = <h1>|</h1>
	}
	
	subtitle = TEXT
	subtitle {
		field = subtitle
		wrap = <h2>|</h2>
	}
	
	thumbnail =< A.element.img.Thumbnail
	
	requiredThumbnail =< A.element.img.RequiredThumbnail
	
	abstract = TEXT
	abstract {
		field = abstract
		required = 1
		# crop = 200 | ... | 1
		parseFunc =< lib.parseFunc_RTE
	}
	
	dateCreation =< A.element.span.Date
	dateCreation {
		field = crdate
	}
	
	dateStart =< A.element.span.Date
	dateStart {
		field = tx_artlesspages_startdate
	}
	
	dateEnd =< A.element.span.Date
	dateEnd {
		field = tx_artlesspages_enddate
	}
	
	datePeriod = COA
	datePeriod {
		wrap = <p class="A_dateperiod">|</p>
		100 =< A.model.Page.dateStart
		200 =< A.model.Page.dateEnd
		200 {
			noTrimWrap = | – ||
			# hide this for "one day periods"
		}
	}
	
	author = TEXT
	author {
		field = author
	}
	
	authorLinked < .author
	authorLinked {
		typolink {
			parameter.field = author_email
			ATagParams.cObject = TEXT
			ATagParams.cObject {
				field = author
				wrap = title="|"
			}
		}
	}
	
	authors =< A.element.span.RelatedPages
	authors {
		stdWrap.outerWrap = <p class="A_authors">|</p>
		special.value.field = tx_artlesspages_authors
		stdWrap.fieldRequired = tx_artlesspages_authors
		stdWrap.prepend = TEXT
		stdWrap.prepend {
			data = LLL:EXT:artless_pages/locallang_db.xml:pages.tx_artlesspages_authors
			wrap = <span class="A_prefix">|</span>
		}
	}
	
	categories =< A.element.span.RelatedPages
	categories {
		wrap = <p class="A_categories">|</p>
		special.value.field = tx_artlesspages_categories
		stdWrap.fieldRequired = tx_artlesspages_categories
	}
	
	links =< A.element.span.RelatedPages
	links {
		wrap = <p class="A_links">|</p>
		special.value.field = tx_artlesspages_links
		stdWrap.fieldRequired = tx_artlesspages_links
	}
	
	authors =< A.element.ul.RelatedPages
	authors {
		special.value.field = tx_artlesspages_authors
		stdWrap.fieldRequired = tx_artlesspages_authors
	}
	
	categories =< A.element.ul.RelatedPages
	categories {
		special.value.field = tx_artlesspages_categories
		stdWrap.fieldRequired = tx_artlesspages_categories
	}
	
	links =< A.element.ul.RelatedPages
	links {
		special.value.field = tx_artlesspages_links
		stdWrap.fieldRequired = tx_artlesspages_links
	}
	
}