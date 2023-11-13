<?php
if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(empty($_POST["email"])){
        echo "Enter a email!";
    }
    else{
        $servername="localhost";
        $username = "root";
        $password = "";
        $dbname = "myDb";
        $email = trim($_POST['email']);
        $pwd = trim($_POST['pwd']);

        $conn = new mysqli($servername, $username, $password, $dbname);
        if ($conn->connect_error) {
            die("Error". $conn->connect_error);
        }
        $sql = "SELECT * from Details WHERE `Email`='$email' AND `Password`='$pwd'";
        $result = $conn->query($sql);
        if($result->num_rows > 0){
            echo "Logged In Successfully";
            header("Location: success.html");
            exit();
        }            
        else{
            echo "Invalid Credentials!";
        }
    }
    
}
else{
    echo "Server Error";
}
?>