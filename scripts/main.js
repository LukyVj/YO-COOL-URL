// YoTizer is a simple JQUERY funvtion to add to your website, or anything, that will 
// Let you send YOs to one of your yo account. 
// You have to get your own API token in order to make it work.
 

$(document).ready(function(){
  
  var contentButton = 'YO';
  var url = document.URL;

  function yoTizer($urlToYo){

    $.ajax({
      url: "https://api.justyo.co/yoall/",
      type: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      processData: false,
      data: '{"api_token":"9f8b303d-5e99-546c-0b4c-735690bc1b64", "link":"'+ $urlToYo +'"}',
      success: function (data) {
        console.log(JSON.stringify(data));
      }, 
      error: function(){
        console.log("Cannot get data"); 
      }
    });
  }
 
  $('a#yo').on('click',function(){ 
      var customUrl = $('input#yoUrl').val();

    if($('input#yoUrl').val() == ''){
      yoTizer(url);
    }
   
    else{
      yoTizer(customUrl);
    }

    $('a#yo').empty().append('Yo Sent').css({
      background: '#89BB50',
      borderColor : '#6F9C3C',
      color: 'white'
    });
    setTimeout(function(){
      $('a#yo').empty().append(contentButton).css({
        background: 'transparent',
        borderColor : '#fff',
        color: 'white'
      });
    },3000)
  })
});