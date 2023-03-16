-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 15, 2023 at 03:26 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `museo`
--

-- --------------------------------------------------------

--
-- Table structure for table `pinturas`
--

CREATE TABLE `pinturas` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `autor` varchar(100) NOT NULL,
  `imagen` varchar(5000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `pinturas`
--

INSERT INTO `pinturas` (`id`, `nombre`, `autor`, `imagen`) VALUES
(1, 'La Mona Lisa', 'Leonardo DaVinci', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxe8xujxeDqBwumIYPrfkSzm9k31o3O-TWKVtWyi_zEMCoIoycmvMgGnU6rxRt6QmWzIU&usqp=CAU'),
(2, 'La ultima cena', 'Leonardo DaVinci', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/02-most-famous-paintings-last-supper.jpg'),
(3, 'La noche estrellada', 'Vincent Van Gogh', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/03-most-famous-paintings-starry-night-restricted.jpg'),
(4, 'El grito', 'Edvard Munch', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/04-most-famous-paintings-the-scream-restricted.jpg'),
(5, 'Guernica', 'Pablo Picasso', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/05-most-famous-paintings-guernica.jpg'),
(14, 'El beso', 'Gustav Klimt', 'https://cnnespanol.cnn.com/wp-content/uploads/2019/11/06-most-famous-paintings-the-kiss-restricted.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `pinturas`
--
ALTER TABLE `pinturas`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `pinturas`
--
ALTER TABLE `pinturas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
