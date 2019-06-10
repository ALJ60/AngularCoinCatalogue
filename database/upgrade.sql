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