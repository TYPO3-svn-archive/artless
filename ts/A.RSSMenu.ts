A.RSSMenu = HMENU
A.RSSMenu {
	
	special = directory
	special.value = {$A.rssStoragePid}
	
	1 = TMENU
	1 {
		
		NO = 1
		NO {
			
			doNotShowLink = 1
			
			before {
				typolink {
					parameter.data = field:uid
					returnLast = url
				}
				wrap = <link rel="alternate" type="application/rss+xml" title="{field:title}" href="|"/>
				insertData = 1
			}
			
		}
		
	}

}