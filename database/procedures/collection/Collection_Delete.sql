DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_Delete`(IN `p_CollectionId` INT)
    MODIFIES SQL DATA
    COMMENT 'Deletes a collection'
DELETE FROM collection
	WHERE CollectionId = p_CollectionId$$
DELIMITER ;