A.m.Site {
	
	browserTitle = COA
	browserTitle {
		wrap = <title>|</title>
		100 = TEXT
		100 {
			field = title
		}
		200 = TEXT
		200 {
			value < sitetitle
			noTrimWrap = | - ||
		}
	}
	
	title = TEXT
	title {
		wrap = <h1 class="A_site-title">|</h1>
		value < sitetitle
		typolink.parameter = {$A.uids.home}
	}
	
	logo = IMAGE
	logo {
		wrap = <div class="A_site-logo">|</div>
		file {
			import.cObject = TEXT
			import.cObject {
				value < resources
				wrap = uploads/tf/|
				listNum = 0
			}
		}
	}
	
	menuMain =< A.h.Menu
	menuMain {
		wrap = <div class="A_site-menumain">|</div>
	}
	
	menuFooter =< A.h.Menu
	menuFooter {
		wrap = <div class="A_site-menufooter">|</div>
		special = directory
		special.value = {$A.pids.footer}
	}
	
	# special properties
	
	header = COA
	header {
		wrap = <div class="A_site-header">|</div>
		100 =< A.m.Site.title
		150 =< A.m.Site.logo
		200 =< A.m.Site.menuMain
		300 =< A.h.MenuLanguage
	}
	
	footer = COA
	footer {
		wrap = <div class="A_site-footer">|</div>
		100 =< A.m.Site.menuFooter
	}
	
}