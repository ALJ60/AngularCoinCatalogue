DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_Insert`(IN `p_Collection` VARCHAR(50), IN `p_SortAfterId` INT)
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT * FROM collection WHERE Collection = p_Collection) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Duplication collection';
  END IF;

  IF p_SortAfterId = 0 THEN
  	SET @SortOrder = 1;
  ELSE
    SELECT SortOrder + 1
      INTO @SortOrder
      FROM collection
      WHERE CollectionId = p_SortAfterId;
  END IF;
  
  START TRANSACTION;
  
  IF EXISTS(SELECT * FROM collection WHERE SortOrder = @SortOrder) THEN
    UPDATE collection
      SET SortOrder = SortOrder + 10
      WHERE SortOrder >= @SortOrder;
  END IF;
  
  INSERT INTO collection (
      Collection,
      SortOrder)
    VALUES (
      p_Collection,
      @SortOrder);
  
  COMMIT;

END$$
DELIMITER ;