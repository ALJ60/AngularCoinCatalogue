DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_SelectAll`()
    READS SQL DATA
SELECT *
	FROM collection
    ORDER BY SortOrder$$
DELIMITER ;