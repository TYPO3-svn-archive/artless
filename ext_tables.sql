#
# Table structure for table 'pages'
#
CREATE TABLE pages (
	tx_artless_startdate int(11) DEFAULT '0' NOT NULL,
	tx_artless_enddate int(11) DEFAULT '0' NOT NULL,
	tx_artless_authorpages text,
	tx_artless_authorfeusers text,
	tx_artless_categories text,
	tx_artless_links text,
	# tx_artless_place text,
	# tx_artless_enable_comments tinyint(3) DEFAULT '0' NOT NULL,
	# tx_artless_price int(11) DEFAULT '0' NOT NULL,
	# tx_artless_quantity int(11) DEFAULT '0' NOT NULL,
	# tx_artless_orders text,
	# tx_artless_place tinytext
);