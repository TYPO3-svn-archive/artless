RTE.classesAnchor {
	internalLink {
		class = internal-link
		type = page
		image >
		altText >
		titleText >
	}
	internalLinkInNewWindow {
		class = internal-link-new-window
		type = page
		image >
		altText >
		titleText >
	}
	externalLink {
		class = external-link
		type = url
		image >
		altText >
		titleText >
	}
	externalLinkInNewWindow {
		class = external-link-new-window
		type = url
		image >
		altText >
		titleText >
	}
	download {
		class = download
		type = file
		image >
		altText >
		titleText >
	}
	mail {
		class = mail
		type = mail
		image >
		altText >
		titleText >
	}
}

RTE.default.proc.allowedClasses := addToList(colorbox)
RTE.default.classesLinks := addToList(colorbox)
RTE.default.classesAnchor := addToList(colorbox)
RTE.classesAnchor := addToList(colorbox)

RTE.classesAnchor {
	colorbox {
		class = colorbox
		type = page
	}
}

RTE.default.proc.allowedClasses := addToList(colorbox-iframe)
RTE.default.classesLinks := addToList(colorbox-iframe)
RTE.default.classesAnchor := addToList(colorbox-iframe)
RTE.classesAnchor := addToList(colorbox-iframe)

RTE.classesAnchor {
	colorbox-iframe {
		class = colorbox-iframe
		type = url
	}
}

RTE.default {
	classesAnchor.default {
		page >
		url >
		file >
		mail >
	}
}