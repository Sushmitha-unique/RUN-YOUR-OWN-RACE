<?php

    if($_SERVER['REQUEST_METHOD']=='POST' && isset($_POST['submit']))
    {
        $conn = mysqli_connect('localhost','root','','student') or die("Connection Failed");

        if(isset($_POST['email']) && isset($_POST['password']) && isset($_POST['confirmpassword']))
        {
            $email = $_POST['email'];
            $password = $_POST['password'];
            $confirmpassword = $_POST['confirmpassword'];

            $sql = "INSERT INTO `signup` (`email`, `password`, `confirmpassword`)  VALUES ('$email','$password','$confirmpassword')";

          

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