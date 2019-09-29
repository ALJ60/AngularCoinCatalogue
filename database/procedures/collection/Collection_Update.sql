DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_Update`(IN `p_CollectionId` INT, IN `p_Collection` VARCHAR(50), IN `p_SortAfterId` INT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM collection
              WHERE Collection = p_Collection
                AND CollectionId <> p_CollectionId
           ) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplicate collection';
  END IF;
  
  SELECT SortOrder
    INTO @OldSortOrder
    FROM collection
    WHERE CollectionId = p_CollectionId;
    
  START TRANSACTION;
    
  IF (p_SortAfterId = -1) THEN
    SET @SortOrder = @OldSortOrder;
    
  ELSE
    IF (p_SortAfterId = 0) THEN
      SET @SortOrder = 1;
    ELSE
      SELECT SortOrder + 1
        INTO @SortOrder
        FROM collection
        WHERE CollectionId = p_SortAfterId;
    END IF;
    
    IF EXISTS(SELECT *
                FROM collection
                WHERE SortOrder = @SortOrder
              ) THEN
      UPDATE collection
        SET SortOrder = SortOrder + 10
        WHERE SortOrder >= @SortOrder;
    END IF;
  
  END IF;
  
  UPDATE collection
  	SET Collection = p_Collection,
        SortOrder = @SortOrder
    WHERE CollectionId = p_CollectionId;
    
  COMMIT;
    
END$$
DELIMITER ;