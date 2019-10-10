CREATE TABLE `catalogue` (
  `CatalogueId` int(11) NOT NULL,
  `Catalogue` varchar(80) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `catalogue`
  ADD PRIMARY KEY (`CatalogueId`),
  ADD UNIQUE KEY `Catalogue` (`Catalogue`);


ALTER TABLE `catalogue`
  MODIFY `CatalogueId` int(11) NOT NULL AUTO_INCREMENT;