DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CatalogueEdition_Insert`(IN `p_CatalogueId` INT, IN `p_Catalogue` VARCHAR(80), IN `p_Edition` VARCHAR(20))
    MODIFIES SQL DATA
BEGIN

  IF EXISTS(SELECT *
              FROM catalogue
              WHERE Catalogue = p_Catalogue) THEN
    SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Catalogue already exists';
  END IF;
  
  IF EXISTS(SELECT *
              FROM catalogueEdition
              WHERE CatalogueId = p_CatalogueId
                AND CatalogueEdition = p_Edition) THEN
	SIGNAL SQLSTATE '45000'
      SET MESSAGE_TEXT = 'Catalogue edition already exists';
  END IF;
  
  SET @CatalogueId = p_CatalogueId;
  
  START TRANSACTION;
  
    IF p_CatalogueId = 0 THEN
      INSERT INTO catalogue (Catalogue)
        VALUES (p_Catalogue);
      SET @CatalogueId = LAST_INSERT_ID();
    END IF;
  
    INSERT INTO catalogueEdition (
        CatalogueId,
        CatalogueEdition)
      VALUES (
        @CatalogueId,
        p_Edition);
        
  COMMIT;
  
END$$
DELIMITER ;