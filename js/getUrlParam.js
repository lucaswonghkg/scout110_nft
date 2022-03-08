const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userid = urlParams.get('userid');

var cleanInput = userid

var numbers = /^[0-9]+$/;

if (cleanInput == null){
    console.log('direct')
}

else{
    if(userid.match(numbers)){
        validSearch(cleanInput);
        openNav();
    }
    
    function openNav() {
        document
            .getElementById("mySidenav")
            .style
            .width = "250px";
    }


}





// if(cleanInput.match(numbers)){

//     var cleanInput = parseInt(cleanInput);
//     var user_info = JSON.parse(user_dataset);
//     openNav();
//     if(user_info[cleanInput] == undefined){
//         document.getElementById("user_icon_bySearch").innerHTML = "";
//         document.getElementById("user_name_bySearch").innerHTML = "沒有記錄  <br>  No Record Found";
//     }

//     userIconDisplay(user_info[cleanInput].portrait);
//     userNameDisplay(user_info[cleanInput].name);
//     userlevelDisplay(user_info[cleanInput].level);
//     userCodeDisplay(user_info[cleanInput].c_code);
//     onHoldDisplay(user_info[cleanInput].developed);
//     map_location(user_info[cleanInput]);
//     }


 




