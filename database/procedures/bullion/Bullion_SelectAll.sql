DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Bullion_SelectAll`()
    READS SQL DATA
SELECT *
  FROM bullion
  ORDER BY BullionMetal$$
DELIMITER ;