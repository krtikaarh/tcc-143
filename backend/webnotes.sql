-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 23, 2025 at 03:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webnotes`
--

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `content`, `createdAt`, `updatedAt`) VALUES
(2, 'Catatan Pertama', 'Ini adalah isi catatan pertama saya.', '2025-03-02 14:45:41', '2025-03-02 14:45:41'),
(3, 'coba', 'hari ini coba coba', '2025-03-02 16:18:23', '2025-03-02 16:18:23'),
(5, 'ketiga', 'sdjvbfjdbvaf', '2025-03-02 16:25:36', '2025-03-02 16:25:36'),
(6, 'keempat', '123456789', '2025-03-02 16:30:14', '2025-03-02 18:00:33'),
(7, 'Terakhir', 'Kali ini berhasil', '2025-03-02 18:02:04', '2025-03-02 18:02:04'),
(11, 'oke', 'ini balek', '2025-03-03 13:38:12', '2025-03-03 13:38:12'),
(12, 'ppp', 'ppp', '2025-05-22 15:13:43', '2025-05-22 15:13:43'),
(13, 'test', 'test\n', '2025-05-23 10:05:52', '2025-05-23 10:05:52'),
(14, 'test', '12345678', '2025-05-23 11:03:46', '2025-05-23 11:03:46');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'aaa', '', '2025-03-17 10:06:05', '2025-03-17 10:06:05'),
(2, 'bbb', '', '2025-03-17 10:06:12', '2025-03-17 10:06:12'),
(3, '123', '$2b$10$zDREJpsnVk3UlA8hlZb5HuH61lUcNW0OP4r.HqD9EVBL1jOCQRXy2', '2025-05-22 14:55:36', '2025-05-22 14:55:36'),
(4, 'admin', '$2b$10$Nc0Ox5378ztfvVGz2zdW2Obs8fxn84ZRDHNUhf38KuamB8k6qjmiO', '2025-05-22 14:55:56', '2025-05-22 14:55:56'),
(5, 'Kartika ', '$2b$10$Hquu1F8.7mE..xcc3yJ0we5pJKkj4rDnHNXxAkAbqdolZ8ynPPMgq', '2025-05-23 02:10:38', '2025-05-23 02:10:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
