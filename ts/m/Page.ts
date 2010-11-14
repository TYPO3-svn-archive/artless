A.m.Page {

	header = COA
	header {
		wrap = <div class="A_pageheader">|</div>
		100 =< A.m.Page.title
		200 =< A.m.Page.subtitle
		300 =< A.m.Page.thumbnail
		400 =< A.m.Page.abstract
	}
	
	title = TEXT
	title {
		wrap = <h1 class="A_pagetitle">|</h1>
		field = title
	}
	
	subtitle = TEXT
	subtitle {
		wrap = <h2 class="A_pagesubtitle">|</h2>
		field = subtitle
		required = 1
	}
	
	thumbnail =< A.h.Thumbnail
	
	thumbnailRequired =< A.h.ThumbnailRequired
	
	abstract = TEXT
	abstract {
		wrap = <div class="A_pageabstract">|</div>
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
	
	authorPages =< A.h.RelatedPages
	authorPages {
		stdWrap.wrap = <div class="A_pageauthorpages">|</div>
		special.value.field = tx_artless_authorpages
		
		stdWrap.fieldRequired = tx_artless_authorpages
		stdWrap.prepend = TEXT
		stdWrap.prepend {
			data = LLL:EXT:artless_pages/locallang_db.xml:pages.tx_artless_authors
			wrap = <span class="A_prefix">|</span>
		}
	}
	
	categories =< A.h.RelatedPages
	categories {
		wrap = <div class="A_pagecategories">|</div>
		special.value.field = tx_artless_categories
		stdWrap.fieldRequired = tx_artless_categories
	}
	
	links =< A.h.RelatedPages
	links {
		wrap = <div class="A_pagelinks">|</div>
		special.value.field = tx_artless_links
		stdWrap.fieldRequired = tx_artless_links
	}
		
	contentNormal < styles.content.get
	contentNormal {
		stdWrap {
			wrap = <div class="A_contentnormal">|</div>
			required = 1
		}
	}
	
	contentLeft < styles.content.getLeft
	contentLeft {
		stdWrap {
			wrap = <div class="A_contentleft">|</div>
			required = 1
		}
	}
	
	contentRight < styles.content.getRight
	contentRight {
		stdWrap {
			wrap = <div class="A_contentright">|</div>
			required = 1
		}
	}
	
	contentBorder < styles.content.getBorder
	contentBorder {
		stdWrap {
			wrap = <div class="A_contentborder">|</div>
			required = 1
		}
	}
	
	content = COA
	content {
		100 =< A.m.Page.contentLeft
		200 =< A.m.Page.contentNormal
		300 =< A.m.Page.contentRight
		400 =< A.m.Page.contentBorder
	}
	
}