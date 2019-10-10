CREATE TABLE `catalogueedition` (
  `CatalogueEditionId` int(11) NOT NULL,
  `CatalogueId` int(11) NOT NULL,
  `CatalogueEdition` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `catalogueedition`
  ADD PRIMARY KEY (`CatalogueEditionId`),
  ADD UNIQUE KEY `CatalogueEdition` (`CatalogueId`,`CatalogueEdition`);


ALTER TABLE `catalogueedition`
  MODIFY `CatalogueEditionId` int(11) NOT NULL AUTO_INCREMENT;