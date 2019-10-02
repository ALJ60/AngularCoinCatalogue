CREATE TABLE `sheet` (
  `SheetId` int(11) NOT NULL,
  `Sheet` varchar(10) NOT NULL,
  `Rows` tinyint(4) NOT NULL,
  `Columns` tinyint(4) NOT NULL,
  `AlbumId` int(11) DEFAULT NULL,
  `CollectionId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `sheet`
  ADD PRIMARY KEY (`SheetId`),
  ADD UNIQUE KEY `Sheet` (`Sheet`),
  ADD KEY `AlbumId` (`AlbumId`),
  ADD KEY `Sheet_ibfk_2` (`CollectionId`);


ALTER TABLE `sheet`
  MODIFY `SheetId` int(11) NOT NULL AUTO_INCREMENT;