DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Album_Delete`(IN `p_AlbumId` INT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM sheet
              WHERE AlbumId = p_AlbumId
            ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Cannot delete - used for sheets';
  END IF;

  DELETE FROM album
    WHERE AlbumId = p_AlbumId;
    
END$$
DELIMITER ;