function default_portrait(){

    document.getElementById('search_img').src = 'user_portrait/default.png'
}


function userIconDisplay(portrait){

    icon_location = "user_portrait/" + portrait
    console.log(icon_location)

    var elem = document.createElement("img");
    elem.setAttribute("id", "search_img");
    elem.setAttribute("src", "user_portrait/" + portrait);
    elem.setAttribute("onerror", "default_portrait()");
    elem.setAttribute("height", "150");
    elem.setAttribute("width", "150");

    // elem.setAttribute("alt", "Flower");
    document.getElementById("user_icon_bySearch").appendChild(elem);
};

function userNameDisplay(user_name){
    document.getElementById("user_name_bySearch") .innerHTML = user_name;
};

function userlevelDisplay(user_level){

    document.getElementById("level_bySearch") .innerHTML +="<div id=side_userlevel> <img src=icon/diamond.png /> <div>&nbsp;Level "+user_level+"</div> </div>" ;
};


function onHoldDisplay(onHoldStock,lang){

if (lang == "chi" && (onHoldStock > 0) ){
    document.getElementById("onHold_bySearch") .innerHTML +="<div class=side_onHoldStock>&nbsp;現持有土地：  <span class='onholdnum'>"+onHoldStock+"</span></div>" ;
}

else if (lang == "chi" ){
    document.getElementById("onHold_bySearch") .innerHTML +="<div class=side_onHoldStock>&nbsp;現持有土地： "+onHoldStock+"</div>" ;
}

else if(lang != "chi" && (onHoldStock > 0)) {
    document.getElementById("onHold_bySearch") .innerHTML +="<div class=side_onHoldStock>&nbsp;Land On Hold：   <span class='onholdnum'>"+onHoldStock+"</span></div>" ;
}

else if(lang != "chi") {
    document.getElementById("onHold_bySearch") .innerHTML +="<div class=side_onHoldStock>&nbsp;Land On Hold: "+onHoldStock+"</div>" ;
}


}



function map_location(userObject,non_developed,lang){
    var index = 1;
 

    for (var key of Object.keys(userObject)) {
        var lan_keyName = "l"+index+"_lan";
        var lng_keyName = "l"+index+"_lng";
        var lan_value = parseFloat(userObject[lan_keyName])
        var lng_value = parseFloat(userObject[lng_keyName])

        if(!isNaN(lan_value)){
            let btn = document.createElement("button");
            //btn.innerHTML = "Land  " + index;
            btn.innerHTML += "<div id=land_button> <img src=icon/locate.png /> <div>Land "+ index+"</div>  <div id=side_landShape> </div> "


            const lan_value_input = lan_value;
            const lng_value_input = lng_value;   
            btn.onclick = function () {
                // map.setView([lan_value_input,lng_value_input], 16);
                map.flyTo([lan_value_input,lng_value_input], 16, {
                    animate: true,
                    duration: 1 // in seconds
                  });
   
              };
            document.getElementById("land_loaction").appendChild(btn);
        }
        index++;
    }

    if (lang == "chi"){
        console.log(userObject)
        document.getElementById("idel_bySearch") .innerHTML +="<div class=side_onHoldStock>&nbsp;尚未開發土地：  "+non_developed+"</div>" ;
    }

    else if(lang != "chi"){
        document.getElementById("idel_bySearch") .innerHTML +="<div class=side_onHoldStock>&nbsp;Not Yet Developed：  "+non_developed+"</div>" ;

    }


    
    for (let i = 0; i < non_developed; i++){
        let btn = document.createElement("button");
        btn.innerHTML += "<div id=land_button> <span class='lock_icon'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><!--! Font Awesome Pro 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d='M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z'/></svg></span> <div id='lock_btn'>Locked</div>  <div id=side_land_lock> </div> "
        document.getElementById("idel_loaction").appendChild(btn);
        index++;
    }





};

function validSearch(userCode){
    var cleanInput = parseInt(userCode);
    var user_info = JSON.parse(user_dataset);
    if(user_info[cleanInput] == undefined){
        document.getElementById("user_icon_bySearch").innerHTML = "";
        document.getElementById("user_name_bySearch").innerHTML = "沒有記錄  <br>  No Record Found";
    }
    userIconDisplay(user_info[cleanInput].portrait)
    userNameDisplay(user_info[cleanInput].name)
    userlevelDisplay(user_info[cleanInput].level)
    userCodeDisplay(user_info[cleanInput].c_code,user_info[cleanInput].lang)
    onHoldDisplay(user_info[cleanInput].developed,user_info[cleanInput].lang)
    map_location(user_info[cleanInput],user_info[cleanInput].non_developed,user_info[cleanInput].lang)
    setQueryStringParameter('userid',cleanInput)
    var currentUrl = window.location
    console.log(currentUrl) 


    var shareButton = document.getElementById('profileShare');
    shareButton.addEventListener('click', listnerparam,false); 
    shareButton.usercodedata = cleanInput

}


function userCodeDisplay(user_code,lang){

    if (lang == "chi"){
        document.getElementById("user_code_bySearch") .innerHTML += "<div id=user_code_side> 挑戰者 0" + user_code + "</div>";    
    }
    else {
        document.getElementById("user_code_bySearch") .innerHTML += "<div id=user_code_side> Challenger 0" + user_code + "</div>";
    }

    document.getElementById("share_button_bySearch") .innerHTML += '<button id="profileShare"> <div>Share &nbsp</div> <i class="fa fa-share"></i></button>';
};


function getCodeInput(){
document.getElementById("user_icon_bySearch").innerHTML = "";
document.getElementById("land_loaction").innerHTML = "";
document.getElementById("user_code_bySearch") .innerHTML = "";
document.getElementById("share_button_bySearch") .innerHTML = "";
document.getElementById("level_bySearch") .innerHTML = "";
document.getElementById("onHold_bySearch") .innerHTML = "";
document.getElementById("idel_loaction") .innerHTML = "";
document.getElementById("idel_bySearch") .innerHTML = "";






var userCode;
var numbers = /^[0-9]+$/;
userCode = document.getElementById("user_input").value;


if(userCode.match(numbers)){

    validSearch(userCode);


 
}




else{
    document.getElementById("user_name_bySearch").innerHTML = "";
    alert('請輸入有效的挑戰編號 \r\n Please Enter The Valid Challenge Code');
    return false;
}

}


function setQueryStringParameter(name, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(name, value);
    window.history.replaceState({}, "", decodeURIComponent(`${window.location.pathname}?${params}`));
}


function listnerparam(evt){
    shareProfile(evt.currentTarget.usercodedata);
  }