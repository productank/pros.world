<?php
try{

$myRoot = $_SERVER["DOCUMENT_ROOT"];
include($myRoot . '/app/config/config.php');
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);


	$team1Players = $collectionAdmirals->find();

	$team1Players = json_encode(iterator_to_array($team1Players));

	$team2Players = $collectionDragons->find();

	$team2Players = json_encode(iterator_to_array($team2Players));

	$team3Players = $collectionThunder->find();

	$team3Players = json_encode(iterator_to_array($team3Players));

	$team4Players = $collectionCenturions->find();

	$team4Players = json_encode(iterator_to_array($team4Players));

	$data['success'] = true;
	$data['team1Players'] = $team1Players;
	$data['team2Players'] = $team2Players;
	$data['team3Players'] = $team3Players;
	$data['team4Players'] = $team4Players;



 
echo json_encode($data);

} catch (Exception $e){

    echo 'Caught exception: ',  $e->getMessage(), "";

}
