<?php
	require_once 'conn.php';
	
	if($_GET['task_id'] != ""){
		$task_id = $_GET['task_id'];
		
		$conn->query("UPDATE `task` SET `status` = 'Done' WHERE `task_id` = $task_id");
		header('location: index.php');
	}
?>