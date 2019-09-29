DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `Collection_Select`(IN `p_CollectionId` INT)
    READS SQL DATA
SELECT *
  FROM collection
  WHERE CollectionId = p_CollectionId$$
DELIMITER ;