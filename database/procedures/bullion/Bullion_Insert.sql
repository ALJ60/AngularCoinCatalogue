DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Bullion_Insert`(IN `p_BullionMetal` VARCHAR(20), IN `p_BullionPrice` DECIMAL(6,2))
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT * FROM bullion WHERE BullionMetal = p_BullionMetal) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate bullion metal';
  END IF;
  
  INSERT INTO bullion (
      BullionMetal,
      BullionPrice,
      PriceDate)
    VALUES (
      p_BullionMetal,
      p_BullionPrice,
      CURDATE());
      
END$$
DELIMITER ;