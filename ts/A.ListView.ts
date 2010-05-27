A.ListView = COA
A.ListView {
	
	wrap = <div class="A_listview">|</div>
	
	100 = CONTENT
	100 {
		
		table = pages
		select {
			pidInList = {$A.itemsStoragePids}
			orderBy = title asc 
			max = {$A.itemsPerPage}
			begin.data = GPvar:tx_artless|page
			# where = 
		}
		
		renderObj = COA
		renderObj {
		
			wrap = <div class="A_listview-item">|</div>
			
			100 = TEXT
			100 {
				field = title
				wrap = <h3>|</h3>
				typolink {
					parameter.field = uid
				}
			}
		
		}
		
	}
	
	300 =< A.Pager
	
}