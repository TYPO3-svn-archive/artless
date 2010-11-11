A.h.MenuLanguage = HMENU
A.h.MenuLanguage {
	
	special = language
	special.value = {$A.language.uids}
	special.normalWhenNoLanguage = 0
	
	1 = TMENU
	1 {
		
		noBlur = 1
		wrap = <ul class="A_menulanguage A_menu">|</ul>
		
		NO = 1
		NO {
			linkWrap = <li>|</li>
			# this is shown instead of the page title
			stdWrap.override = {$A.language.labels}
			doNotLinkIt = 1
			stdWrap.typolink.parameter.data = page:uid
			stdWrap.typolink.additionalParams = {$A.language.params}
			stdWrap.typolink.addQueryString = 1
			stdWrap.typolink.addQueryString.exclude = L,id,cHash,no_cache
			stdWrap.typolink.addQueryString.method = GET
			stdWrap.typolink.useCacheHash = 1
			stdWrap.typolink.no_cache = 0
		}
		
		ACT < .NO
		ACT {
			linkWrap = <li class="A_act"><b>|</b></li>
			stdWrap.typolink >
		}
		
		# NO & no translatoin is available
		USERDEF1 < .NO
		
		# ACT & no translatoin is available
		USERDEF2 < .ACT
		
	}
	
}