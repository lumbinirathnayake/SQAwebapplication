-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 29, 2019 at 10:28 PM
-- Server version: 5.7.21-1ubuntu1
-- PHP Version: 7.2.3-1ubuntu1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `jira_demo`
--

-- --------------------------------------------------------

--
-- Table structure for table `bugs`
--

CREATE TABLE `bugs` (
  `bug_id` bigint(20) NOT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `description` text,
  `environment` varchar(255) NOT NULL,
  `feature_id` bigint(20) DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `reporter_id` bigint(20) DEFAULT NULL,
  `severity` varchar(255) DEFAULT NULL,
  `sprint_id` bigint(20) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `steps_to_reproduce` text,
  `test_case_id` bigint(20) DEFAULT NULL,
  `bug_title` varchar(255) DEFAULT NULL,
  `updated_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `bugs`
--

INSERT INTO `bugs` (`bug_id`, `assignee_id`, `created_date`, `description`, `environment`, `feature_id`, `priority`, `project_id`, `reporter_id`, `severity`, `sprint_id`, `status`, `steps_to_reproduce`, `test_case_id`, `bug_title`, `updated_date`) VALUES
(4, 3, '2019-07-07T19:18:42.080Z', 'When edit the shared list from customers side in one browser, and change', 'Dev', 2, 'Medium', 6, 1, 'Low', 8, 'Block', 'Steps to Reproduce\n\nLogin as admin in one browser and add a list  and make it public\n\nLogin as Customer in another browser and edit the list name and save\n', 8, 'Error message displayed when copy a DELETED status PO 2', '2019-07-05T06:03:37.868Z');

-- --------------------------------------------------------

--
-- Table structure for table `epic`
--

CREATE TABLE `epic` (
  `epic_id` bigint(20) NOT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `epic_description` text,
  `end_date` varchar(255) NOT NULL,
  `epic_name` varchar(255) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `epic_summery` varchar(255) DEFAULT NULL,
  `updated_date` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `epic`
--

INSERT INTO `epic` (`epic_id`, `assignee_id`, `created_date`, `epic_description`, `end_date`, `epic_name`, `start_date`, `status`, `epic_summery`, `updated_date`, `project_id`) VALUES
(1, 3, '2019-06-16T02:40:21.361Z', 'implementation', '2019-06-27T18:30:00.000Z', 'direct access implementation ', '2019-06-27T18:30:00.000Z', 'High', 'implementation', '2019-07-07T15:01:20.593Z', 6);

-- --------------------------------------------------------

--
-- Table structure for table `feature`
--

CREATE TABLE `feature` (
  `feature_id` bigint(20) NOT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `description` text,
  `end_date` varchar(255) NOT NULL,
  `epic_id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `summary` text,
  `updated_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `feature`
--

INSERT INTO `feature` (`feature_id`, `assignee_id`, `created_date`, `description`, `end_date`, `epic_id`, `name`, `project_id`, `start_date`, `status`, `summary`, `updated_date`) VALUES
(1, 3, '2019-06-16T02:41:28.053Z', 'SPIKE - Account Creation Phone Number Field Issues', '2019-06-11T18:30:00.000Z', 1, 'Account Creation Phone Number Field Issues', 6, '2019-06-11T18:30:00.000Z', 'Medium', 'SPIKE - Account Creation Phone Number Field Issues', '2019-07-07T17:46:02.890Z');

-- --------------------------------------------------------

--
-- Table structure for table `log_time_history`
--

CREATE TABLE `log_time_history` (
  `time_history_id` bigint(20) NOT NULL,
  `date` varchar(255) DEFAULT NULL,
  `logged_hours` varchar(255) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `log_time_history`
--

INSERT INTO `log_time_history` (`time_history_id`, `date`, `logged_hours`, `task_id`) VALUES
(1, '2019-07-07T02:37:46.413Z', '9', 3);

-- --------------------------------------------------------

--
-- Table structure for table `projects`
--

CREATE TABLE `projects` (
  `pro_id` bigint(20) NOT NULL,
  `pro_created_date` varchar(255) DEFAULT NULL,
  `pro_creator_id` bigint(20) DEFAULT NULL,
  `pro_description` text,
  `pro_end_date` varchar(255) DEFAULT NULL,
  `pro_lead_id` bigint(20) DEFAULT NULL,
  `pro_name` varchar(255) DEFAULT NULL,
  `pro_started_date` varchar(255) DEFAULT NULL,
  `pro_type` varchar(255) DEFAULT NULL,
  `pro_updated_date` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `projects`
--

INSERT INTO `projects` (`pro_id`, `pro_created_date`, `pro_creator_id`, `pro_description`, `pro_end_date`, `pro_lead_id`, `pro_name`, `pro_started_date`, `pro_type`, `pro_updated_date`) VALUES
(6, '2019-06-16T02:37:16.329Z', 3, 'Atlantic team', '2019-06-21T18:30:00.000Z', 1, 'Atlantic', '2019-06-21T18:30:00.000Z', 'software', '2019-07-07T15:08:38.385Z');

-- --------------------------------------------------------

--
-- Table structure for table `project_users`
--

CREATE TABLE `project_users` (
  `id` bigint(20) NOT NULL,
  `pro_id` bigint(20) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `project_users`
--

INSERT INTO `project_users` (`id`, `pro_id`, `user_id`) VALUES
(4, 6, 3),
(6, 11, 4),
(7, 11, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sprint`
--

CREATE TABLE `sprint` (
  `sprint_id` bigint(20) NOT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `creator_id` bigint(20) DEFAULT NULL,
  `description` text,
  `end_date` varchar(255) NOT NULL,
  `sprint_name` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `summary` text,
  `updated_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sprint`
--

INSERT INTO `sprint` (`sprint_id`, `created_date`, `creator_id`, `description`, `end_date`, `sprint_name`, `project_id`, `start_date`, `status`, `summary`, `updated_date`) VALUES
(3, '2019-06-24T09:17:57.013Z', 1, 'smaple sprint', '2019-06-26T18:30:00.000Z', 'smaple sprint', 8, '2019-06-27T18:30:00.000Z', 'Low', 'smaple sprint', '2019-06-24T09:56:33.627Z');

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `story_id` bigint(20) NOT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `description` text,
  `end_date` varchar(255) NOT NULL,
  `epic_id` bigint(20) DEFAULT NULL,
  `feature_id` bigint(20) DEFAULT NULL,
  `story_name` varchar(255) DEFAULT NULL,
  `story_points` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `reporter_id` bigint(20) DEFAULT NULL,
  `sprint_id` bigint(20) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `summary` text,
  `updated_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `story`
--

INSERT INTO `story` (`story_id`, `assignee_id`, `created_date`, `description`, `end_date`, `epic_id`, `feature_id`, `story_name`, `story_points`, `project_id`, `reporter_id`, `sprint_id`, `start_date`, `status`, `summary`, `updated_date`) VALUES
(2, 3, '2019-07-07T02:39:49.540Z', 'All Back end Failure Fixes in Shop Application.', '2019-07-25T18:30:00.000Z', 1, 1, 'Back end Failure Fixes', '17', 6, 3, 8, '2019-07-25T18:30:00.000Z', 'Work In Progress', 'All Back end Failure Fixes in Shop Application.', '2019-07-07T12:40:01.807Z');

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `task_id` bigint(20) NOT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `creator_id` bigint(20) DEFAULT NULL,
  `description` text,
  `end_date` varchar(255) NOT NULL,
  `estimated_time` varchar(255) DEFAULT NULL,
  `feature_id` bigint(20) DEFAULT NULL,
  `logged_time` varchar(255) DEFAULT NULL,
  `task_name` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL,
  `remaining_time` varchar(255) DEFAULT NULL,
  `sprint_id` bigint(20) DEFAULT NULL,
  `start_date` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `story_id` bigint(20) DEFAULT NULL,
  `summary` text,
  `updated_date` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`task_id`, `assignee_id`, `created_date`, `creator_id`, `description`, `end_date`, `estimated_time`, `feature_id`, `logged_time`, `task_name`, `project_id`, `remaining_time`, `sprint_id`, `start_date`, `status`, `story_id`, `summary`, `updated_date`) VALUES
(3, 1, '2019-06-24T02:39:11.462Z', 3, 'API automation for shop', '2019-06-26T18:30:00.000Z', '30', 1, '09', 'API automation', 6, '3', 3, '2019-06-20T18:30:00.000Z', 'Not Executed', 1, 'API automation', '2019-07-07T18:35:14.331Z');

-- --------------------------------------------------------

--
-- Table structure for table `test_case`
--

CREATE TABLE `test_case` (
  `test_case_id` bigint(20) NOT NULL,
  `assignee_id` bigint(20) DEFAULT NULL,
  `automation_status` varchar(255) DEFAULT NULL,
  `created_date` varchar(255) DEFAULT NULL,
  `creator_id` bigint(20) DEFAULT NULL,
  `expected_result` text,
  `feature_group_id` varchar(255) DEFAULT NULL,
  `feature_id` bigint(20) DEFAULT NULL,
  `priority` varchar(255) DEFAULT NULL,
  `severity` varchar(255) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `test_step` text,
  `test_case_title` varchar(255) NOT NULL,
  `updated_date` varchar(255) DEFAULT NULL,
  `project_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test_case`
--

INSERT INTO `test_case` (`test_case_id`, `assignee_id`, `automation_status`, `created_date`, `creator_id`, `expected_result`, `feature_group_id`, `feature_id`, `priority`, `severity`, `status`, `test_step`, `test_case_title`, `updated_date`, `project_id`) VALUES
(8, 1, 'Not Applicable', '2019-07-06T07:26:50.273Z', 3, '01. The user should be able to select a customer from the customer list and the selected customer should show under the \"Active Customer\" section.\n\n02. The user should be landed on the Products page', '13', 1, 'Medium', 'Low', 'Not Executed', '01. Login to the application as a App user.\n\n', ' Navigate and verify products.', '2019-07-07T18:18:22.656Z', 6);

-- --------------------------------------------------------

--
-- Table structure for table `test_case_feature_groups`
--

CREATE TABLE `test_case_feature_groups` (
  `group_id` bigint(20) NOT NULL,
  `feature_group_name` varchar(255) DEFAULT NULL,
  `feature_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test_case_feature_groups`
--

INSERT INTO `test_case_feature_groups` (`group_id`, `feature_group_name`, `feature_id`) VALUES
(22, 'Front end validation shop', 1),
(23, 'Back end validation shop', 1);

-- --------------------------------------------------------

--
-- Table structure for table `test_case_type`
--

CREATE TABLE `test_case_type` (
  `test_case_type_id` bigint(20) NOT NULL,
  `test_case_id` bigint(20) NOT NULL,
  `test_case_type_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `test_case_type`
--

INSERT INTO `test_case_type` (`test_case_type_id`, `test_case_id`, `test_case_type_name`) VALUES
(20, 5, 'regression'),
(21, 6, 'functional'),
(32, 7, 'functional'),
(36, 8, 'regression'),
(37, 10, 'functional'),
(38, 10, 'non functional'),
(39, 10, 'regression'),
(40, 10, 'smoke'),
(41, 11, 'functional'),
(42, 11, 'non functional'),
(43, 11, 'smoke'),
(44, 11, 'regression');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` bigint(20) NOT NULL,
  `user_address` varchar(255) DEFAULT NULL,
  `user_created_date` varchar(255) NOT NULL,
  `user_email` varchar(255) DEFAULT NULL,
  `user_enmp_id` varchar(255) NOT NULL,
  `user_fname` varchar(255) DEFAULT NULL,
  `user_lname` varchar(255) DEFAULT NULL,
  `user_password` varchar(255) DEFAULT NULL,
  `user_type` varchar(255) DEFAULT NULL,
  `user_updated_date` varchar(255) DEFAULT NULL,
  `user_username` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `user_address`, `user_created_date`, `user_email`, `user_enmp_id`, `user_fname`, `user_lname`, `user_password`, `user_type`, `user_updated_date`, `user_username`) VALUES
(3, 'Ishara', '2019-06-16T02:36:44.418Z', 'ishara@gmail.com', '10222', 'Ishara', 'gunasena', 'admin', 'Admin', '2019-07-07T02:17:27.781Z', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bugs`
--
ALTER TABLE `bugs`
  ADD PRIMARY KEY (`bug_id`);

--
-- Indexes for table `epic`
--
ALTER TABLE `epic`
  ADD PRIMARY KEY (`epic_id`);

--
-- Indexes for table `feature`
--
ALTER TABLE `feature`
  ADD PRIMARY KEY (`feature_id`);

--
-- Indexes for table `log_time_history`
--
ALTER TABLE `log_time_history`
  ADD PRIMARY KEY (`time_history_id`);

--
-- Indexes for table `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`pro_id`);

--
-- Indexes for table `project_users`
--
ALTER TABLE `project_users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sprint`
--
ALTER TABLE `sprint`
  ADD PRIMARY KEY (`sprint_id`);

--
-- Indexes for table `story`
--
ALTER TABLE `story`
  ADD PRIMARY KEY (`story_id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`task_id`);

--
-- Indexes for table `test_case`
--
ALTER TABLE `test_case`
  ADD PRIMARY KEY (`test_case_id`);

--
-- Indexes for table `test_case_feature_groups`
--
ALTER TABLE `test_case_feature_groups`
  ADD PRIMARY KEY (`group_id`);

--
-- Indexes for table `test_case_type`
--
ALTER TABLE `test_case_type`
  ADD PRIMARY KEY (`test_case_type_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bugs`
--
ALTER TABLE `bugs`
  MODIFY `bug_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `epic`
--
ALTER TABLE `epic`
  MODIFY `epic_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `feature`
--
ALTER TABLE `feature`
  MODIFY `feature_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `log_time_history`
--
ALTER TABLE `log_time_history`
  MODIFY `time_history_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `projects`
--
ALTER TABLE `projects`
  MODIFY `pro_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `project_users`
--
ALTER TABLE `project_users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `sprint`
--
ALTER TABLE `sprint`
  MODIFY `sprint_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- AUTO_INCREMENT for table `story`
--
ALTER TABLE `story`
  MODIFY `story_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `task_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
--
-- AUTO_INCREMENT for table `test_case`
--
ALTER TABLE `test_case`
  MODIFY `test_case_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT for table `test_case_feature_groups`
--
ALTER TABLE `test_case_feature_groups`
  MODIFY `group_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
--
-- AUTO_INCREMENT for table `test_case_type`
--
ALTER TABLE `test_case_type`
  MODIFY `test_case_type_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
