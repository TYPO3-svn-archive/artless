A.h.Menu = HMENU
A.h.Menu {

	1 = TMENU
	1 {
		
		noBlur = 1
		wrap = <ul class="A_menu">|</ul>
		
		NO = 1
		NO {
			allWrap = <li class="A_first {field:alias}">|</li>|*|<li class="{field:alias}">|</li>|*|<li class="A_last {field:alias}">|</li>
			allWrap.insertData = 1
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