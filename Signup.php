<?php
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        if(empty($_POST["sname"])){
            echo "Enter a name!";
        }
        else{
            $sname= trim($_POST["sname"]);
            $semail = trim($_POST["semail"]);
            $spwd = trim($_POST["spwd"]);
            $servername="localhost";
            $username = "root";
            $password = "";
            $dbname = "myDb";
            $conn = new mysqli($servername, $username, $password, $dbname);
            if ($conn->connect_error){
                die("Error". $conn->connect_error);
            }
            $sql = "INSERT INTO Details VALUES('$sname','$semail','$spwd')";
            if($conn->query($sql)){
                echo "Records Inserted";
            }
            else{
                echo "Error";
            }
        }
    }
?>