function ShowTime(){    
    var date = new Date(); //Date is the object which is used to fetch the current date and time
    var hour = date.getHours(); //this object is created to fecth only hour from date object
    
    //now do the same thing for minute and second..
    var minute = date.getMinutes(); 
    var second = date.getSeconds();
    var session = "A.M.";

    // if(hour==0){
    //     hour = 12; 
    // }
    //presenting the 12 hour format
    if(hour>=12){
        hour = hour - 12; 
        session = "P.M.";
    }

    //to make the h:m:s format more perfect, everu time h,m,s will be shown in 2-digit format using ternary operator..
    hour = (hour<10)?"0"+hour:hour;
    minute = (minute<10)?"0"+minute:minute;
    second = (second<10)?"0"+second:second;
    //document.getElementById in JavaScript is used to access and retrieve an HTML element from the document by its unique ID.
    //document.getElementById("elementID").innerHTML retrieves and manipulates the HTML content inside the element with the specified ID.
    document.getElementById("DigitalClock").innerHTML = hour + ":" + minute + ":" + second + " " + session;

    /*clock is ready.But its not updating itself (we have to reload the page!!).to fix this, we have stored the code in ShowTime user-function and run it through setTimeout() function.*/
    //setTimeout() executes the specified function after the specified number of milliseconds. and it's syntax : setTimeout(function, milliseconds);
    setTimeout(ShowTime,1000)
    }
ShowTime();