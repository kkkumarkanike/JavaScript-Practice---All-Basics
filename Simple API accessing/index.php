<html>
   <head>
       <title>

       </title>
   </head>
   <body>

   </body>
</html>
<script>
    //Creating a XMLHTTPRequest()

    var request = new XMLHttpRequest();

    //Opening the request

    request.open('GET','https://www.googleapis.com/books/v1/volumes?maxResults=20&q=php',true);

    //Loading the Request

    request.onload = function () {

        // function for accessing data after getting the response

        var data = JSON.parse(this.response);
        console.log(data.items);
        let arr = data.items;

        arr.forEach(showData);

    }
    function showData(data)
    {
        //Showing required data

        console.log(data.id);
        var bookInfo = data.volumeInfo;
        console.log(bookInfo["title"]);
        console.log(bookInfo["authors"]);
        console.log(bookInfo["imageLinks"]["smallThumbnail"]);
        console.log("\n");

    }
    // If all set the request will be sent

    request.send();

</script>