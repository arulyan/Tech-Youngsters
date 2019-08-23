-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2019 at 03:09 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `polling`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `Id` int(10) NOT NULL,
  `EventName` varchar(30) NOT NULL,
  `Question` text NOT NULL,
  `OptionA` text NOT NULL,
  `OptionB` text NOT NULL,
  `OptionC` text NOT NULL,
  `OptionD` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`Id`, `EventName`, `Question`, `OptionA`, `OptionB`, `OptionC`, `OptionD`) VALUES
(1, 'PM Polling', 'Polling for PM of India', 'Modi', 'Rahul', 'Kejriwal', 'Gordon'),
(2, 'President Polling', 'Polling for President of India', 'Kovind', 'Pratibha Patel', 'Sonya Gandhi', 'Hunter'),
(3, 'Governor', 'Polling for Governor of India', 'Shaktikanta Das', 'Nirmila', 'Amit Shah', 'Urjit Patel');

-- --------------------------------------------------------

--
-- Table structure for table `userinfo`
--

CREATE TABLE `userinfo` (
  `Id` int(10) NOT NULL,
  `Name` varchar(20) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `userinfo`
--

INSERT INTO `userinfo` (`Id`, `Name`, `Email`, `Password`) VALUES
(1, 'Arulyan', 'arulyanasokan@gmail.com', '$2b$10$gPPcO5dl/qqGmInSehzSUuRuYZcAdY9Sl1TF2cecfNlU5pY6VnWRS'),
(2, 'Varun', 'varun@gmail.com', '$2b$10$F4pjNlQnM1zRSx6tU64iLuWZBemnEzNgZfxhtGgZV70laHeXe1hzG'),
(3, 'Samarth', 'samarthr16@gmai.com', '$2b$10$fIUAgNwc79ifbSybzZyRdedRP8BYGPK04wTJgwtWh5enSNnMwcl5W');

-- --------------------------------------------------------

--
-- Table structure for table `voting`
--

CREATE TABLE `voting` (
  `Id` int(10) NOT NULL,
  `Event` varchar(30) NOT NULL,
  `Email` varchar(30) NOT NULL,
  `Options` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `voting`
--

INSERT INTO `voting` (`Id`, `Event`, `Email`, `Options`) VALUES
(2, 'President Polling', 'arulyanasokan@gmail.com', 'd'),
(3, 'Governor', 'arulyanasokan@gmail.com', 'a'),
(4, 'PM Polling', 'arulyanasokan@gmail.com', 'd'),
(5, 'PM Polling', 'varun@gmail.com', 'a'),
(6, 'Governor', 'varun@gmail.com', 'a'),
(7, 'President Polling', 'varun@gmail.com', 'd'),
(9, 'PM Polling', 'samarthr16@gmai.com', 'a');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `userinfo`
--
ALTER TABLE `userinfo`
  ADD PRIMARY KEY (`Id`);

--
-- Indexes for table `voting`
--
ALTER TABLE `voting`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `userinfo`
--
ALTER TABLE `userinfo`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `voting`
--
ALTER TABLE `voting`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
