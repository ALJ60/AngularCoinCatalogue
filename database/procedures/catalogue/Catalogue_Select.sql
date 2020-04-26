DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Catalogue_Select`(IN `p_CatalogueId` INT)
    READS SQL DATA
SELECT *
  FROM catalogue
  WHERE CatalogueId = p_CatalogueId$$
DELIMITER ;