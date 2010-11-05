A.element.img.Thumbnail = IMAGE
A.element.img.Thumbnail {
	
	
	
	file {
		import = uploads/media/
		import {
			field = media
			listNum = 0
		}
	}
	
	stdWrap {
		wrap = <p class="A_thumbnail">|</p>
		typolink < A.lib.typolink.PageLink
		fieldRequired = media
	}
	
}