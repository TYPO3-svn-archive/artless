A.h.Menu = HMENU
A.h.Menu {

	1 = TMENU
	1 {
		
		wrap = <ul class="A_menu">|</ul>
		noBlur = 1
		
		NO = 1
		NO {
			wrapItemAndSub = <li class="A_first">|</li>|*|<li>|</li>|*|<li class="A_last">|</li>
			ATagBeforeWrap = 1
			ATagTitle.field = description
		}
		
		IFSUB < .NO
		IFSUB {
			ATagParams = class="A_ifsub"
		}
		
		CUR < .NO
		CUR {
			linkWrap = <b>|</b>
			ATagParams = class="A_cur"
		}
		
		CURIFSUB < .NO
		CURIFSUB {
			linkWrap = <b>|</b>
			ATagParams = class="A_curifsub"
		}
		
		ACT < .NO
		ACT {
			linkWrap = <b>|</b>
			ATagParams = class="A_act"
		}
		
		ACTIFSUB < .NO
		ACTIFSUB {
			linkWrap = <b>|</b>
			ATagParams = class="A_actifsub"
		}
		
	}

}