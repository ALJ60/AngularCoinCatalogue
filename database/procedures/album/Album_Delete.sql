DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Album_Delete`(IN `p_AlbumId` INT)
    MODIFIES SQL DATA
DELETE FROM album
  WHERE AlbumId = p_AlbumId$$
DELIMITER ;