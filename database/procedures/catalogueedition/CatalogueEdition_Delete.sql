DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CatalogueEdition_Delete`(IN `p_EditionId` INT)
    MODIFIES SQL DATA
BEGIN

  SELECT CatalogueId
    INTO @CatalogueId
    FROM catalogueedition
    WHERE CatalogueEditionId = p_EditionId;
    
  START TRANSACTION;
  
  DELETE FROM catalogueedition
    WHERE CatalogueEditionId = p_EditionId;
    
  IF NOT EXISTS(
      SELECT *
        FROM catalogueedition
        WHERE CatalogueId = @CatalogueId
      ) THEN
    DELETE FROM catalogue
      WHERE CatalogueId = @CatalogueId;
  END IF;
  
  COMMIT;
  
END$$
DELIMITER ;