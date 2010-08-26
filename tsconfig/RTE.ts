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

RTE.default.proc.allowedClasses := addToList(facebox)
RTE.default.classesLinks := addToList(facebox)
RTE.default.classesAnchor := addToList(facebox)
RTE.classesAnchor := addToList(facebox)

RTE.classesAnchor {
	facebox {
		class = facebox
		type = page
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