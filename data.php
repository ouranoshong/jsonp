<?php

$data = [ 'Hello' => 'World!' ];
$callback = json_encode($data);

if (isset($_REQUEST['callback'])) {
    $callback = $_REQUEST['callback'].'('.$callback.')';
}

header('Content-Type:application/json;charset=utf-8'); 

echo $callback;