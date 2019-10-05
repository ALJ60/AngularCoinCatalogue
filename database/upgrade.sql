CREATE TABLE `collection` (
  `CollectionId` int(11) NOT NULL,
  `Collection` varchar(50) NOT NULL,
  `SortOrder` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `collection`
  ADD PRIMARY KEY (`CollectionId`),
  ADD UNIQUE KEY `Collection` (`Collection`);

ALTER TABLE `collection`
  MODIFY `CollectionId` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `album` ADD `CollectionId` INT NULL AFTER `Album`;

ALTER TABLE `album`
  ADD FOREIGN KEY (`CollectionId`) REFERENCES `collection`(`CollectionId`) ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE `sheet` ADD `CollectionId` INT NULL AFTER `AlbumId`;

ALTER TABLE `sheet`
  ADD CONSTRAINT `Sheet_ibfk_2` FOREIGN KEY (`CollectionId`) REFERENCES `collection`(`CollectionId`)
  ON DELETE RESTRICT ON UPDATE RESTRICT;

ALTER TABLE bullion DROP FOREIGN KEY Bullion_ibfk_1;

ALTER TABLE `bullion` DROP `CurrencyId`;