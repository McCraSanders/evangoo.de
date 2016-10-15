<?php
	$address = $_SERVER['REMOTE_ADDR'];
	exec("bash pushbullet.sh $address");
	header('Location: http://evangoo.de/pinkberry/data.csv');
	die();
?>
