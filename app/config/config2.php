<?php
error_reporting (E_ALL ^ E_NOTICE);
//error_reporting(E_ALL);
date_default_timezone_set('America/Los_Angeles');
ini_set('mongo.native_long', 1);

session_start();
$root = realpath($_SERVER["DOCUMENT_ROOT"]);
$cookie_name = "gamerholic";
$uid = "ace7ecca-fdde-4362-b448-17f55e75255a";

include('qrCode.php');

require_once ''.$root.'/vendor/autoload.php';
use Mailgun\Mailgun;

$mgClient = new Mailgun('key-3b68ddab825855b198e25105500c0fc1');
$domain = "gamerholic.com";


$stripe = array(
  "secret_key"      => "08SxAVFWynuz1Jo1Ny4qYqgsE87pj7bx",
  "publishable_key" => "pk_SOcVcxfKfxOQX7QsGbriRZDDKJAia"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);

use Firebase\Token\TokenGenerator;
 $generator = new TokenGenerator('JRNn33iWfYBnSGlgrMU2sgS7AuuwMtEzjDB6GEVp');
    $token = $generator
        ->setData(array('uid' => $uid))
        ->create();

const DEFAULT_URL = 'https://gamerholic2-0.firebaseio.com/';
const DEFAULT_TOKEN = 'JRNn33iWfYBnSGlgrMU2sgS7AuuwMtEzjDB6GEVp';
const DEFAULT_PATH = '/app';

$firebase = new \Firebase\FirebaseLib(DEFAULT_URL, DEFAULT_TOKEN);


$m = new MongoClient('mongodb://hackthisIllKillyou:JQUzYf7R09555g814SRhv@ds027751.mongolab.com:27751/gamerholic'); // connect

$db= $m->gamerholic;

//site
$siteDB = new MongoCollection($db, 'gamerholic');
$collectionCoin = $siteDB->coinPrice;

///gamer
$gamerDB = new MongoCollection($db, 'gamers');
$collectionGamer = $gamerDB->ttourmember;
$collectionGamerActions = $gamerDB->actions;
$collectionGamerWallet = $gamerDB->wallet;
$collectionGamerPassword = $gamerDB->password_reset;


///grabbit
$grabbitDB = new MongoCollection($db, 'grabbit');
$collectionGrabbit = $grabbitDB->active;
$collectionGrabbitPractice = $grabbitDB->practice;
$collectionGrabbitPlay = $grabbitDB->play;
$collectionGrabbitBuy = $grabbitDB->buyTools;
$collectionGrabbitPrize = $grabbitDB->prizeWon;

$date = date('Y-m-d H:i:s');










