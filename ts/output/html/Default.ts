A.output.html.Default = PAGE
A.output.html.Default {

	### favicon ###
	shortcutIcon = favicon.ico
	
	### config ###
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
		100 =< A.element.title.BrowserTitle
		200 =< A.element.link.RSSMenu
	}
	
	### CSS ###
	includeCSS {		
		screen = fileadmin/css/screen.css
		screen.media = screen, projection
		print = fileadmin/css/print.css
		print.media = print
		ie = fileadmin/css/ie.css
		ie.media = screen, projection
		ie.allWrap = <!--[if IE]>|<![endif]-->
	}
	
	### JavaScript ###
	includeJS {
		jQuery = EXT:artless/js/jquery-1.4.2.min.js
		textOverflow = EXT:artless/js/jquery.text-overflow.min.js
		script = fileadmin/js/script.js
	}
	
	### custom body tag: alias or uid is value of id-tag ###
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject {
		field = alias // uid
		wrap = <body id="A_page-|">
	}
	
	100 =< A.layout.div.Default
	
}