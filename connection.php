<?php 
error_reporting(0);
ini_set('max_execution_time', 600);

$con=mysqli_connect('localhost','root','');
$db=mysqli_select_db($con,'Data');

$City=$_POST['citySelect'];
$date=$_POST['openDate'];

system("python submission.py");

if (($handle = fopen("submit.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle,'EOF', ",")) !== FALSE) {
        #$num = count($data);
        $query="Insert into Prediction values('".$data[0]."','".$data[1]."')";
        $data=mysqli_query($con,$query);
        if(!$data) 
        	echo "Error";

    }
    fclose($handle);
}

if (($handle = fopen("submit_rf.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle,'EOF', ",")) !== FALSE) {
        #$num = count($data);
        $query="Insert into random values('".$data[0]."','".$data[1]."')";
        $data=mysqli_query($con,$query);
        if(!$data) 
            echo "Error";

    }
    fclose($handle);
}

$year=substr($date,0,4);
$query="SELECT avg(Prediction) FROM prediction WHERE Id IN(SELECT Id FROM test where City='$City' AND Date LIKE '%$year')";
$data=mysqli_query($con,$query);
if(!$data) 
    echo "Error";
$value = mysqli_fetch_row($data);

$query1="SELECT avg(Prediction) FROM random WHERE Id IN(SELECT Id FROM test where City='$City' AND Date LIKE '%$year')";
$data1=mysqli_query($con,$query1);
if(!$data1) 
    echo "Error";
$value1 = mysqli_fetch_row($data1);

$arr=array();
$arr[0]=$value[0];
$arr[1]=$value1[0];
echo json_encode($arr);

?>