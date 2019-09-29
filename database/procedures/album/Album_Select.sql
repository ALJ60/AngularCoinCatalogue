DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Album_Select`(IN `p_AlbumId` INT)
    READS SQL DATA
SELECT *
  FROM album
  WHERE AlbumId = p_AlbumId$$
DELIMITER ;