A.output.html.Flash < A.output.html.Default
A.output.html.Flash {
	
	includeJS {
		SWFObject = EXT:artless/js/swfobject.js
	}
	
	jsInline {
		100 = TEXT
		100.value = var flashvars = {};
		200 = TEXT
		200 {
			value < config.language
			wrap = flashvars.languageId = "|";
		}
		300 = TEXT
		300.value = flashvars.fullscreenText = "Fullscreen";
		400 = TEXT
		400.value = flashvars.backText = "Back";
		500 = TEXT
		500.value = var params = {};
		600 = TEXT
		600.value = params.menu = "false";
		700 = TEXT
		700.value = params.allowfullscreen = "true";
		800 = TEXT
		800.value = params.scale = "noscale";
		900 = TEXT
		900.value = var attributes = {};
		1000 = TEXT
		1000.value = attributes.id = "flash";
		1100 = TEXT
		1100.value = swfobject.embedSWF("/fileadmin/swf/fallingtimes/bin-release/FallingTimes.swf", "no-flash", "100%", "100%", "10.0.0", "/fileadmin/swf/fallingtimes/bin-release/playerProductInstall.swf", flashvars, params, attributes);
	}
	
	100 =< A.layout.div.Flash
	
}