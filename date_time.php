<!DOCTYPE html>
<html>

<head>
    <title>3rd Lab Program</title>
    <meta http-equiv="refresh" content="1">
    <style>
        body {
            position: absolute;
            top: 50%;
            left: 50%;
            background-color: black;
            color: white;
            font-size: 50px;
        }
    </style>
</head>

<body>
    <div>
        <?php
        date_default_timezone_set("Asia/Calcutta");
        echo date("h:i:s a");
        ?>
    </div>
</body>

</html>