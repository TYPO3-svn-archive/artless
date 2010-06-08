A.sites.Site = PAGE
A.sites.Site {

	### favicon ###
	shortcutIcon = favicon.ico
	
	### config ###
	config < A.head.Config
	
	### custom title and RSS menu ###
	headerData {
		100 =< A.head.Title
		200 =< A.head.RSSMenu
	}
	
	### CSS ###
	includeCSS =< A.html.link.CSSFiles
	
	### temporary inline CSS ###
	CSS_inlineStyle (
		.A_act, .A_cur, .A_actifsub, .A_curifsub {
			font-weight: bold;
		}
	)
	
	### JavaScript ###
	includeJS {
		jQuery = EXT:artless/js/jquery-1.4.2.min.js
		script = fileadmin/js/script.js
	}
	
	### custom body tag: alias or uid is value of id-tag ###
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject {
		field = alias // uid
		wrap = <body id="A_page-|">
	}
	
	100 =< A.pages.Page
	
}