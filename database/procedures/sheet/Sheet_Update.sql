DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Sheet_Update`(IN `p_SheetId` INT, IN `p_Sheet` VARCHAR(10), IN `p_Rows` TINYINT, IN `p_Columns` TINYINT, IN `p_AlbumId` INT, IN `p_CollectionId` INT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM sheet
              WHERE Sheet = p_Sheet
                AND SheetId <> p_SheetId
            ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate sheet';
  END IF;
  
  UPDATE sheet
    SET Sheet = p_Sheet,
        Rows = p_Rows,
        Columns = p_Columns,
        AlbumId = NULLIF(p_AlbumId, 0),
        CollectionId = NULLIF(p_CollectionId, 0)
    WHERE SheetId = p_SheetId;
    
END$$
DELIMITER ;