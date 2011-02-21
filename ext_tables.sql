#
# Table structure for table 'pages'
#
CREATE TABLE pages (
	tx_artless_startdate int(11) DEFAULT '0' NOT NULL,
	tx_artless_enddate int(11) DEFAULT '0' NOT NULL,
	tx_artless_place text,
	tx_artless_enablecomments tinyint(3) DEFAULT '0' NOT NULL,
	tx_artless_categories text,
	tx_artless_relatives text,
	tx_artless_owners text,
	tx_artless_participants text,
	price decimal(19,2) DEFAULT '0.00' NOT NULL
);