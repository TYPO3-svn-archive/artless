A.element.div.Gallery = TEXT
A.element.div.Gallery {

	wrap = <div class="A_gallery scrollable"><div class="items">|</div><a class="prev browse left">&lt;</a><a class="next browse right">&gt;</a></div>
	
	field = media
	
	split {
		
		token = ,
		cObjNum = 1
		
		# 1.cObject =< A.element.img.Thumbnail
		
		1 {
			
			wrap = <div>|</div>
			
			100 = LOAD_REGISTER
			100 {
				counter {
					cObject = TEXT
					cObject {
						data = register:counter
						wrap = |+1
					}
					prioriCalc = intval
				}
			}
			
			200 =< A.element.img.Thumbnail
			200 {
				file.import.current = 1
				params.cObject = TEXT
				params.cObject {
					data = register:counter
					wrap = rel="#overlay-|"
				}
			}
			
			300 =< A.element.img.Image
			300 {
				stdWrap.dataWrap = <div id="overlay-{register:counter}" class="overlay">|</div>
				file.import.current = 1
			}
			
		}
		
	}
	
}