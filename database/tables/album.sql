CREATE TABLE `album` (
  `AlbumId` int(11) NOT NULL,
  `Album` varchar(20) NOT NULL,
  `CollectionId` int(11) DEFAULT NULL,
  `Notes` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `album`
  ADD PRIMARY KEY (`AlbumId`),
  ADD UNIQUE KEY `Album` (`Album`),
  ADD KEY `CollectionId` (`CollectionId`);


ALTER TABLE `album`
  MODIFY `AlbumId` int(11) NOT NULL AUTO_INCREMENT;