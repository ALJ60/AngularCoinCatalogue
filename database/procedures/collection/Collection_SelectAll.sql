DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_SelectAll`()
  READS SQL DATA
  COMMENT 'Returns all collections'
SELECT *
	FROM collection
  ORDER BY Collection$$
DELIMITER ;