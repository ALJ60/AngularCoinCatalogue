DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Sheet_Insert`(IN `p_Sheet` VARCHAR(10), IN `p_Rows` TINYINT, IN `p_Columns` TINYINT, IN `p_AlbumId` INT, IN `p_CollectionId` INT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT * FROM sheet WHERE Sheet = p_Sheet) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate Sheet';
  END IF;
  
  INSERT INTO sheet (
      Sheet,
      Rows,
      Columns,
      AlbumId,
      CollectionId)
    VALUES (
      p_Sheet,
      p_Rows,
      p_Columns,
      NULLIF(p_AlbumId, 0),
      NULLIF(p_CollectionId, 0));

END$$
DELIMITER ;