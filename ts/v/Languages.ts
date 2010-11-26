A.v.Languages = HMENU
A.v.Languages {
	
	wrap = <div class="A_languages">|</div>
	
	special = language
	special.value = {$A.language.uids}
	special.normalWhenNoLanguage = 0
	
	1 = TMENU
	1 {
		
		noBlur = 1
		wrap = <ul class="A_menu">|</ul>
		
		NO = 1
		NO {
			linkWrap = <li>|</li>
			# this is shown instead of the page title
			stdWrap.override = {$A.language.labels}
			doNotLinkIt = 1
			stdWrap.typolink {
				parameter.data = page:uid
				additionalParams = {$A.language.params}
				addQueryString = 1
				addQueryString.exclude = L,id,cHash,no_cache
				addQueryString.method = GET
				useCacheHash = 1
				no_cache = 0
			}
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