CREATE TABLE `bullion` (
  `BullionId` int(11) NOT NULL,
  `BullionMetal` varchar(20) NOT NULL,
  `BullionPrice` decimal(6,2) NOT NULL,
  `PriceDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


ALTER TABLE `bullion`
  ADD PRIMARY KEY (`BullionId`),
  ADD UNIQUE KEY `BullionMetal` (`BullionMetal`);


ALTER TABLE `bullion`
  MODIFY `BullionId` int(11) NOT NULL AUTO_INCREMENT;