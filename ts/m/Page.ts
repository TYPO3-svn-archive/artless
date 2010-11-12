A.m.Page {
	
	title = TEXT
	title {
		field = title
		wrap = <h1 class="A_title">|</h1>
	}
	
	subtitle = TEXT
	subtitle {
		field = subtitle
		wrap = <h2 class="A_subtitle">|</h2>
		required = 1
	}
	
	thumbnail =< A.h.Thumbnail
	
	thumbnailRequired =< A.h.ThumbnailRequired
	
	abstract = TEXT
	abstract {
		field = abstract
		required = 1
		# crop = 200 | ... | 1
		parseFunc =< lib.parseFunc_RTE
		wrap = <div class="A_abstract">|</div>
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
	
	datePeriod = COA
	datePeriod {
		wrap = <p class="A_dateperiod">|</p>
		100 =< A.model.Page.dateStart
		200 =< A.model.Page.dateEnd
		200 {
			noTrimWrap = | – ||
			# hide this for "one day periods"
		}
		fieldRequired = tx_artless_startdate
	}
	
	author = TEXT
	author {
		field = author
	}
	
	authorEmail = TEXT
	authorEmail {
		field = author_email
	}
	
	authorMailto < .author
	authorMailto {
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
		special.value.field = tx_artless_authors
		stdWrap.fieldRequired = tx_artless_authors
		stdWrap.prepend = TEXT
		stdWrap.prepend {
			data = LLL:EXT:artless_pages/locallang_db.xml:pages.tx_artless_authors
			wrap = <span class="A_prefix">|</span>
		}
	}
	
	categories =< A.element.span.RelatedPages
	categories {
		wrap = <p class="A_categories">|</p>
		special.value.field = tx_artless_categories
		stdWrap.fieldRequired = tx_artless_categories
	}
	
	links =< A.element.span.RelatedPages
	links {
		wrap = <p class="A_links">|</p>
		special.value.field = tx_artless_links
		stdWrap.fieldRequired = tx_artless_links
	}
	
	authors =< A.element.ul.RelatedPages
	authors {
		special.value.field = tx_artless_authors
		stdWrap.fieldRequired = tx_artless_authors
	}
	
	categories =< A.element.ul.RelatedPages
	categories {
		special.value.field = tx_artless_categories
		stdWrap.fieldRequired = tx_artless_categories
	}
	
	links =< A.element.ul.RelatedPages
	links {
		special.value.field = tx_artless_links
		stdWrap.fieldRequired = tx_artless_links
	}
	
	contentNormal < styles.content.get
	contentNormal {
		wrap = <div class="A_contentnormal">|</div>
		required = 1
	}
	
	contentLeft < styles.content.getLeft
	contentLeft {
		wrap = <div class="A_contentleft">|</div>
		required = 1
	}
	
	contentRight < styles.content.getRight
	contentRight.wrap = <div class="A_contentright">|</div>
	
	contentBorder < styles.content.getBorder
	contentBorder.wrap = <div class="A_contentborder">|</div>
	
}