ALTER TABLE `catalogueedition`
  ADD CONSTRAINT `CatalogueEdition_ibfk_1` FOREIGN KEY (`CatalogueId`) REFERENCES `catalogue` (`CatalogueId`);