DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_Delete`(IN `p_CollectionId` INT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM album
              WHERE CollectionId = p_CollectionId
            ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Cannot delete - used for albums';
  END IF;

  DELETE FROM collection
    WHERE CollectionId = p_CollectionId;
    
END$$
DELIMITER ;