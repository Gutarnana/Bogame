<?php

    require_once('./db.php');
    
    try {
        if($_SERVER['REQUEST_METHOD'] == 'GET'){
            $object = new stdClass();

            $stmt = $db->prepare('select * from sp_product order by id desc');

            if($stmt->execute()){
                $num = $stmt->rowCount();
                if($num > 0){
                    $object->Result = array();
                    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
                        extract($row);
                        // $items = array(
                        //     "thisisname"=> $name,
                        //     "thisisprice"=> $price,
                        // );
                        array_push( $object->Result , $row );
                    }
                    $object->Respcode = 200;
                    $object->RespMessage = 'sucess';
                    http_response_code(200);
                }
                else{
                    $object->Respcode = 400;
                    $object->Log = 0;
                    $object->RespMessage = 'bab:not found data';
                    http_response_code(400);
                }

                echo json_encode($object);
            }
            else {
                $object->Respcode = 500;
                    $object->Log = 1;
                    $object->RespMessage = 'bab:not found sql';
                    http_response_code(400);
            }

        }
        else{
             http_response_code(405);
        }
    }

    catch(PEOException $e) {
        http_response_code(500);
        echo $e->getMessage();
    }
?>