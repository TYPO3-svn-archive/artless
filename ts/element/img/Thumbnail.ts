A.element.img.Thumbnail = IMAGE
A.element.img.Thumbnail {

	file {
		import = uploads/media/
		import {
			field = media
			listNum = 0
		}
		width = 160c
		height = 90c
	}
	
	stdWrap {
		typolink {
			parameter.field = uid
		}
	}
	
}