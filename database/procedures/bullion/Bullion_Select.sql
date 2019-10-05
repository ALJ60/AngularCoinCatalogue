DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Bullion_Select`(IN `p_BullionId` INT)
    READS SQL DATA
SELECT *
  FROM bullion
  WHERE BullionId = p_BullionId$$
DELIMITER ;