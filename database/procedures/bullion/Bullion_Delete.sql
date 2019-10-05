DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Bullion_Delete`(IN `p_BullionId` INT)
    MODIFIES SQL DATA
DELETE FROM bullion
  WHERE BullionId = p_BullionId$$
DELIMITER ;