A.Pager = COA
A.Pager {
	
	wrap = <div class="A_pager">|</div>
	
	100 = TEXT
	100 {
		
		wrap = <ul class="A_menu">|</ul>
		
		data = register:pages
		
		split {
			
			token = ,
			cObjNum = 100
			
			100 {
				
				100 = TEXT
				100 {
					
					current = 1
					typolink {
						parameter.data = page:uid
						additionalParams {
							current = 1
							wrap = &tx_artlesstslib[page]=|
						}
					}
					wrap = <li>|</li>
					
				}
					
				override.cObject = TEXT
				override.cObject {
					current = 1
					wrap = <li class="A_act">|</li>
				}
				override.if {
					value.current = 1
					equals.data = register:page
				}
				
			}
			
		}
		
	}
	
}