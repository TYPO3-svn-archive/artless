<?php

if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

$tempColumns = array(
	'crdate' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.crdate',
		'label' => 'Creation date:',
		'config' => array (
			'type'     => 'input',
			'size'     => '12',
			'max'      => '20',
			'eval'     => 'datetime',
			'checkbox' => '0',
			'default'  => time()
		)
	),
	'tx_artless_startdate' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_startdate',
		'config' => array (
			'type'     => 'input',
			'size'     => '12',
			'max'      => '20',
			'eval'     => 'datetime',
			'checkbox' => '0',
			'default'  => '0'
		)
	),
	'tx_artless_enddate' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_enddate',
		'config' => array(
			'type'     => 'input',
			'size'     => '12',
			'max'      => '20',
			'eval'     => 'datetime',
			'checkbox' => '0',
			'default'  => '0'
		)
	),
	'tx_artless_authorpages' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_authorpages',
		'config' => array(
			'type' => 'group',
			'internal_type' => 'db',
			'allowed' => 'pages',
			'size' => 3,
			'minitems' => 0,
			'maxitems' => 100,
			'wizards' => array(
				'suggest' => array(
					'type' => 'suggest',
				),
			),
		)
	),
	'tx_artless_authorfeusers' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_authorfeusers',
		'config' => array (
			'type' => 'group',
			'internal_type' => 'db',
			'allowed' => 'fe_users',
			'size' => 3,
			'minitems' => 0,
			'maxitems' => 100,
			'wizards' => array(
				'suggest' => array(
					'type' => 'suggest',
				),
			),
		)
	),
	'tx_artless_categories' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_categories',
		'config' => array(
			'type' => 'group',
			'internal_type' => 'db',
			'allowed' => 'pages',
			'size' => 3,	
			'minitems' => 0,
			'maxitems' => 100,
			'wizards' => array(
				'suggest' => array(
					'type' => 'suggest',
				),
			),
		)
	),
	'tx_artless_relatedpages' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_relatedpages',
		'config' => array(
			'type' => 'group',
			'internal_type' => 'db',
			'allowed' => 'pages',
			'size' => 3,	
			'minitems' => 0,
			'maxitems' => 100,
			'wizards' => array(
				'suggest' => array(
					'type' => 'suggest',
				),
			),
		)
	),
	'tx_artless_mediacaptions' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_mediacaptions',
		'config' => array(
			'type' => 'text',
			'cols' => '40',
			'rows' => '3',
		)
	),
	'tx_artless_enablecomments' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_enablecomments',
		'config' => array(
			'type' => 'check',
		)
	),
);

t3lib_div::loadTCA('pages');
t3lib_extMgm::addTCAcolumns('pages', $tempColumns, 1);
t3lib_extMgm::addToAllTCAtypes("pages","--div--;Artless, tx_artless_startdate,tx_artless_enddate,tx_artless_authorpages,tx_artless_authorfeusers,tx_artless_categories,tx_artless_relatedpages,tx_artless_mediacaptions,tx_artless_enablecomments");


$TCA['pages']['columns']['media']['config']['size'] = 10;
$TCA['pages']['columns']['media']['config']['maxitems'] = 100;


/* t3lib_div::array_merge($TCA['pages']['palettes'],array(
	'1' => array('showitem' => 'starttime, endtime, extendToSubpages'),
	'2' => array('showitem' => 'layout, lastUpdated, newUntil, no_search'),
	'3' => array('showitem' => 'alias, target, no_cache, cache_timeout'),
	'5' => array('showitem' => 'author, author_email', 'canNotCollapse' => 1)
)); */

/* $TCA['pages']['palettes']['2']['showitem'] = str_replace(
	'lastUpdated,',
	'lastUpdated,',
	$TCA['pages']['palettes']['2']['showitem']
); */

/*
$TCA['pages']['palettes']['5'] = array('showitem' => 'author_email, --linebreak--, tx_artless_authorpages, --linebreak--, tx_artless_authorfeusers');

$TCA['pages']['palettes'] = t3lib_div::array_merge($TCA['pages']['palettes'], array(
	'6' => array('showitem' => 'tx_artless_startdate, tx_artless_enddate', 'canNotCollapse' => 1),
));
*/

/*
$TCA['pages']['types']['1']['showitem'] = str_replace(
	'--palette--;LLL:EXT:lang/locallang_general.xml:LGL.author;5;;3-3-3,',
	'crdate,
	author;;5,',
	$TCA['pages']['types']['1']['showitem']
);
*/

/*
$TCA['pages']['types']['1']['showitem'] = str_replace(
	'abstract,',
	'abstract;;;richtext[]:rte_transform[mode=ts],
	--palette--;LLL:EXT:artless/locallang.xml:A.labels.timePeriod;6;;3-3-3,
	tx_artless_categories,
	tx_artless_relatedpages,
	tx_artless_enablecomments,',
	$TCA['pages']['types']['1']['showitem']
);
*/

/*
foreach ($TCA['pages']['types'] as $pageType => &$settings) {
	
	if (in_array($pageType, array('3', '4'))) {
		$settings['showitem'] = str_replace(
			'--div--;LLL:EXT:cms/locallang_tca.xml:pages.tabs.files,',
			'--div--;LLL:EXT:cms/locallang_tca.xml:pages.tabs.metadata,
				crdate,
				author;;5,
				abstract;;;richtext[]:rte_transform[mode=ts],
				--palette--;LLL:EXT:artless/locallang.xml:A.labels.timePeriod;6;;3-3-3,
				tx_artless_categories,
				tx_artless_relatedpages,
				tx_artless_enablecomments,
				keywords, description,
			--div--;LLL:EXT:cms/locallang_tca.xml:pages.tabs.files,',
			$settings['showitem']
		);
	}
	
	$settings['showitem'] = str_replace(
		'media,',
		'media, tx_artless_mediacaptions,',
		$settings['showitem']
	);
	
}
*/



tx_artless_tcatools::modifyShowItemByPaletteKey(
	$TCA['pages']['types'][t3lib_pageSelect::DOKTYPE_DEFAULT]['showitem'], 
	'abstract', 
	array(
		'field' => 'abstract',
		//'label' => 'LLL:EXT:cms/locallang_tca.xml:pages.palettes.abstract',
		'palette' => '',
		'special' => 'richtext:rte_transform[flag=rte_enabled|mode=ts_css]'
	)
);

/*
tx_artless_tcatools::modifyShowItemByField(
	&$TCA['pages']['palettes']['abstract']['showitem'], 
	'abstract', 
	array(
		'special' => 'richtext:rte_transform[flag=rte_enabled|mode=ts_css]',
	)
);
*/


t3lib_extMgm::addStaticFile($_EXTKEY,'static/artless_typoscript_library/', 'Artless TypoScript Library');

?>