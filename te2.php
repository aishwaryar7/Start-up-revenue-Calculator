<?php 
error_reporting(0);
ini_set('max_execution_time', 600);
system("python submission.py");
$con=mysqli_connect('localhost','root','');
$db=mysqli_select_db($con,'Data');
$row = 1;
if (($handle = fopen("submit.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle,'EOF', ",")) !== FALSE) {
        $num = count($data);
        //echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        $query="Insert into Prediction values('".$data[0]."','".$data[1]."')";
        $data=mysqli_query($con,$query);
        if(!$data) 
        	echo "Error";

    }
    fclose($handle);
}
if (($handle = fopen("test.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle,'EOF', ",")) !== FALSE) {
        $num = count($data);
        //echo "<p> $num fields in line $row: <br /></p>\n";
        $row++;
        $query="Insert into test values('".$data[0]."','".$data[1]."','".$data[2]."','".$data[3]."','".$data[4]."')";
        $data=mysqli_query($con,$query);
        if(!$data) 
        	echo "Error";

    }
    fclose($handle);
}
?>