<?php


class API {
    function Select(){
        include('connect.php');
        $postdata = file_get_contents("php://input");

        if(isset($postdata) && !empty($postdata)){
            $request = json_decode($postdata);
            $email = $request->email;
            $password = $request->password;

            //Store
            $users = array();
            $stmt = $conn->prepare("SELECT * FROM user WHERE email = ? AND  password = ?");
            $stmt->bind_param("ss", $email, $password);
            $stmt->execute();
            try{
                $result = $stmt->get_result();
            }catch(Exception  $e) {
                echo "Error";
            }
            foreach($resultset = $result->fetch_all(MYSQLI_ASSOC) as $row){
                $users[$row['userid']]= array(
                    'userid'=> $row['userid'],
                    'firstname'=> $row['firstname'],
                    'lastname'=> $row['lastname'],
                    'username'=> $row['username']
                );
                return json_encode($users);
            }

            $stmt->close();
            $conn->close();

        }

    }
}

$API = new API;
header('Content-Type: application/json');
echo $API->Select();
?>
