DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CatalogueEdition_Select`(IN `p_CatalogueEditionId` INT)
    READS SQL DATA
SELECT *
  FROM catalogueEdition
  WHERE CatalogueEditionId = p_CatalogueEditionId$$
DELIMITER ;