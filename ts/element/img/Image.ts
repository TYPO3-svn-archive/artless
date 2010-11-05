A.element.img.Image = IMAGE
A.element.img.Image {
	
	wrap = <p class="A_image">|</p>
	
	file {
		import = uploads/media/
		import.current = 1
		# import {
			# field = media
			# listNum = 0
		# }
	}
	
	stdWrap.append = TEXT
	stdWrap.append {
		field = tx_artless_mediacaptions
		required = 1
		parseFunc =< lib.parseFunc
		br = 1
		wrap = <p>|</p>
		split.token.char = 10
		# split.token.if.isPositive = {$styles.content.imgtext.imageTextSplit} + {$styles.content.imgtext.captionSplit}
		split.returnKey.data = register:imageCounter
	}
	
}