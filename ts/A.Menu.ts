A.Menu = HMENU
A.Menu {

	1 = TMENU
	1 {
		
		noBlur = 1
		wrap = <ul class="A_menu">|</ul>
		
		NO = 1
		NO {
			# ATagBeforeWrap = 1
			wrapItemAndSub = <li class="A_first">|</li>|*|<li>|</li>|*|<li class="A_last">|</li>
			# linkWrap = <span>|</span>
			ATagTitle.field = description
			# stdWrap.htmlSpecialChars = 1
		}
		
		IFSUB < .NO
		IFSUB {
			ATagParams = class="A_ifsub"
		}
		
		CUR < .NO
		CUR {
			ATagParams = class="A_cur"
		}
		
		CURIFSUB < .NO
		CURIFSUB {
			ATagParams = class="A_curifsub"
		}
		
		ACT < .NO
		ACT {
			ATagParams = class="A_act"
		}
		
		ACTIFSUB < .NO
		ACTIFSUB {
			ATagParams = class="A_actifsub"
		}
		
	}

}