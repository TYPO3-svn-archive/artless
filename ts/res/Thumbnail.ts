A.res.Thumbnail = IMAGE
A.res.Thumbnail {
	
	file {
		import = uploads/media/
		import {
			field = media
			listNum = 0
		}
	}
	
	stdWrap {
		wrap = <div class="A_thumbnail">|</div>
		typolink < A.lib.typolink.PageLink
		fieldRequired = media
	}
	
}