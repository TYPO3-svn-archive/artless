A.Site = PAGE
A.Site {

	### favicon ###
	shortcutIcon = favicon.ico
	
	### config ###
	# config =< A.Config
	
	### custom title and RSS menu ###
	headerData {
		100 =< A.Title
		200 =< A.RSSMenu
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
	
	### temporary inline CSS ###
	CSS_inlineStyle (
		.A_act, .A_cur, .A_actifsub, .A_curifsub {
			font-weight: bold;
		}
	)
	
	### JavaScript ###
	includeJS {
		jQuery = fileadmin/js/jquery.js
		script = fileadmin/js/script.js
	}
	
	### custom body tag: alias or uid is value of id-tag ###
	bodyTag >
	bodyTagCObject = TEXT
	bodyTagCObject {
		field = alias // uid
		wrap = <body id="|">
	}
	
	100 =< A.Page
	
}