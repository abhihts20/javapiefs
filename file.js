<!DOCTYPE html>

<html lang="">

<head>

    <meta charset="utf-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title></title>

</head>

 

<body>

<!--   <h1>This is a dialog box</h1>-->

    <script>

//        alert("only user who have verified their email can view this page")

//        confirm("you want to continue or not For continue click OK else cancel")

        var txt = confirm("you want to continue")

        if (txt == true){

            document.write("<h2>This is new: You pressed OK!</h2>");

        }else{

            document.write("<h2>This is boring:You pressed cancel");

        }
let a=parseInt(prompt("Enter a","Enter a number"));
let b=parseInt(prompt("Enter b","5"));
alert("result"+(a+b))

    </script>

</body>

</html>

