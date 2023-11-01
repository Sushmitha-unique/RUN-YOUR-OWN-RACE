<?php

    if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['submit']))
    {
        $conn = mysqli_connect('localhost','root','','student') or die("Connection Failed");

        if(isset($_POST['email']) && isset($_POST['password']))
        {
            $email = $_POST['email'];
            $password = $_POST['password'];

            $sql = "INSERT INTO `login` (`email`, `password`)  VALUES ('$email','$password')";

          

            if(mysqli_query($conn,$sql))
            {
                echo "Entry Successfull";
            }
            else
            {
                echo "Error Occured";
            }

        }
    }



?>