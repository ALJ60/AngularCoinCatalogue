DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Album_SelectAll`()
    READS SQL DATA
SELECT album.*,
       IFNULL(collection.Collection, '') AS Collection
  FROM album
  LEFT JOIN collection ON collection.CollectionId = album.CollectionId
  ORDER BY album.Album$$
DELIMITER ;