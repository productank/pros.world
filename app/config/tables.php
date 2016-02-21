<?php
try{

$myRoot = $_SERVER["DOCUMENT_ROOT"];
include($myRoot . 'config.php');



// $query = "DROP TABLE IF EXISTS gamers"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE gamers(id SERIAL PRIMARY KEY, name VARCHAR(25), email VARCHAR(50), avartar VARCHAR(25), uid VARCHAR(50))";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "DROP TABLE IF EXISTS wallet"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE wallet(id SERIAL PRIMARY KEY, grabs INT, slaps INT, grabsFree INT, slapsFree INT, holesFree INT, blocks INT, blocksFree INT, uid VARCHAR(50), GHCAddress VARCHAR(30), GHCKEY VARCHAR(50),GHCSECRET VARCHAR(50) )";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "DROP TABLE IF EXISTS grabbit"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE grabbit(id SERIAL PRIMARY KEY,title VARCHAR(50),bitcoinAmount INT, prize VARCHAR(50), grabsFree INT, winner VARCHAR(50), completed INT, started INT, repost INT, slapper VARCHAR(50),startExire VARCHAR(25),grabExpire VARCHAR(25), ready INT, max INT,playersMin INT,playersMax INT,playersReady INT)";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "INSERT INTO grabbit VALUES(1,'0.02 BTC FREE',0.02,'bitcoin',0,0,0,0,0,0,0,0,0,0,3,20,0)"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "DROP TABLE IF EXISTS grabbitPlayers"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE grabbitPlayers(id SERIAL PRIMARY KEY, uid VARCHAR(50), grabsUsed INT, slapsUsed INT, holesUsed INT, grabsLeft INT, holesLeft INT, slapsLeft INT, seatExpire VARCHAR(25) )";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "DROP TABLE IF EXISTS grabbitGrabs"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE grabbitGrabs(id SERIAL PRIMARY KEY, uid VARCHAR(50), gamer VARCHAR(50), grabDate VARCHAR(25), grabExpire VARCHAR(50) )";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "DROP TABLE IF EXISTS grabbitHole"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE grabbitHole(id SERIAL PRIMARY KEY, uid VARCHAR(50), holeDate VARCHAR(50), active INT )";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "DROP TABLE IF EXISTS grabbitWon"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE grabbitWon(id SERIAL PRIMARY KEY, uid VARCHAR(50), winDate VARCHAR(50), gameID VARCHAR(35), prize VARCHAR(25),bitcoinAmount VARCHAR )";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "DROP TABLE IF EXISTS withdraw"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

// $query = "CREATE TABLE withdraw(id SERIAL PRIMARY KEY, uid VARCHAR(50), withdrawDate VARCHAR(50), active INT, amount INT, currency VARCHAR(10), doneDate VARCHAR(25), txid VARCHAR(50) )";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");
		
// $query = "CREATE TABLE grabbitPractice(id SERIAL PRIMARY KEY,title VARCHAR(50),bitcoinAmount INT,details VARCHAR(100), prize VARCHAR(50), grabsFree INT, winner VARCHAR(50), completed INT, started INT, repost INT, slapper VARCHAR(50),startExire VARCHAR(25),grabExpire VARCHAR(25), ready INT, max INT,playersMin INT,playersMax INT,playersReady INT)";  
// pg_query($dbh, $query) or die("Cannot execute query: $query\n");

// $query = "INSERT INTO grabbitPractice VALUES(1,'Practice',0.00,'practice, practice, practice', 'Practice',0,0,0,0,0,0,0,0,0,0,3,20,0)"; 
// pg_query($dbh, $query) or die("Cannot execute query: $query\n"); 

pg_close($dbh);
echo json_encode($data);

} catch(PDOException $e){
      echo $e->getMessage();
}