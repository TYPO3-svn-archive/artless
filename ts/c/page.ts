page = PAGE
page {

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
		100 =< A.res.BrowserTitle
		200 =< A.res.RSSMenu
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
	}
	
	### custom body tag: alias or uid is value of id-tag ###
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject {
		field = alias // uid
		wrap = <body id="A_page-|">
	}
	
	100 =< A.res.LayoutNormal
	
}


[globalVar = TSFE:page|layout = 1]

page.100 =< A.res.Layout1

[globalVar = TSFE:page|layout = 2]

page.100 =< A.res.Layout2

[globalVar = TSFE:page|layout = 3]

page.100 =< A.res.Layout3

[global]