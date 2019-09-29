ALTER TABLE `album`
  ADD CONSTRAINT `album_ibfk_1` FOREIGN KEY (`CollectionId`) REFERENCES `collection` (`CollectionId`);