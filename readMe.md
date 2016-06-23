File to save change done in some third party modules

1. Comment column gutter width i.e. padding
    _grid-frameword in mixins of bootstrap
      line no 16 & 17



DB schema
1. rest_short_details
    id                          primary key
    rest_short_details_id       int 11 INDEXED
    rest_header_title         var 255
    rest_header_image         var 255
    rest_address              text
    rest_known_for            var 255
    CREATE TABLE `myzomato`.`rest_short_details` ( `rest_short_details_id` INT NULL , `rest_header_title` VARCHAR(255) NOT NULL , `rest_header_image` VARCHAR(255) NOT NULL , `rest_address` TEXT NOT NULL , `rest_known_for` VARCHAR(255) NOT NULL , INDEX (`rest_short_details_id`) , FULLTEXT (`rest_header_title`, `rest_address`, `rest_known_for`) ) ENGINE = InnoDB;

2. rest_cusions
    id                          primary key
    rest_short_details_id       int 11 INDEXED
    cusine                      var 50 

3. rest_rating
    id                          primary key
    rest_short_details_id       int 11 INDEXED
    rating                      int 1 INDEXED

4. rest_pincode
    id                          primary key
    rest_pincode                int 6 INDEXED
    rest_short_details_id       int 11 INDEXED

5. rest_geo_location
    id                          primary key
    lat                  DECIMAL(10, 8) INDEXED
    lng                  DECIMAL(11, 8) INDEXED
    rest_short_details_id     int 11 INDEXED

6. hightlights
    rest_id       int 11 INDEXED
    highlight                   varchar 100

    CREATE TABLE `myzomato`.`rest_hightlights` ( `rest_id` INT NULL , `highlight` VARCHAR(100) NOT NULL , INDEX (`rest_id`) , FULLTEXT (`highlight`) ) ENGINE = InnoDB;
INSERT INTO 
	`myzomato`.`rest_hightlights` (`rest_id`, `highlight`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.heighlights, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as highlight
FROM `sszomaoto`.`restaurents` t CROSS JOIN 
(
	SELECT a.N + b.N * 10 + 1 n
	FROM 
		(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
	   ,(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
		ORDER BY n
) n
WHERE n.n <= 1 + (LENGTH(t.heighlights) - LENGTH(REPLACE(t.heighlights, ',', '')))





7. openclose days
8. openclose timing
9. phonenumbers
    rest_id
    contact varchar 15
    CREATE TABLE `myzomato`.`rest_contact_numbers` ( `rest_id` INT NULL , `contact` VARCHAR(15) NOT NULL , INDEX (`rest_id`) , FULLTEXT (`contact`) ) ENGINE = InnoDB;


10. payment options
    rest_id     int 11
    option varchar 50

    CREATE TABLE `myzomato`.`rest_payment_options` ( `rest_id` INT NULL , `option` VARCHAR(45) NOT NULL , INDEX (`rest_id`) , FULLTEXT (`option`) ) ENGINE = InnoDB;
INSERT INTO 
	`myzomato`.`rest_hightlights` (`rest_id`, `option`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.paymentOptions, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as opt
FROM `sszomaoto`.`restaurents` t CROSS JOIN 
(
	SELECT a.N + b.N * 10 + 1 n
	FROM 
		(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
	   ,(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
		ORDER BY n
) n
WHERE n.n <= 1 + (LENGTH(t.paymentOptions) - LENGTH(REPLACE(t.paymentOptions, ',', '')))


11. seo keyword internal
    rest_id
    keyword varchar 50

    CREATE TABLE `myzomato`.`rest_seo_keyword` ( `rest_id` INT NULL , `keyword` VARCHAR(50) NOT NULL , INDEX (`rest_id`) , FULLTEXT (`keyword`) ) ENGINE = InnoDB;
INSERT INTO 
	`myzomato`.`rest_seo_keyword` (`rest_id`, `keyword`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.seoKeywords, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as opt
FROM `sszomaoto`.`restaurents` t CROSS JOIN 
(
	SELECT a.N + b.N * 10 + 1 n
	FROM 
		(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
	   ,(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
		ORDER BY n
) n
WHERE n.n <= 1 + (LENGTH(t.seoKeywords) - LENGTH(REPLACE(t.seoKeywords, ',', '')))



12. cityzonesubzone photourl menu url internal
    city_id
    zone_id
    subzone_id
    rest_id

    CREATE TABLE `myzomato`.`internal_city_zone_subzone` ( `rest_id` INT NULL , `city_id` INT NOT NULL , `zone_id` INT NOT NULL , `subzone_id` INT NOT NULL , INDEX (`rest_id`) , INDEX (`city_id`) , INDEX (`zone_id`) , INDEX (`subzone_id`) ) ENGINE = InnoDB;
    ALTER TABLE `internal_city_zone_subzone_p_m` ADD `photo_url` VARCHAR(255) NOT NULL AFTER `subzone_id`, ADD `menu_url` VARCHAR(255) NOT NULL AFTER `photo_url`;


INSERT INTO 
	`myzomato`.`internal_city_zone_subzone_p_m` (`rest_id`, `city_id`, `zone_id`, `subzone_id`, `photo_url`, `menu_url`) 
SELECT 
	id,
	city_id,
	zone_id,
	sub_zone_id,
	photoUrl,
	menuUrl
FROM `sszomaoto`.`restaurents`



13. menus
    rest_id
    menu varchar 255

    CREATE TABLE `myzomato`.`internal_menus` ( `rest_id` INT NULL , `menu` VARCHAR(255) NOT NULL , INDEX (`rest_id`) , FULLTEXT (`menu`) ) ENGINE = InnoDB;


INSERT INTO 
	`myzomato`.`internal_menus` (`rest_id`, `menu`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.menusAll, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as opt
FROM `sszomaoto`.`restaurents` t CROSS JOIN 
(
	SELECT a.N + b.N * 10 + 1 n
	FROM 
		(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
	   ,(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
		ORDER BY n
) n
WHERE n.n <= 1 + (LENGTH(t.menusAll) - LENGTH(REPLACE(t.menusAll, ',', '')))





14. photos

    rest_id
    photo varchar 255


    CREATE TABLE `myzomato`.`internal_rest_photots` ( `rest_id` INT NULL , `photo_url` VARCHAR(255) NOT NULL , INDEX (`rest_id`) , FULLTEXT (`photo_url`) ) ENGINE = InnoDB;

    INSERT INTO 
	`myzomato`.`internal_rest_photos` (`rest_id`, `photo_url`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.photoUrl, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as opt
FROM `sszomaoto`.`restaurents` t CROSS JOIN 
(
	SELECT a.N + b.N * 10 + 1 n
	FROM 
		(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
	   ,(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
		ORDER BY n
) n
WHERE n.n <= 1 + (LENGTH(t.photoUrl) - LENGTH(REPLACE(t.photoUrl, ',', '')))



DB HELP for copy

1. copy cusines from raw db to individual table with new formate
  tmp used to save primary key of actual table exist

VV1
INSERT INTO 
	`myzomato`.`rest_cusines` (`rest_short_details_id`, `cusines`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.cusines, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as cusine
FROM `sszomaoto`.`restaurents` t CROSS JOIN 
(
	SELECT a.N + b.N * 10 + 1 n
	FROM 
		(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) a
	   ,(SELECT 0 AS N UNION ALL SELECT 1 UNION ALL SELECT 2 UNION ALL SELECT 3 UNION ALL SELECT 4 UNION ALL SELECT 5 UNION ALL SELECT 6 UNION ALL SELECT 7 UNION ALL SELECT 8 UNION ALL SELECT 9) b
		ORDER BY n
) n
WHERE n.n <= 1 + (LENGTH(t.cusines) - LENGTH(REPLACE(t.cusines, ',', '')))

VV2
INSERT INTO 
	`myzomato`.`rest_cusines` (`rest_short_details_id`, `cusines`) 
SELECT 
	id,
	REPLACE( REPLACE(REPLACE (SUBSTRING_INDEX(SUBSTRING_INDEX(t.cusines, ',', n.n), ',', -1), '[', ''), "]", ""), '"', "") as cusine
FROM `sszomaoto`.`restaurents` t

2. copy lat lng on basis of cusine table reference from tmp column as original id of record

INSERT INTO `myzomato`.`rest_geo_location` (`rest_short_details_id`, `lat`, `lng`)
SELECT C.rest_short_details_id, O.lat, O.lng FROM `sszomaoto`.`restaurents` AS O 
	INNER JOIN `myzomato`.`rest_cusines` AS C 
	ON O.id = C.rest_short_details_id GROUP BY C.rest_short_details_id

3. copy short details

INSERT INTO `myzomato`.`rest_short_details` (`rest_short_details_id`, `rest_known_for`, `rest_address`, `rest_header_title`, `rest_header_image`)
SELECT C.rest_short_details_id, O.knownfor, O.address, O.headerTitle, O.headerImage FROM `sszomaoto`.`restaurents` AS O 
INNER JOIN `myzomato`.`rest_cusines` AS C 
	ON O.id = C.rest_short_details_id GROUP BY C.rest_short_details_id



===>
INSERT INTO `myzomato`.`rest__details` (`rest_short_details_id`, `rest_header_title`, `rest_header_image`, `rest_address`, `rest_known_for`, `cusine`, `lat`, `lng`)
SELECT 
rest.rest_short_details_id, rest.rest_header_title, rest.rest_header_image, rest.rest_address, rest.rest_known_for, cusine.cusines, geo.lat, geo.lng 
FROM rest_cusines AS cusine 
INNER JOIN rest_geo_location AS geo
ON cusine.rest_short_details_id = geo.rest_short_details_id
INNER JOIN rest_short_details AS rest 
ON rest.rest_short_details_id = geo.rest_short_details_id


















Search Manager
1. apache slr / Apache Lucene
https://github.com/gsf/node-solr

C:\Windows\System32\cmd.exe







Google Map Icons
http://kml4earth.appspot.com/icons.html



SELECT 
	R.rest_short_details_id, R.rest_header_title, R.rest_header_image, R.rest_address, R.rest_known_for, 
	GROUP_CONCAT( DISTINCT( CU.cusines ) ) as cusines, 
	G.lat, G.lng, 
	GROUP_CONCAT( DISTINCT( C.contact ) ) as contacts, 
	GROUP_CONCAT( DISTINCT( CONCAT('{o:', T.openat, ',c:', T.closeat, ',w:', T.weekday, '}' ) ) ) as timetable, 
	GROUP_CONCAT( DISTINCT( H.highlight ) ) as highlights, 
	SR.cost, 
	GROUP_CONCAT( DISTINCT( P.option ) )  as payment_options, 
	GROUP_CONCAT( DISTINCT( S.keyword ) ) as seo 	
	FROM rest_short_details as R
		INNER JOIN rest_contact_numbers as C
			ON R.rest_short_details_id = C.rest_id 
		INNER JOIN rest_cusines as CU 
			ON R.rest_short_details_id = CU.rest_short_details_id 
		INNER JOIN rest_geo_location as G 
			ON G.rest_short_details_id = R.rest_short_details_id 
		INNER JOIN rest_hightlights as H 
			ON R.rest_short_details_id = H.rest_id 
		INNER JOIN rest_payment_options as P 
			ON R.rest_short_details_id = P.rest_id 
		INNER JOIN rest_seo_keyword as S 
			ON R.rest_short_details_id = S.rest_id 
		INNER JOIN rest_timetable as T 
			ON R.rest_short_details_id = T.rest_id 
		INNER JOIN rest_cost as SR 
			ON R.rest_short_details_id = SR.rest_id 
WHERE R.rest_short_details_id = ${id}
GROUP BY C.rest_id, CU.rest_short_details_id, H.rest_id, P.rest_id, S.rest_id, T.rest_id



INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id,  
	CONCAT('[', GROUP_CONCAT(DISTINCT( CONCAT('{o:', T.openat, ',c:', T.closeat, ',w:', T.weekday, '}' ) ) ), ']') as timetable 
	FROM rest_short_details as R
		INNER JOIN rest_timetable as T 
			ON R.rest_short_details_id = T.rest_id 
 GROUP BY T.rest_id




 UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.timetable = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id


INSERT INTO tmp (id, val)
SELECT 
	R.rest_short_details_id, 
	GROUP_CONCAT( DISTINCT( H.highlight ) ) as highlights 
	FROM rest_short_details as R
		INNER JOIN rest_hightlights as H 
			ON R.rest_short_details_id = H.rest_id 
GROUP BY H.rest_id

UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.highlights = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id

INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id, 
	GROUP_CONCAT( DISTINCT( C.contact ) ) as contacts 
	FROM rest_short_details as R
		INNER JOIN rest_contact_numbers as C
			ON R.rest_short_details_id = C.rest_id 
GROUP BY C.rest_id

UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.rest_contact = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id

INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id, 
	GROUP_CONCAT( DISTINCT( P.option ) )  as payment_options
	FROM rest_short_details as R
		INNER JOIN rest_payment_options as P 
			ON R.rest_short_details_id = P.rest_id 
GROUP BY P.rest_id

UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.payment = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id

INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id, 
	GROUP_CONCAT( DISTINCT( S.keyword ) ) as seo 	
	FROM rest_short_details as R
		INNER JOIN rest_seo_keyword as S 
			ON R.rest_short_details_id = S.rest_id 
GROUP BY S.rest_id

UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.seo = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id


UPDATE rest__details 
	INNER JOIN rest_geo_location 
		ON rest_geo_location.rest_short_details_id = rest__details.rest_short_details_id 
	SET rest__details.lat = rest_geo_location.lat 
WHERE rest__details.rest_short_details_id = rest_geo_location.rest_short_details_id

INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id,  
	G.lat 
	FROM rest_short_details as R
		INNER JOIN rest_geo_location as G 
			ON G.rest_short_details_id = R.rest_short_details_id 


 


INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id,  
	G.lng 
	FROM rest_short_details as R
		INNER JOIN rest_geo_location as G 
			ON G.rest_short_details_id = R.rest_short_details_id


UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.lng = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id



INSERT INTO tmp (id, val) 
SELECT 
	R.rest_short_details_id,  
	SR.cost 
	FROM rest_short_details as R
		INNER JOIN rest_cost as SR 
			ON R.rest_short_details_id = SR.rest_id 


UPDATE rest__details 
	INNER JOIN tmp 
		ON tmp.id = rest__details.rest_short_details_id 
	SET rest__details.cost_tooltip = tmp.val
WHERE rest__details.rest_short_details_id = tmp.id