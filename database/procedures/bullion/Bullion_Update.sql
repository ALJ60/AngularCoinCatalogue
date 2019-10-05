DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Bullion_Update`(IN `p_BullionId` INT, IN `p_BullionMetal` VARCHAR(20), IN `p_BullionPrice` DECIMAL(6,2))
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM bullion
              WHERE BullionMetal = p_BullionMetal
                AND BullionId <> p_BullionId
            ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate bullion metal';
  END IF;
  
  UPDATE bullion
    SET BullionMetal = p_BullionMetal,
        BullionPrice = p_BullionPrice,
        PriceDate = CURDATE()
    WHERE BullionId = p_BullionId;
    
END$$
DELIMITER ;