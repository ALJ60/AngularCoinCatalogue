DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `CatalogueEdition_SelectAll`()
    READS SQL DATA
SELECT catalogueedition.*,
       catalogue.Catalogue
  FROM catalogueedition
  JOIN catalogue ON catalogue.CatalogueId = catalogueedition.CatalogueId
  ORDER BY catalogue.Catalogue,
           catalogueedition.CatalogueEdition$$
DELIMITER ;