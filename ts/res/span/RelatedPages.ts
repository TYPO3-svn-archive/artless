A.element.span.RelatedPages = HMENU
A.element.span.RelatedPages {
	
	special = list
	special.value.field = tx_artlesspages_categories
	
	1 = TMENU
	1 {
		
		wrap = <span class="A_relatedpages">|</span>
		
		NO = 1
		NO {
			allWrap = <span>|</span><span class="A_comma">{LLL:EXT:artless_pages/locallang.xml:A.element.span.RelatedPages.comma}</span>|*|<span>|</span><span class="A_comma">{LLL:EXT:artless_pages/locallang.xml:A.element.span.RelatedPages.comma}</span>|*|<span>|</span><span class="A_and">{LLL:EXT:artless_pages/locallang.xml:A.element.span.RelatedPages.and}</span>||<span>|</span>
			allWrap.insertData = 1
		}
		
	}
	
}