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
7. openclose days
8. openclose timing
9. phonenumbers
10. payment options
11. seo keyword internal
12. cityzonesubzone internal
13. menus
14. photos


    CREATE TABLE `myzomato`.`rest_geo_location` ( `lat` DECIMAL(10, 8) NOT NULL , `lng` DECIMAL(11, 8) NOT NULL , `rest_short_details_id` INT NOT NULL , INDEX (`lat`, `lng`, `rest_short_details_id`) ) ENGINE = InnoDB;



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