-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Aug 22, 2017 at 04:07 PM
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
(1, 654646, '454', '2017-08-13', 'asdasd', 'asdas', '2017-08-13 09:34:26', '2017-08-13 09:34:26');

-- --------------------------------------------------------

--
-- Table structure for table `company_bank_details`
--

CREATE TABLE `company_bank_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `bank_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_branch` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IFSC_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount_USD` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `company_bank_details`
--

INSERT INTO `company_bank_details` (`id`, `bank_name`, `bank_address`, `bank_branch`, `account_number`, `IFSC_code`, `amount`, `amount_USD`, `created_at`, `updated_at`) VALUES
(1, 'vikas', 'gjk', 'lkjljl', '44645', '666', NULL, NULL, '2017-08-20 17:55:32', '2017-08-20 17:55:32'),
(2, 'vikas', 'kouugu', 'kopar', '459', '7997975', NULL, NULL, '2017-08-20 17:55:32', '2017-08-20 17:55:32'),
(3, 'HDFC', 'Ghatkopar', 'Pant Nagar', '14598', 'HD87456', '7894568', NULL, '2017-08-20 18:03:44', '2017-08-20 18:03:44'),
(4, 'HDFC', 'Ghatkopar', 'Pant Nagar', '14598', 'HD87456', '7894568', NULL, '2017-08-20 18:04:45', '2017-08-20 18:04:45'),
(5, 'PNB', 'ijjlj', 'sdfsfd', '7897', 'sdf', '45698', NULL, '2017-08-20 18:04:45', '2017-08-20 18:04:45'),
(6, 'AVNISH1', 'kurla', 'Matunga', '753951', 'AM9090', '456975', NULL, '2017-08-20 18:09:31', '2017-08-20 18:09:31'),
(7, 'AVNISH2', 'Vidyavihar', 'Sion', '456852', 'AS4756', '13354687', NULL, '2017-08-20 18:09:31', '2017-08-20 18:09:31');

-- --------------------------------------------------------

--
-- Table structure for table `company_profiles`
--

CREATE TABLE `company_profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `c_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `from` date NOT NULL,
  `to` date NOT NULL,
  `GST` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PAN` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IEC` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `QBC` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `company_profiles`
--

INSERT INTO `company_profiles` (`id`, `c_name`, `address`, `phone`, `mobile`, `email`, `from`, `to`, `GST`, `PAN`, `IEC`, `QBC`, `created_at`, `updated_at`) VALUES
(1, 'vikas pals', 'asgdjasgdasdasd', '987456', '9768', 'vikas@bewdigital.com', '2017-05-05', '0201-03-02', 'G57897sdf', '789545', '78956', '87979', '2017-08-13 03:11:54', '2017-08-20 09:53:56');

-- --------------------------------------------------------

--
-- Table structure for table `dealers`
--

CREATE TABLE `dealers` (
  `id` int(10) UNSIGNED NOT NULL,
  `dealer_name` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dealer_status` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dealer_details` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `lab_issue`
--

CREATE TABLE `lab_issue` (
  `Sr_no` int(11) NOT NULL,
  `Stock_ID` int(11) NOT NULL,
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

INSERT INTO `lab_issue` (`Sr_no`, `Stock_ID`, `LAB_type`, `date`, `shape`, `service`, `carat`, `diameter`, `height`, `color`, `clarity`, `amount`, `return_date`, `status`, `updated_at`, `created_at`) VALUES
(8, 23523, 'IGI', '1970-01-01', NULL, 'wefweg', 0, '23', '243', NULL, NULL, '342233', '2017-08-02', 'ISSUED', '2017-08-02 12:01:49', '2017-08-02 11:44:54'),
(5, 898235, 'GIA', '1970-01-16', 'ROUND BRILLIANT CUT', 'ergerherh', 100, '5343', '24', 'GRAY', 'IF', '234524', '2017-08-02', 'ISSUED', '2017-08-02 12:01:43', '2017-07-16 20:56:29'),
(7, 25235211, 'HRDA', '1970-01-01', NULL, '2ef22', 0, '2423', '32', NULL, NULL, '2423232', '2017-08-02', 'RECEIVED', '2017-08-02 14:31:40', '2017-08-02 11:44:02'),
(6, 1121241233, 'GIA', '1970-01-09', NULL, 'wegwbgb', 0, '235', '23', NULL, NULL, '2362362362', '2017-08-02', 'ISSUED', '2017-08-02 12:01:43', '2017-07-20 09:01:04');

-- --------------------------------------------------------

--
-- Table structure for table `memo_in`
--

CREATE TABLE `memo_in` (
  `Stock_ID` int(11) DEFAULT NULL,
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

INSERT INTO `memo_in` (`Stock_ID`, `Lot_Number`, `memo_invoice_number`, `date`, `account_name`, `broker`, `reference`, `carats`, `rate`, `no_of_days`, `due_date`, `status`, `country`) VALUES
(121332244, NULL, '12312312', '2017/8/9', 'HARISH DIAM', 'Barb Akew', 'dvadva', 1, 1232, 12, '2017/08/08', 'RETURNED', 'Albania'),
(12323, NULL, '12312312', '2017/8/9', 'HARISH DIAM', 'Barb Akew', 'dvadva', 1, 1232, 12, '2017/08/08', 'RETURNED', 'Albania'),
(4231231, NULL, '12312312', '2017/8/9', 'HARISH DIAM', 'Barb Akew', 'dvadva', 1, 1232, 12, '2017/8/21', 'ISSUED', 'Albania');

-- --------------------------------------------------------

--
-- Table structure for table `memo_issue`
--

CREATE TABLE `memo_issue` (
  `Stock_ID` int(11) DEFAULT NULL,
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

INSERT INTO `memo_issue` (`Stock_ID`, `Lot_Number`, `memo_invoice_number`, `date`, `account_name`, `broker`, `reference`, `carats`, `rate`, `no_of_days`, `due_date`, `return_date`, `status`, `country`) VALUES
(23523, NULL, '134112412', '2017/8/1', 'R. KANTILAL & CO.', 'Barb Akew', 'nsdvnw', 100, 100, 12, '2017/08/08', NULL, 'ISSUED', 'Albania'),
(335, NULL, '25235', '2017/8/31', 'ANAND GHAN DIAM', 'Marsha Mellow', 'fwwef', 123, 42223, 12, '2017/9/12', NULL, 'ISSUED', 'Albania');

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
  `invoice_value` double NOT NULL,
  `transaction_date` date NOT NULL,
  `transaction_mode` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_details` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `account_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_currency` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `transaction_status` enum('full','part') COLLATE utf8mb4_unicode_ci NOT NULL,
  `credit_INR` double DEFAULT NULL,
  `debit_INR` double DEFAULT NULL,
  `transaction_conversion_rate` double DEFAULT NULL,
  `balance` double NOT NULL,
  `received` double NOT NULL,
  `date` date NOT NULL,
  `due_date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `payment_reciepts`
--

INSERT INTO `payment_reciepts` (`id`, `invoice_number`, `invoice_value`, `transaction_date`, `transaction_mode`, `transaction_details`, `account_name`, `transaction_currency`, `transaction_status`, `credit_INR`, `debit_INR`, `transaction_conversion_rate`, `balance`, `received`, `date`, `due_date`, `created_at`, `updated_at`) VALUES
(1, 78965, 9874569, '2016-05-05', 'cash', NULL, 'vikas', 'INR', 'part', NULL, 15455, NULL, 9859114, 15455, '2016-05-05', '2017-02-19', '2017-08-22 03:20:34', '2017-08-22 03:20:34');

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
  `sr_no` int(11) NOT NULL,
  `Stock_ID` int(11) DEFAULT NULL,
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
  `broker_details` varchar(256) DEFAULT NULL,
  `length` varchar(256) DEFAULT NULL,
  `width` varchar(256) DEFAULT NULL,
  `depth` varchar(256) DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `weight` varchar(256) DEFAULT NULL,
  `reportNo` varchar(256) DEFAULT NULL,
  `colorDesc` varchar(256) DEFAULT NULL,
  `finalCut` varchar(256) DEFAULT NULL,
  `depthPct` varchar(256) DEFAULT NULL,
  `tablePct` varchar(256) DEFAULT NULL,
  `crnAg` varchar(256) DEFAULT NULL,
  `crnHt` varchar(256) DEFAULT NULL,
  `pavAg` varchar(256) DEFAULT NULL,
  `pavDp` varchar(256) DEFAULT NULL,
  `starLn` varchar(256) DEFAULT NULL,
  `lrHalf` varchar(256) DEFAULT NULL,
  `girdle` varchar(256) DEFAULT NULL,
  `girdleCondition` varchar(256) DEFAULT NULL,
  `girdlePct` varchar(256) DEFAULT NULL,
  `culetSize` varchar(256) DEFAULT NULL,
  `symmetry` varchar(256) DEFAULT NULL,
  `fluorescenceIntensity` varchar(256) DEFAULT NULL,
  `fluorescenceColor` varchar(256) DEFAULT NULL,
  `keyToSymbols` varchar(256) DEFAULT NULL,
  `reportType` varchar(256) DEFAULT NULL,
  `reportDt` varchar(256) DEFAULT NULL,
  `inscription` varchar(256) DEFAULT NULL,
  `infoMsg` varchar(256) DEFAULT NULL,
  `fullShapeDescription` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase`
--

INSERT INTO `purchase` (`sr_no`, `Stock_ID`, `invoice_number`, `purchase_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `aginst_Hform`, `mVAT`, `broker_details`, `length`, `width`, `depth`, `message`, `weight`, `reportNo`, `colorDesc`, `finalCut`, `depthPct`, `tablePct`, `crnAg`, `crnHt`, `pavAg`, `pavDp`, `starLn`, `lrHalf`, `girdle`, `girdleCondition`, `girdlePct`, `culetSize`, `symmetry`, `fluorescenceIntensity`, `fluorescenceColor`, `keyToSymbols`, `reportType`, `reportDt`, `inscription`, `infoMsg`, `fullShapeDescription`) VALUES
(21, 456, 'q123', '2017-07-29', '2017-08-28', 'S. R. DIAMONDS HK LTD.', '30', NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', 'Andorra', NULL, '{"comission1":0,"comission2":0}', 'RAPNET', NULL, NULL, 'MARQUISE CUT', NULL, NULL, 'GRAY', 'VVS2', 1, 1, 10, 3600, 4000, 5, 3780, 3600, 3600, 55, 55.38, 'GIA', '456c', 3600, 55.38, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(23, 25235211, '535352', NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, '43634634', NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(25, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(26, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(27, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 454646, 'q123', '2017-07-29', '2017-08-28', 'S. R. DIAMONDS HK LTD.', '30', NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', 'Andorra', NULL, '{"comission1":"-","comission2":"-"}', 'RAPNET', NULL, NULL, 'MARQUISE CUT', NULL, NULL, 'GRAY', 'VVS2', 1, 1, 10, 3600, 4000, 5, 3780, 3600, 3600, 55, 55.38, 'GIA', '456c', 3600, 55.38, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(30, 335, '535352', NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(31, 56211, '535352', NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(32, 523, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 100, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(33, 6223, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(34, 324646, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(35, 23623, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(36, 362322, NULL, NULL, NULL, NULL, NULL, NULL, 65, NULL, '{"less1":"-","less2":"-","less3":"-"}', NULL, NULL, '{"comission1":"-","comission2":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, NULL, 0, '{"brokerName":"-","brokerType":"-","brokerage":"-"}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '0', '0', '0', '0', '0', NULL, NULL, '0'),
(37, 134135, NULL, NULL, NULL, NULL, NULL, 'erwgrg', 65, NULL, '{"less1":0,"less2":0,"less3":0}', NULL, NULL, '{"comission1":0,"comission2":0}', 'RAPNET', NULL, NULL, 'PRINCESS CUT', NULL, NULL, 'GRAY', 'IF', 2, 32, 22, 2531270, 3245220, 10, 2784400, 162001000, 162001000, 2492330, 2492330, NULL, '23235', 5062550, 77885.3, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', 'wglwgw', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'v', 'v', 'wewe', 'wewe', 'vwewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe', 'wewe');

-- --------------------------------------------------------

--
-- Table structure for table `purchase_return`
--

CREATE TABLE `purchase_return` (
  `sr_no` int(11) NOT NULL,
  `Stock_ID` int(11) DEFAULT NULL,
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
  `broker_details` varchar(256) DEFAULT NULL,
  `length` varchar(256) DEFAULT NULL,
  `width` varchar(256) DEFAULT NULL,
  `depth` varchar(256) DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `weight` varchar(256) DEFAULT NULL,
  `reportno` varchar(256) DEFAULT NULL,
  `colordesc` varchar(256) DEFAULT NULL,
  `finalcut` varchar(256) DEFAULT NULL,
  `depthpct` varchar(256) DEFAULT NULL,
  `tablepct` varchar(256) DEFAULT NULL,
  `crnag` varchar(256) DEFAULT NULL,
  `crnht` varchar(256) DEFAULT NULL,
  `pavag` varchar(256) DEFAULT NULL,
  `pavdp` varchar(256) DEFAULT NULL,
  `starln` varchar(256) DEFAULT NULL,
  `lrhalf` varchar(256) DEFAULT NULL,
  `girdle` varchar(256) DEFAULT NULL,
  `girdlecondition` varchar(256) DEFAULT NULL,
  `girdlepct` varchar(256) DEFAULT NULL,
  `culetsize` varchar(256) DEFAULT NULL,
  `symmetry` varchar(256) DEFAULT NULL,
  `fluorescenceintensity` varchar(256) DEFAULT NULL,
  `fluorescencecolor` varchar(256) DEFAULT NULL,
  `keytosymbols` varchar(256) DEFAULT NULL,
  `reporttype` varchar(256) DEFAULT NULL,
  `reportdt` varchar(256) DEFAULT NULL,
  `inscription` varchar(256) DEFAULT NULL,
  `infomsg` varchar(256) DEFAULT NULL,
  `fullshapedescription` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `purchase_return`
--

INSERT INTO `purchase_return` (`sr_no`, `Stock_ID`, `invoice_number`, `purchase_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `aginst_Hform`, `mVAT`, `broker_details`, `length`, `width`, `depth`, `message`, `weight`, `reportno`, `colordesc`, `finalcut`, `depthpct`, `tablepct`, `crnag`, `crnht`, `pavag`, `pavdp`, `starln`, `lrhalf`, `girdle`, `girdlecondition`, `girdlepct`, `culetsize`, `symmetry`, `fluorescenceintensity`, `fluorescencecolor`, `keytosymbols`, `reporttype`, `reportdt`, `inscription`, `infomsg`, `fullshapedescription`) VALUES
(1, 123456, 'Inv123', '2017-07-29', '2017-09-12', 'ANAND GHAN DIAM', '45', 'A', 65, 'A', '{"less1":0,"less2":0,"less3":0}', 'India', NULL, '{"comission1":0,"comission2":0}', 'GENERAL STOCK', NULL, NULL, 'ROUND BRILLIANT CUT', NULL, NULL, 'BLUE', 'FL', 1, 1, 10, 900, 1000, 10, 990, 900, 900, 13, 13.85, 'GIA', '123456C', 900, 13.85, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 12345, 'inv 234', '2017-07-29', '2017-08-08', 'RATNAKALA EXPORT', '10', 'A', 65, 'B', '{"less1":0,"less2":0,"less3":0}', 'India', NULL, '{"comission1":0,"comission2":0}', 'GENERAL STOCK', NULL, '17', 'PRINCESS CUT', '123', 'L', 'GREEN', 'IF', 1, 1, 5, 950, 1000, 5, 997.5, 950, 950, 14, 14.62, 'GIA', '12345C', 950, 14.62, NULL, 0, '{"brokerType":"","brokerName":"","brokerage":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

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
  `sr_no` int(11) NOT NULL,
  `Stock_ID` int(11) DEFAULT NULL,
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
  `broker_details` varchar(256) DEFAULT NULL,
  `length` varchar(256) DEFAULT NULL,
  `width` varchar(256) DEFAULT NULL,
  `depth` varchar(256) DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `weight` varchar(256) DEFAULT NULL,
  `reportno` varchar(256) DEFAULT NULL,
  `colordesc` varchar(256) DEFAULT NULL,
  `finalcut` varchar(256) DEFAULT NULL,
  `depthpct` varchar(256) DEFAULT NULL,
  `tablepct` varchar(256) DEFAULT NULL,
  `crnag` varchar(256) DEFAULT NULL,
  `crnht` varchar(256) DEFAULT NULL,
  `pavag` varchar(256) DEFAULT NULL,
  `pavdp` varchar(256) DEFAULT NULL,
  `starln` varchar(256) DEFAULT NULL,
  `lrhalf` varchar(256) DEFAULT NULL,
  `girdle` varchar(256) DEFAULT NULL,
  `girdlecondition` varchar(256) DEFAULT NULL,
  `girdlepct` varchar(256) DEFAULT NULL,
  `culetsize` varchar(256) DEFAULT NULL,
  `symmetry` varchar(256) DEFAULT NULL,
  `fluorescenceintensity` varchar(256) DEFAULT NULL,
  `fluorescencecolor` varchar(256) DEFAULT NULL,
  `keytosymbols` varchar(256) DEFAULT NULL,
  `reporttype` varchar(256) DEFAULT NULL,
  `reportdt` varchar(256) DEFAULT NULL,
  `inscription` varchar(256) DEFAULT NULL,
  `infomsg` varchar(256) DEFAULT NULL,
  `fullshapedescription` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sales`
--

INSERT INTO `sales` (`sr_no`, `Stock_ID`, `invoice_number`, `sales_date`, `due_date`, `account_name`, `payment_terms`, `polishing_type`, `currency_convrsion_rate`, `notes`, `less`, `country`, `bill_type`, `comission`, `stock_status_group`, `item`, `kapan`, `diamond_shape`, `diamond_lot_number`, `diamond_size`, `diamond_color`, `diamond_clarity`, `total_diamond_pcs`, `total_diamond_carat`, `cost_discount`, `cost_rate_per_carat`, `RAP_price`, `wd_rate`, `wd_rate_carat`, `rate_INR`, `amount_INR`, `rate_dolar`, `amount_dolar`, `LAB_type`, `certificate_number`, `avg_INR`, `avg_dolar`, `sale_disc`, `sale_rate`, `freight`, `purchase_amount_INR`, `purchase_amount_dolar`, `sales_amount_INR`, `sales_amount_dolar`, `diff_amount_INR`, `diff_amount_dolar`, `broker_details`, `length`, `width`, `depth`, `message`, `weight`, `reportno`, `colordesc`, `finalcut`, `depthpct`, `tablepct`, `crnag`, `crnht`, `pavag`, `pavdp`, `starln`, `lrhalf`, `girdle`, `girdlecondition`, `girdlepct`, `culetsize`, `symmetry`, `fluorescenceintensity`, `fluorescencecolor`, `keytosymbols`, `reporttype`, `reportdt`, `inscription`, `infomsg`, `fullshapedescription`) VALUES
(1, 234, 'inv345', '2017/7/29', '2017/9/2', 'KANTILAL CHOTILAL', '35', 'A', 65, NULL, '{"less1":0,"less2":0,"less3":0}', 'Algeria', NULL, '{"comission1":0,"comission2":0}', 'GENERAL STOCK', NULL, NULL, 'MARQUISE CUT', NULL, NULL, 'GREEN', 'IF', 1, 1, 10, 9000, 10000, 10, 9900, 0, 9000, 0, 138.46, 'GIA', '234C', 9000, 138.46, 10, 9000, 0, 9000, 138.46, 9000, 138.46, 0, 0, '{"brokerType":"","brokerName":"","brokerage":""}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 23523, '124124', '2017/8/22', '2017/9/3', NULL, '12', NULL, 31, '12411', '{"less1":0,"less2":0,"less3":0}', 'Afghanistan', NULL, '{"comission1":0,"comission2":0}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, NULL, NULL, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '{"brokerType":"","brokerName":"","brokerage":""}', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `sales_return`
--

CREATE TABLE `sales_return` (
  `sr_no` int(11) NOT NULL,
  `Stock_ID` int(11) NOT NULL,
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
  `broker_details` varchar(256) DEFAULT NULL,
  `length` varchar(256) DEFAULT NULL,
  `width` varchar(256) DEFAULT NULL,
  `depth` varchar(256) DEFAULT NULL,
  `message` varchar(256) DEFAULT NULL,
  `weight` varchar(256) DEFAULT NULL,
  `reportno` varchar(256) DEFAULT NULL,
  `colordesc` varchar(256) DEFAULT NULL,
  `finalcut` varchar(256) DEFAULT NULL,
  `depthpct` varchar(256) DEFAULT NULL,
  `tablepct` varchar(256) DEFAULT NULL,
  `crnag` varchar(256) DEFAULT NULL,
  `crnht` varchar(256) DEFAULT NULL,
  `pavag` varchar(256) DEFAULT NULL,
  `pavdp` varchar(256) DEFAULT NULL,
  `starln` varchar(256) DEFAULT NULL,
  `lrhalf` varchar(256) DEFAULT NULL,
  `girdle` varchar(256) DEFAULT NULL,
  `girdlecondition` varchar(256) DEFAULT NULL,
  `girdlepct` varchar(256) DEFAULT NULL,
  `culetsize` varchar(256) DEFAULT NULL,
  `symmetry` varchar(256) DEFAULT NULL,
  `fluorescenceintensity` varchar(256) DEFAULT NULL,
  `fluorescencecolor` varchar(256) DEFAULT NULL,
  `keytosymbols` varchar(256) DEFAULT NULL,
  `reporttype` varchar(256) DEFAULT NULL,
  `reportdt` varchar(256) DEFAULT NULL,
  `inscription` varchar(256) DEFAULT NULL,
  `infomsg` varchar(256) DEFAULT NULL,
  `fullshapedescription` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `server_log`
--

CREATE TABLE `server_log` (
  `id` int(10) UNSIGNED NOT NULL,
  `server_IP` varchar(256) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `log` text COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

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

-- --------------------------------------------------------

--
-- Table structure for table `vendors`
--

CREATE TABLE `vendors` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_code` int(11) NOT NULL,
  `opening_bal` double DEFAULT NULL,
  `opening_bal_USD` double DEFAULT NULL,
  `remarks` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `contact_person` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `mobile` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fax_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `RAP` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IDEX` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `diamond_world_id` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `QBC` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `credit_limit` double NOT NULL,
  `credit_limit_USD` double NOT NULL,
  `refernce_1` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `reference_2` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `GST` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `PAN` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `vendor_bank_details`
--

CREATE TABLE `vendor_bank_details` (
  `id` int(10) UNSIGNED NOT NULL,
  `bank_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_address` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bank_branch` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `account_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `IFSC_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `amount` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `amount_USD` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cashbook`
--
ALTER TABLE `cashbook`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_bank_details`
--
ALTER TABLE `company_bank_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `company_profiles`
--
ALTER TABLE `company_profiles`
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
  ADD PRIMARY KEY (`Stock_ID`),
  ADD KEY `Sr_no` (`Sr_no`);

--
-- Indexes for table `memo_in`
--
ALTER TABLE `memo_in`
  ADD UNIQUE KEY `Stock_ID` (`Stock_ID`),
  ADD UNIQUE KEY `Lot_Number` (`Lot_Number`);

--
-- Indexes for table `memo_issue`
--
ALTER TABLE `memo_issue`
  ADD UNIQUE KEY `Stock_ID` (`Stock_ID`),
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
  ADD UNIQUE KEY `Stock_ID` (`Stock_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

--
-- Indexes for table `purchase_return`
--
ALTER TABLE `purchase_return`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `Stock_ID` (`Stock_ID`),
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
  ADD UNIQUE KEY `Stock_ID` (`Stock_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

--
-- Indexes for table `sales_return`
--
ALTER TABLE `sales_return`
  ADD PRIMARY KEY (`sr_no`),
  ADD UNIQUE KEY `Stock_ID` (`Stock_ID`),
  ADD UNIQUE KEY `diamond_lot_number` (`diamond_lot_number`),
  ADD KEY `sr_no` (`sr_no`);

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
-- AUTO_INCREMENT for table `lab_issue`
--
ALTER TABLE `lab_issue`
  MODIFY `Sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `purchase`
--
ALTER TABLE `purchase`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `purchase_return`
--
ALTER TABLE `purchase_return`
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
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
  MODIFY `sr_no` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
