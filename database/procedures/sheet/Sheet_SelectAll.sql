DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Sheet_SelectAll`()
    READS SQL DATA
SELECT sheet.*,
       IFNULL(album.Album, '') AS Album,
       IFNULL(collection.Collection, '') AS Collection
  FROM sheet
  LEFT JOIN album ON album.AlbumId = sheet.AlbumId
  LEFT JOIN collection ON collection.CollectionId = IFNULL(sheet.CollectionId, album.CollectionId)
  ORDER BY sheet.Sheet$$
DELIMITER ;