DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CatalogueEdition_Update`(IN `p_EditionId` INT, IN `p_CatalogueId` INT, IN `p_Catalogue` VARCHAR(80), IN `p_Edition` VARCHAR(20))
    MODIFIES SQL DATA
BEGIN

    IF EXISTS(SELECT *
              FROM Catalogue
              WHERE Catalogue = p_Catalogue
                AND CatalogueId <> p_CatalogueId) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Catalogue name already in use';
  END IF;
  
    IF EXISTS(SELECT *
              FROM CatalogueEdition
              WHERE CatalogueId = p_CatalogueId
                AND CatalogueEdition = p_Edition
                AND CatalogueEditionId <> p_EditionId) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Catalogue edition already exists';
  END IF;
  
  SET @CatalogueId = p_CatalogueId;

  SELECT CatalogueId
    INTO @OldCatalogueId
    FROM CatalogueEdition
    WHERE CatalogueEditionId = p_EditionId;

  START TRANSACTION;
  
    IF p_CatalogueId = 0 THEN
      INSERT INTO Catalogue (Catalogue)
        VALUES (p_Catalogue);
      SET @CatalogueId = LAST_INSERT_ID();
    ELSE
      UPDATE Catalogue
        SET Catalogue = CASE p_Catalogue
                          WHEN '' THEN Catalogue
                          ELSE p_Catalogue
                        END
        WHERE CatalogueId = p_CatalogueId;
    END IF;
    
    UPDATE CatalogueEdition
      SET CatalogueId = @CatalogueId,
          CatalogueEdition = p_Edition
      WHERE CatalogueEditionId = p_EditionId;
      
    IF NOT EXISTS (SELECT *
                      FROM CatalogueEdition
                      WHERE CatalogueId = @OldCatalogueId
      ) THEN
      DELETE FROM Catalogue
        WHERE CatalogueId = @OldCatalogueId;
    END IF;
    
  COMMIT;
    
END$$
DELIMITER ;