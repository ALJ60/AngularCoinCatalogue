ALTER TABLE `sheet`
  ADD CONSTRAINT `Sheet_ibfk_1` FOREIGN KEY (`AlbumId`) REFERENCES `album` (`AlbumId`),
  ADD CONSTRAINT `Sheet_ibfk_2` FOREIGN KEY (`CollectionId`) REFERENCES `collection` (`CollectionId`);