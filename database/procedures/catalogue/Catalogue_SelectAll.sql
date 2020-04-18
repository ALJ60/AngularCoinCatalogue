DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Catalogue_SelectAll`()
    READS SQL DATA
SELECT *
	FROM catalogue
    ORDER BY Catalogue$$
DELIMITER ;