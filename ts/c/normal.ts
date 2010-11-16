A.c.normal = PAGE
A.c.normal {
	
	shortcutIcon = favicon.ico
	
	config {
		
		doctype = xhtml_trans
		xhtml_cleaning = all
		xmlprologue = none
		
		### disable standard title ###
		noPageTitle = 2
		
		### spam protection ###
		spamProtectEmailAddresses = 2
		spamProtectEmailAddresses_atSubst = (at)
		spamProtectEmailAddresses_lastDotSubst = (dot)
		
		### RealURL ###
		simulateStaticDocuments = 0
		baseURL = {$A.baseURL}
		tx_realurl_enable = 1
		# ??? redirectOldLinksToNew = 1
		
	}
	
	### custom title and RSS menu ###
	headerData {
		100 =< A.m.Site.browserTitle
		200 =< A.h.RSSMenu
	}
	
	includeCSS {		
		screen = fileadmin/css/screen.css
		screen.media = screen, projection
		print = fileadmin/css/print.css
		print.media = print
		ie = fileadmin/css/ie.css
		ie.media = screen, projection
		ie.allWrap = <!--[if IE]>|<![endif]-->
	}
	
	includeJS {
		jQuery = EXT:artless/js/jquery-1.4.2.min.js
		textOverflow = EXT:artless/js/jquery.text-overflow.min.js
	}
	
	# custom body tag
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject {
		value = <body id="A_page{page:uid}">
		insertData = 1
	}
	
	wrap = <div class="A_container A_normal">|</div>
	
	100 =< A.m.Site.header
	200 =< A.h.Line
	300 =< A.v.PageSingleNormal
	400 =< A.h.Line
	500 =< A.m.Site.footer
	
}