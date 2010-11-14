A.h.Image = IMAGE
A.h.Image {
	
	wrap = <div class="A_image">|</div>
	
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