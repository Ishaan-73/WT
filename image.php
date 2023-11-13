<?php
    if($_FILES['image']['error']>0){
        echo "Error";
    }
    else{   
        if(isset($_FILES["image"])){
            $file_name = $_FILES["image"]['name'];
            $file_size = $_FILES['image']['size'];
            $file_type = $_FILES['image']['type'];
            $file_tmp  = $_FILES['image']['tmp_name'];
            echo "Ishaan";
            $temp = explode('.',$file_name);
            $file_ext = end($temp);
            $extensions = array("jpeg","jpg","png");
            if(in_array($file_ext,$extensions)==false){
                $error[] = "Image daalo";
            }
            if($file_size>2097152){
                $error[] = "File must be less than 2MB in size";
            }
            if(empty($error)){
                move_uploaded_file($file_tmp,"./images/".$file_name);
                echo "Success!";
            }
            else{
                print_r($error);
            }

        }
    }
?>