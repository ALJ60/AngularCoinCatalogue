CREATE TABLE `collection` (
  `CollectionId` INT NOT NULL AUTO_INCREMENT,
  `Collection` VARCHAR(50) NOT NULL,
  PRIMARY KEY (`CollectionId`),
  UNIQUE (`Collection`))
  ENGINE = InnoDB;