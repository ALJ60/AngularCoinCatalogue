DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Sheet_Delete`(IN `p_SheetId` INT)
    MODIFIES SQL DATA
DELETE FROM sheet
  WHERE SheetId = p_SheetId$$
DELIMITER ;