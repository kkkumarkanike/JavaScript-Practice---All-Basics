<?php
/**
 * Created by PhpStorm.
 * User: kkkum
 * Date: 11/29/2019
 * Time: 11:06 AM
 */
?>
<html>
<head>
    <title></title>
</head>
<body>
<center><h2 id="demo-counter"></h2></center>
<script>
    var endTime = new Date("Nov 29, 2019 11:35:20").getTime();
    var x = setInterval(function ()
    {
        var presentTime = new Date().getTime();
        var remaining = endTime - presentTime;
        //console.log(distance);
        //Calculating number of days

        var days = Math.floor(remaining/(1000 * 60 * 60 * 24));
        var hours = Math.floor(remaining % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
        var min = Math.floor(remaining % (1000 * 60 * 60 ) / (1000 * 60));
        var sec = Math.floor(remaining % (1000 * 60 ) / (1000));

        document.getElementById("demo-counter").innerHTML = days + " : " + hours + " : " + min + " : " + sec ;

        if (remaining < 0)
        {
            clearInterval(x);
            document.getElementById("demo-counter").innerHTML = "Expired";
        }


    },1000);
</script>
</body>
</html>
