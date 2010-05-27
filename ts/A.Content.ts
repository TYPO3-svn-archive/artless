A.Content = COA
A.Content {

	wrap = <div class="A_content">|</div>
	
	100 =< A.PageTitle
	
	200 < styles.content.getLeft
	200.wrap = <div class="A_content-left">|</div>
	
	300 < styles.content.get
	300.wrap = <div class="A_content-normal">|</div>
	
	400 < styles.content.getRight
	400.wrap = <div class="A_content-right">|</div>
	
	500 < styles.content.getBorder
	500.wrap = <div class="A_content-border">|</div>
		
}