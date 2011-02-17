A.c.normal = PAGE
A.c.normal {
		
	config {
		
		doctype = xhtml_trans
		xhtml_cleaning = all
		xmlprologue = none
		
		# disable standard title
		noPageTitle = 2
		
		# enable spam protection
		spamProtectEmailAddresses = 2
		spamProtectEmailAddresses_atSubst = (at)
		spamProtectEmailAddresses_lastDotSubst = (dot)
		
		# RealURL
		# simulateStaticDocuments = 0
		# baseURL = {$A.baseURL}
		# tx_realurl_enable = 1
		# ??? redirectOldLinksToNew = 1
		
		removeDefaultJS = 1
		removeDefaultCSS = 1
		disablePrefixComment = 1
		disableImgBorderAttr = 1
		
	}
	
	# custom title and RSS menu
	headerData {
		100 =< A.v.BrowserTitle
		# 200 =< A.h.RSSMenu
	}
	
	# include jQuery
	includeJS.jquery = EXT:artless/res/jquery-1.5.min.js
	
	# custom body tag
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject {
		value = <body id="p{page:uid}">
		insertData = 1
	}
	
	100 =< A.v.LayoutNormal
	
}