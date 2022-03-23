// if (navigator.userAgent.indexOf('Win') != -1) {
//   os = "PC"
// } 
var os = "unknown"

if( navigator.userAgent.match(/iPhone/i)
|| navigator.userAgent.match(/webOS/i)
|| navigator.userAgent.match(/Android/i)
|| navigator.userAgent.match(/iPad/i)
|| navigator.userAgent.match(/iPod/i)
|| navigator.userAgent.match(/BlackBerry/i)
|| navigator.userAgent.match(/Windows Phone/i)
)
{
 os = "mobile"
 }

console.log(os)


function shareProfile(cleanInput){
 
  var user_info = JSON.parse(user_dataset);

 var language = user_info[cleanInput].lang
 var onhold = user_info[cleanInput].developed
  
  
  //Mobile
    if (navigator.share & os == "mobile") {


        if (language = 'chi'){
          navigator.share({
            title: '⚜️點擊連結，進入屬於我的110x挑戰虛擬土地🗺 🏘',
            text: '⚜️點擊連結，進入屬於我的110x挑戰虛擬土地🗺 🏘 \n現擁有土地:'+onhold+'\n https://hkscout110.scout.org.hk/metaverse/?userid='+cleanInput
          }).then(() => {
            console.log('Thanks for sharing!');
          })
          .catch(console.error);
        }
        else{
          navigator.share({
            title: '⚜️Click the URL below to get into my 110x challenge land 🗺 🏘',
            text: '⚜️Click the URL below to get into my 110x challenge land 🗺 🏘\nNumber of land stocked:'+ onhold +'\n https://hkscout110.scout.org.hk/metaverse/?userid='+cleanInput
          }).then(() => {
            console.log('Thanks for sharing!');
          })
          .catch(console.error);
        }

    } 
  
    //Web
    else {
      console.log(os)
      var text = 'https://hkscout110.scout.org.hk/metaverse/?userid='+cleanInput;
      navigator.clipboard.writeText(text).then(function() {
  
        document.getElementById("coppyShare").innerHTML = ""
        document.getElementById("coppyShare").innerHTML += "<div id='copypopup'>成功複製連結 <br> Link Copy Successfully </div>"
  
  
  
  
      }, function(err) {
        console.error('Async: Could not copy text: ', err);
      });
  
      }





  }
  
  