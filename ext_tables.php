<?php

if (!defined ('TYPO3_MODE')) {
	die ('Access denied.');
}

# var_dump($TCA['pages']['columns']);

$tempColumns = array(
	'crdate' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.crdate',
		'config' => array (
			'type'     => 'input',
			'size'     => '13',
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
			'size'     => '13',
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
			'size'     => '13',
			'max'      => '20',
			'eval'     => 'datetime',
			'checkbox' => '0',
			'default'  => '0'
		)
	),
	'tx_artless_place' => array (
		'exclude' => 1,        
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_place',
		'config' => array (
			'type' => 'input',    
			'size' => '30',
        )
    ),
	'tx_artless_enablecomments' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_enablecomments',
		'config' => array(
			'type' => 'check',
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
	'tx_artless_relatives' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_relatives',
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
	'tx_artless_owners' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_owners',
		'config' => array(
			'type' => 'group',
			'internal_type' => 'db',
			'allowed' => 'pages,fe_users',
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
	'tx_artless_participants' => array(
		'exclude' => 0,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_participants',
		'config' => array(
			'type' => 'group',
			'internal_type' => 'db',
			'allowed' => 'pages,fe_users',
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
	'tx_artless_price' => array(
		'exclude' => 1,
		'label' => 'LLL:EXT:artless/locallang_db.xml:pages.tx_artless_price',
		'config' => array(
			'type' => 'input',
			'size' => '13',
			'eval' => 'trim,double2'
        )
    )
);

t3lib_div::loadTCA('pages');
t3lib_extMgm::addTCAcolumns('pages', $tempColumns, 1);

// enable RTE for abstract by copying the configuration of tt_content's bodytext
$TCA['pages']['columns']['abstract']['config'] = $TCA['tt_content']['columns']['bodytext']['config'];

// set current time as default value of lastUpdated
$TCA['pages']['columns']['lastUpdated']['config']['default'] = time();

// $TCA['pages']['columns']['media']['config']['size'] = 10;
// $TCA['pages']['columns']['media']['config']['maxitems'] = 100;


# var_dump($TCA['pages']['palettes']);

$TCA['pages']['palettes'] = t3lib_div::array_merge(
	$TCA['pages']['palettes'],
	array(
		'time' => array(
			'showitem' => 'tx_artless_startdate, tx_artless_enddate',
			'canNotCollapse' => 1
		),
		'place' => array(
			'showitem' => 'tx_artless_place',
			'canNotCollapse' => 1
		)
	)
);


# var_dump($TCA['pages']['types'][t3lib_pageSelect::DOKTYPE_DEFAULT]['showitem']);

# t3lib_extMgm::addToAllTCAtypes('pages', 'crdate', '', 'before:abstract');

// replace the abstract palette with an RTE (2011-02-17: RTE seems not to work within palettes!)
foreach ($TCA['pages']['types'] as $pageType => &$settings) {
	// if (in_array($pageType, array('3', '4')))
	tx_artless_tcatools::modifyShowItemByPaletteKey(
		$settings['showitem'], 
		'abstract', 
		array(
			'field' => 'abstract',
			// 'label' => 'LLL:EXT:cms/locallang_tca.xml:pages.palettes.abstract',
			'palette' => '',
			'special' => 'richtext:rte_transform[flag=rte_enabled|mode=ts_css]'
		)
	);
}

t3lib_extMgm::addToAllTCAtypes(
	'pages',
	'crdate,--palette--;LLL:EXT:artless/locallang.xml:A.labels.timePeriod;time,--palette--;LLL:EXT:artless/locallang.xml:A.labels.place;place',
	'1,4,7,3',
	'before:description'
);
t3lib_extMgm::addToAllTCAtypes(
	'pages',
	'tx_artless_enablecomments',
	'1',
	'before:alias'
);
t3lib_extMgm::addToAllTCAtypes(
	'pages',
	'--div--;Relations,tx_artless_categories,tx_artless_relatives,tx_artless_owners,tx_artless_participants'
);
t3lib_extMgm::addToAllTCAtypes(
	'pages',
	'--div--;Product,tx_artless_price'
);


t3lib_extMgm::addStaticFile($_EXTKEY,'static/artless_typoscript_library/', 'Artless TypoScript Library');
t3lib_extMgm::addStaticFile($_EXTKEY,'static/colorbox/', 'ColorBox');

?>