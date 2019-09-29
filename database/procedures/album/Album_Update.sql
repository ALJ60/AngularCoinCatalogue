DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Album_Update`(IN `p_AlbumId` INT, IN `p_Album` VARCHAR(20), IN `p_CollectionId` INT, IN `p_Notes` MEDIUMTEXT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM album
              WHERE Album = p_Album
                AND AlbumId <> p_AlbumId
            ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate album';
  END IF;
  
  UPDATE album
    SET Album = p_Album,
        CollectionId = NULLIF(p_CollectionId, 0),
        Notes = p_Notes
    WHERE AlbumId = p_AlbumId;
    
END$$
DELIMITER ;