-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Jul 22, 2017 at 05:09 PM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 5.6.24

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ACC_INVENTORY_DB`
--

-- --------------------------------------------------------

--
-- Table structure for table `cashbook`
--

CREATE TABLE `cashbook` (
  `id` int(10) UNSIGNED NOT NULL,
  `amount` int(11) NOT NULL,
  `voucher` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `description` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cashbook`
--

INSERT INTO `cashbook` (`id`, `amount`, `voucher`, `date`, `description`, `type`, `created_at`, `updated_at`) VALUES
(1, 3523, '1241241233', '2017-07-11', 'wegwgw', 'ergrehq', '2017-07-10 13:36:52', '2017-07-10 13:36:52'),
(2, 2352, '2232', '2017-07-12', 'fwewef', 'ewfwewg', '2017-07-11 20:48:39', '2017-07-11 20:48:39');

-- --------------------------------------------------------

--
-- Table structure for table `dealers`
--

CREATE TABLE `dealers` (
  `id` int(11) NOT NULL,
  `dealer_name` varchar(256) NOT NULL,
  `dealer_status` varchar(256) NOT NULL,
  `dealer_details` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `lab_issue`
--

CREATE TABLE `lab_issue` (
  `Sr_no` int(11) NOT NULL,
  `PCS_ID` int(11) NOT NULL,
  `LAB_type` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `date` date DEFAULT NULL,
  `shape` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `service` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `carat` float DEFAULT NULL,
  `diameter` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `height` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `color` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `clarity` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `status` varchar(256) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `lab_issue`
--

INSERT INTO `lab_issue` (`Sr_no`, `PCS_ID`, `LAB_type`, `date`, `shape`, `service`, `carat`, `diameter`, `height`, `color`, `clarity`, `amount`, `return_date`, `status`, `updated_at`, `created_at`) VALUES
(5, 898235, 'GIA', '1970-01-16', 'ROUND BRILLIANT CUT', 'ergerherh', 100, '5343', '24', 'GRAY', 'IF', '234524', NULL, 'ISSUED', '2017-07-16 20:56:29', '2017-07-16 20:56:29'),
(6, 1121241233, 'GIA', '1970-01-09', NULL, 'wegwbgb', 0, '235', '23', NULL, NULL, '2362362362', '2017-07-20', 'RECEIVED', '2017-07-20 09:01:19', '2017-07-20 09:01:04');

-- --------------------------------------------------------

--
-- Table structure for table `memo_in`
--

CREATE TABLE `memo_in` (
  `PCS_ID` int(11) DEFAULT NULL,
  `Lot_Number` int(11) DEFAULT NULL,
  `memo_invoice_number` varchar(256) NOT NULL,
  `date` varchar(256) DEFAULT NULL,
  `account_name` varchar(256) DEFAULT NULL,
  `broker` varchar(256) DEFAULT NULL,
  `reference` varchar(256) DEFAULT NULL,
  `carats` float DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `no_of_days` int(11) DEFAULT NULL,
  `due_date` varchar(256) DEFAULT NULL,
  `status` varchar(256) DEFAULT NULL,
  `country` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `memo_in`
--

INSERT INTO `memo_in` (`PCS_ID`, `Lot_Number`, `memo_invoice_number`, `date`, `account_name`, `broker`, `reference`, `carats`, `rate`, `no_of_days`, `due_date`, `status`, `country`) VALUES
(223523, NULL, '12424', '2017/7/18', 'RATNAKALA EXPORT', 'Tiffany Case', 'wegewwewe', 235, 235235, 12, '2017/7/30', 'ISSUED', 'Albania');

-- --------------------------------------------------------

--
-- Table structure for table `memo_issue`
--

CREATE TABLE `memo_issue` (
  `PCS_ID` int(11) DEFAULT NULL,
  `Lot_Number` int(11) DEFAULT NULL,
  `memo_invoice_number` varchar(256) NOT NULL,
  `date` varchar(256) DEFAULT NULL,
  `account_name` varchar(256) DEFAULT NULL,
  `broker` varchar(256) DEFAULT NULL,
  `reference` varchar(256) DEFAULT NULL,
  `carats` float DEFAULT NULL,
  `rate` float DEFAULT NULL,
  `no_of_days` int(11) DEFAULT NULL,
  `due_date` varchar(256) DEFAULT NULL,
  `return_date` varchar(256) DEFAULT NULL,
  `status` varchar(256) DEFAULT NULL,
  `country` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `memo_issue`
--

INSERT INTO `memo_issue` (`PCS_ID`, `Lot_Number`, `memo_invoice_number`, `date`, `account_name`, `broker`, `reference`, `carats`, `rate`, `no_of_days`, `due_date`, `return_date`, `status`, `country`) VALUES
(898235, NULL, '2623632', '2017/7/21', 'KANTILAL CHOTILAL', 'Tiffany Case', 'dvwvweb', 1113, 131212, 12, '2017/8/2', NULL, 'ISSUED', 'Algeria');

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2017_06_25_074531_create_lab_issue_table', 0),
(2, '2017_06_25_074559_create_purchase_table', 0),
(3, '2017_06_25_074639_create_purchase_return_table', 0),
(4, '2017_06_25_074657_create_sales_return_table', 0),
(5, '2017_06_25_074704_create_sales_table', 0),
(6, '2017_06_25_074738_create_memo_in_table', 0),
(7, '2017_07_01_072202_create_purchase_table', 0),
(8, '2017_07_01_072216_create_memo_issue_table', 0),
(9, '2017_07_01_072224_create_memo_in_table', 0),
(10, '2017_07_01_072236_create_sales_table', 0),
(11, '2017_07_01_072247_create_sales_return_table', 0),
(12, '2017_07_01_072505_create_purchase_return_table', 0),
(13, '2017_07_01_072546_create_dealers_table', 0),
(14, '2017_07_01_072600_create_lab_issue_table', 0),
(15, '2017_07_01_072658_create_permissions_table', 0),
(16, '2017_07_01_072723_create_permission_role_table', 0),
(17, '2017_07_01_072736_create_roles_table', 0),
(18, '2017_07_01_072750_create_server_log_table', 0),
(19, '2017_07_01_072800_create_users_table', 0),
(20, '2017_06_25_054353_create_cashbook', 1),
(21, '2017_07_07_031716_create_payment_reciepts_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_reciepts`
--

CREATE TABLE `payment_reciepts` (
  `id` int(10) UNSIGNED NOT NULL,
  `invoice_number` int(11) NOT NULL,
  `date` date NOT NULL,
  `mod` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `currency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `f/p` enum('full','part') COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit_INR` double NOT NULL,
  `debit_INR` double NOT NULL,
  `credit_dollar` double NOT NULL,
  `debit_dollar` double NOT NULL,
  `balance` double NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'delete_user', '2017-06-24 15:24:14', '2017-06-24 15:24:14');

-- --------------------------------------------------------

--
-- Table structure for table `permission_role`
--

CREATE TABLE `permission_role` (
  `permission_id` int(10) UNSIGNED NOT NULL,
  `role_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permission_role`
--

INSERT INTO `permission_role` (`permission_id`, `role_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `purchase`
--

CREATE TABLE `purchase` (
  `PCS_ID` int(11) DEFAULT NULL,
  `sr_no` int(11) NOT NULL,
  `invoice_number` varchar(256) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `account_name` varchar(256) DEFAULT NULL,
  `payment_terms` varchar(256) DEFAULT NULL,
  `polishing_type` varchar(256) DEFAULT NULL,
  `currency_convrsion_rate` float DEFAULT NULL,
  `notes` varchar(256) DEFAULT NULL,
  `less` varchar(256) DEFAULT NULL,
  `country` varchar(256) DEFAULT NULL,
  `bill_type` varchar(256) DEFAULT NULL,
  `comission` varchar(256) DEFAULT NULL,
  `stock_status_group` varchar(256) DEFAULT NULL,
  `item` varchar(256) DEFAULT NULL,
  `kapan` varchar(256) DEFAULT NULL,
  `diamond_shape` varchar(256) DEFAULT NULL,
  `diamond_lot_number` varchar(256) DEFAULT NULL,
  `diamond_size` varchar(256) DEFAULT NULL,
  `diamond_color` varchar(256) DEFAULT NULL,
  `diamond_clarity` varchar(256) DEFAULT NULL,
  `total_diamond_pcs` int(11) DEFAULT NULL,
  `total_diamond_carat` float DEFAULT NULL,
  `cost_discount` float DEFAULT NULL,
  `cost_rate_per_carat` float DEFAULT NULL,
  `RAP_price` float DEFAULT NULL,
  `wd_rate` float DEFAULT NULL,
  `wd_rate_carat` float DEFAULT NULL,
  `rate_INR` float DEFAULT NULL,
  `amount_INR` float DEFAULT NULL,
  `rate_dolar` float DEFAULT NULL,
  `amount_dolar` float DEFAULT NULL,
  `LAB_type` varchar(256) DEFAULT NULL,
  `certificate_number` varchar(256) DEFAULT NULL,
  `avg_INR` float DEFAULT NULL,
  `avg_dolar` float DEFAULT NULL,
  `aginst_Hform` varchar(256) DEFAULT NULL,
  `mVAT` float DEFAULT NULL,
  `broker_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`PCS_ID`, `sr_no`, `invoice_number`, `purchase_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `aginst_Hform`, `mVAT`, `broker_details`) VALUES
(898235, 2, '100001', '2017-07-13', '2017-07-23', 'S. R. DIAMONDS HK LTD.', '10', 'wenkflwe', 100, 'wnlfnwnegio', '{"less1":"1","less2":"1","less3":"1"}', 'Argentina', 'Bill to Bill', '{"comission1":"1","comission2":"2"}', 'GENERAL STOCK', 'wjkgjlw', 'lwelgwle', 'ROUND BRILLIANT CUT', NULL, NULL, 'GRAY', 'IF', 50, 100, 2, 1960, 2000, 2, 1999.2, 9226500, 701842000, 92265, 7018420, 'lwjeljwelg', '1235', 3585270, 35852.7, NULL, 1, '{"brokerType":"Flat","brokerName":"Tiffany Case","brokerage":"1"}'),
(NULL, 4, '23532623', NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, '23623623', NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_return`
--

CREATE TABLE `purchase_return` (
  `PCS_ID` int(11) DEFAULT NULL,
  `sr_no` int(11) NOT NULL,
  `invoice_number` varchar(256) DEFAULT NULL,
  `purchase_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `account_name` varchar(256) DEFAULT NULL,
  `payment_terms` varchar(256) DEFAULT NULL,
  `polishing_type` varchar(256) DEFAULT NULL,
  `currency_convrsion_rate` float DEFAULT NULL,
  `notes` varchar(256) DEFAULT NULL,
  `less` varchar(256) DEFAULT NULL,
  `country` varchar(256) DEFAULT NULL,
  `bill_type` varchar(256) DEFAULT NULL,
  `comission` varchar(256) DEFAULT NULL,
  `stock_status_group` varchar(256) DEFAULT NULL,
  `item` varchar(256) DEFAULT NULL,
  `kapan` varchar(256) DEFAULT NULL,
  `diamond_shape` varchar(256) DEFAULT NULL,
  `diamond_lot_number` varchar(256) DEFAULT NULL,
  `diamond_size` varchar(256) DEFAULT NULL,
  `diamond_color` varchar(256) DEFAULT NULL,
  `diamond_clarity` varchar(256) DEFAULT NULL,
  `total_diamond_pcs` int(11) DEFAULT NULL,
  `total_diamond_carat` float DEFAULT NULL,
  `cost_discount` float DEFAULT NULL,
  `cost_rate_per_carat` float DEFAULT NULL,
  `RAP_price` float DEFAULT NULL,
  `wd_rate` float DEFAULT NULL,
  `wd_rate_carat` float DEFAULT NULL,
  `rate_INR` float DEFAULT NULL,
  `amount_INR` float DEFAULT NULL,
  `rate_dolar` float DEFAULT NULL,
  `amount_dolar` float DEFAULT NULL,
  `LAB_type` varchar(256) DEFAULT NULL,
  `certificate_number` varchar(256) DEFAULT NULL,
  `avg_INR` float DEFAULT NULL,
  `avg_dolar` float DEFAULT NULL,
  `aginst_Hform` varchar(256) DEFAULT NULL,
  `mVAT` float DEFAULT NULL,
  `broker_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_return`
--

INSERT INTO `purchase_return` (`PCS_ID`, `sr_no`, `invoice_number`, `purchase_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `aginst_Hform`, `mVAT`, `broker_details`) VALUES
(452332, 6, '3532525533', NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}'),
(NULL, 8, '3532525533', NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, '235235', NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}');

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'admin', '2017-06-24 15:23:30', '2017-06-24 15:23:30');

-- --------------------------------------------------------

--
-- Table structure for table `role_user`
--

CREATE TABLE `role_user` (
  `role_id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_user`
--

INSERT INTO `role_user` (`role_id`, `user_id`) VALUES
(1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sales`
--

CREATE TABLE `sales` (
  `PCS_ID` int(11) DEFAULT NULL,
  `sr_no` int(11) NOT NULL,
  `invoice_number` varchar(256) NOT NULL,
  `sales_date` varchar(256) DEFAULT NULL,
  `due_date` varchar(256) DEFAULT NULL,
  `account_name` varchar(256) DEFAULT NULL,
  `payment_terms` varchar(256) DEFAULT NULL,
  `polishing_type` varchar(256) DEFAULT NULL,
  `currency_convrsion_rate` float DEFAULT NULL,
  `notes` varchar(256) DEFAULT NULL,
  `less` varchar(256) DEFAULT NULL,
  `country` varchar(256) DEFAULT NULL,
  `bill_type` varchar(256) DEFAULT NULL,
  `comission` varchar(256) DEFAULT NULL,
  `stock_status_group` varchar(256) DEFAULT NULL,
  `item` varchar(256) DEFAULT NULL,
  `kapan` varchar(256) DEFAULT NULL,
  `diamond_shape` varchar(256) DEFAULT NULL,
  `diamond_lot_number` varchar(256) DEFAULT NULL,
  `diamond_size` varchar(256) DEFAULT NULL,
  `diamond_color` varchar(256) DEFAULT NULL,
  `diamond_clarity` varchar(256) DEFAULT NULL,
  `total_diamond_pcs` int(11) DEFAULT NULL,
  `total_diamond_carat` float DEFAULT NULL,
  `cost_discount` float DEFAULT NULL,
  `cost_rate_per_carat` float DEFAULT NULL,
  `RAP_price` float DEFAULT NULL,
  `wd_rate` float DEFAULT NULL,
  `wd_rate_carat` float DEFAULT NULL,
  `rate_INR` float DEFAULT NULL,
  `amount_INR` float DEFAULT NULL,
  `rate_dolar` float DEFAULT NULL,
  `amount_dolar` float DEFAULT NULL,
  `LAB_type` varchar(256) DEFAULT NULL,
  `certificate_number` varchar(256) DEFAULT NULL,
  `avg_INR` float DEFAULT NULL,
  `avg_dolar` float DEFAULT NULL,
  `sale_disc` float DEFAULT NULL,
  `sale_rate` float DEFAULT NULL,
  `freight` float DEFAULT NULL,
  `purchase_amount_INR` float DEFAULT NULL,
  `purchase_amount_dolar` float DEFAULT NULL,
  `sales_amount_INR` float DEFAULT NULL,
  `sales_amount_dolar` float DEFAULT NULL,
  `diff_amount_INR` float DEFAULT NULL,
  `diff_amount_dolar` float DEFAULT NULL,
  `broker_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`PCS_ID`, `sr_no`, `invoice_number`, `sales_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `sale_disc`, `sale_rate`, `freight`, `purchase_amount_INR`, `purchase_amount_dolar`, `sales_amount_INR`, `sales_amount_dolar`, `diff_amount_INR`, `diff_amount_dolar`, `broker_details`) VALUES
(4623235, 1, '23592', '2017/7/14', '2017/7/24', 'RATNAKALA EXPORT', '10', 'ewklnleng', 100, 'innslnfwe', '{"less1":"1","less2":"0","less3":"1"}', 'Angola', 'Bill to Bill', '{"comission1":"2","comission2":"1"}', 'GENERAL STOCK', 'wgklwne', 'gwgwegw', 'MARQUISE CUT', NULL, NULL, 'RED', 'VVS2', 100, 90, 1, 99000, 100000, 10, 108900, 0, 701842000, 0, 7018420, 'gwgwegew', '223523236', 3585270, 35852.7, 1, 94207200, 100, 701842000, 7018420, 9420720000, 94207200, 8718880000, 87188800, '{"brokerType":"Flat","brokerName":"Jenny Flex","brokerage":"10"}');

-- --------------------------------------------------------

--
-- Table structure for table `sales_return`
--

CREATE TABLE `sales_return` (
  `PCS_ID` int(11) NOT NULL,
  `sr_no` int(11) NOT NULL,
  `invoice_number` varchar(256) NOT NULL,
  `sales_date` varchar(256) DEFAULT NULL,
  `due_date` varchar(256) DEFAULT NULL,
  `account_name` varchar(256) DEFAULT NULL,
  `payment_terms` varchar(256) DEFAULT NULL,
  `polishing_type` varchar(256) DEFAULT NULL,
  `currency_convrsion_rate` float DEFAULT NULL,
  `notes` varchar(256) DEFAULT NULL,
  `less` varchar(256) DEFAULT NULL,
  `country` varchar(256) DEFAULT NULL,
  `bill_type` varchar(256) DEFAULT NULL,
  `comission` varchar(256) DEFAULT NULL,
  `stock_status_group` varchar(256) DEFAULT NULL,
  `item` varchar(256) DEFAULT NULL,
  `kapan` varchar(256) DEFAULT NULL,
  `diamond_shape` varchar(256) DEFAULT NULL,
  `diamond_lot_number` varchar(256) DEFAULT NULL,
  `diamond_size` varchar(256) DEFAULT NULL,
  `diamond_color` varchar(256) DEFAULT NULL,
  `diamond_clarity` varchar(256) DEFAULT NULL,
  `total_diamond_pcs` int(11) DEFAULT NULL,
  `total_diamond_carat` float DEFAULT NULL,
  `cost_discount` float DEFAULT NULL,
  `cost_rate_per_carat` float DEFAULT NULL,
  `RAP_price` float DEFAULT NULL,
  `wd_rate` float DEFAULT NULL,
  `wd_rate_carat` float DEFAULT NULL,
  `rate_INR` float DEFAULT NULL,
  `amount_INR` float DEFAULT NULL,
  `rate_dolar` float DEFAULT NULL,
  `amount_dolar` float DEFAULT NULL,
  `LAB_type` varchar(256) DEFAULT NULL,
  `certificate_number` varchar(256) DEFAULT NULL,
  `avg_INR` float DEFAULT NULL,
  `avg_dolar` float DEFAULT NULL,
  `sale_disc` float DEFAULT NULL,
  `sale_rate` float DEFAULT NULL,
  `freight` float DEFAULT NULL,
  `purchase_amount_INR` float DEFAULT NULL,
  `purchase_amount_dolar` float DEFAULT NULL,
  `sales_amount_INR` float DEFAULT NULL,
  `sales_amount_dolar` float DEFAULT NULL,
  `diff_amount_INR` float DEFAULT NULL,
  `diff_amount_dolar` float DEFAULT NULL,
  `broker_details` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales_return`
--

INSERT INTO `sales_return` (`PCS_ID`, `sr_no`, `invoice_number`, `sales_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `sale_disc`, `sale_rate`, `freight`, `purchase_amount_INR`, `purchase_amount_dolar`, `sales_amount_INR`, `sales_amount_dolar`, `diff_amount_INR`, `diff_amount_dolar`, `broker_details`) VALUES
(32535, 2, '34634634', NULL, NULL, 'RATNAKALA EXPORT', '0', NULL, 43, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '{"brokerType":"","brokerName":"","brokerage":""}'),
(263, 3, '246246', NULL, NULL, NULL, '0', NULL, NULL, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '{"brokerType":"","brokerName":"","brokerage":""}');

-- --------------------------------------------------------

--
-- Table structure for table `server_log`
--

CREATE TABLE `server_log` (
  `id` int(11) NOT NULL,
  `server_IP` varchar(256) NOT NULL,
  `user_id` int(11) NOT NULL,
  `log` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `api_token` varchar(60) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `api_token`, `created_at`, `updated_at`) VALUES
(1, 'Sabryna Kerluke', 'ronaldo37@example.org', '$2y$10$Tg.qMUXLhp63IUF6bmwpruyMVe8VDbKnFCIIgGq7PoCCFoNt/ReAu', 'SPXwAlzqMy', 'KB2D912hAnwqnJZqk5s0i2eiZVbQNySXc5S6zmXPFeEAFRKdVuc0IRxoe1S9', '2017-06-24 09:52:46', '2017-06-24 09:52:46'),
(2, 'Dewayne Roberts', 'keyon.kertzmann@example.net', '$2y$10$Tg.qMUXLhp63IUF6bmwpruyMVe8VDbKnFCIIgGq7PoCCFoNt/ReAu', 'UbkL4DbnJe', 'XdgZEwzf4u7eMBsuwlsEEEBdF6KV0qwMYSlJdLGBONDMA1ZbCkxsXIIAhSfT', '2017-06-24 09:52:46', '2017-06-24 09:52:46'),
(3, 'Mollie Hoppe', 'thurman33@example.com', '$2y$10$Tg.qMUXLhp63IUF6bmwpruyMVe8VDbKnFCIIgGq7PoCCFoNt/ReAu', 'fsdAEThb54', 'OKQp8yV3L8FR1CQo2gpUuSxq9SABG31v12HwB2SzSPbEGNJFoSAJfxRprG3f', '2017-06-24 09:52:46', '2017-06-24 09:52:46');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cashbook`
--
ALTER TABLE `cashbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `dealers`
--
ALTER TABLE `dealers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `lab_issue`
--
ALTER TABLE `lab_issue`
  ADD PRIMARY KEY (`PCS_ID`),
  ADD KEY `Sr_no` (`Sr_no`);

--
-- Indexes for table `memo_in`
--
ALTER TABLE `memo_in`
  ADD UNIQUE KEY `PCS_ID` (`PCS_ID`),
  ADD UNIQUE KEY `Lot_Number` (`Lot_Number`);

--
-- Indexes for table `memo_issue`
--
ALTER TABLE `memo_issue`
  ADD UNIQUE KEY `PCS_ID` (`PCS_ID`),
  ADD UNIQUE KEY `Lot_Number` (`Lot_Number`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`(191));

--
-- Indexes for table `payment_reciepts`
--
ALTER TABLE `payment_reciepts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permission_role`
--
ALTER TABLE `permission_role`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `permission_role_role_id_foreign` (`role_id`);

--
-- Indexes for table `purchase`
--
ALTER TABLE `purchase`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `PCS_ID` (`PCS_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

--
-- Indexes for table `purchase_return`
--
ALTER TABLE `purchase_return`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `PCS_ID` (`PCS_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role_user`
--
ALTER TABLE `role_user`
  ADD PRIMARY KEY (`role_id`,`user_id`),
  ADD KEY `role_user_user_id_foreign` (`user_id`);

--
-- Indexes for table `sales`
--
ALTER TABLE `sales`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `PCS_ID` (`PCS_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

--
-- Indexes for table `sales_return`
--
ALTER TABLE `sales_return`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `PCS_ID` (`PCS_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

--
-- Indexes for table `server_log`
--
ALTER TABLE `server_log`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cashbook`
--
ALTER TABLE `cashbook`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `dealers`
--
ALTER TABLE `dealers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `lab_issue`
--
ALTER TABLE `lab_issue`
  MODIFY `Sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `payment_reciepts`
--
ALTER TABLE `payment_reciepts`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `purchase_return`
--
ALTER TABLE `purchase_return`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `sales`
--
ALTER TABLE `sales`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `sales_return`
--
ALTER TABLE `sales_return`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `server_log`
--
ALTER TABLE `server_log`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
