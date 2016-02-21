<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);

date_default_timezone_set('America/Los_Angeles');
ini_set('mongo.native_long', 1);

session_start();
$root = realpath($_SERVER["DOCUMENT_ROOT"]);

$m = new MongoClient('mongodb://prosh5:neptune21@ds013848.mongolab.com:13848/pros'); // connect

$db= $m->pros;

$DB = new MongoCollection($db, 'main');
$collectionPlays = $DB->plays;

$collectionPlays = $DB->plays;
$collectionAdmirals = $DB->team1;
$collectionDragons = $DB->team2;
$collectionThunder = $DB->team3;
$collectionCenturions = $DB->team4;

$date = date('Y-m-d H:i:s');










