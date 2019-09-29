DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Album_Insert`(IN `p_Album` VARCHAR(20), IN `p_CollectionId` INT, IN `p_Notes` MEDIUMTEXT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT * FROM album WHERE Album = p_Album) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate album';
  END IF;

  INSERT INTO album (
      Album,
      CollectionId,
      Notes)
    VALUES (
      p_Album,
      NULLIF(p_CollectionId, 0),
      p_Notes);
      
END$$
DELIMITER ;