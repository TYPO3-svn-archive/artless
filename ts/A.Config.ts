A.Config {
	
	noPageTitle = 2
	
	disablePrefixComment = 1
	# disableImgBorderAttr = 1

	doctype = xhtml_trans
	xhtml_cleaning = all
	xmlprologue = none

	### spam protection ###
	spamProtectEmailAddresses = 2
	spamProtectEmailAddresses_atSubst = (at)
	spamProtectEmailAddresses_lastDotSubst = (dot)

	### RealURL ###
	simulateStaticDocuments = 0
	baseURL = http://set.your.baseurl/
	tx_realurl_enable = 1
	# ??? redirectOldLinksToNew = 1
	
	### languages ###
	linkVars = L
	uniqueLinkVars = 1
	
	### config for L=0 (English) ###
	htmlTag_langKey = en
	language = en
	locale_all = en_EN.UTF-8
	sys_language_uid = 0
	# sys_language_mode = content_fallback:1,0
	# sys_language_overlay = 1
	
}

# plugin.meta.language = en


[globalVar = GP:L = 1]

A.Config {
	
    htmlTag_langKey = de
    language = de
    locale_all = de_DE.UTF-8
    sys_language_uid = 1
	sys_language_mode = content_fallback;1,0
	sys_language_overlay = 1
	
}
# plugin.meta.language = de

[end]