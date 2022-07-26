/*var likeCount = document.querySelector('#likeCount');
//var dislikeCount = document.querySelector('#dislikeCount');

//function count(){
  //likeCount.value = parseInt(likeCount.value) + 1;
}

//function count1(){
  //dislikeCount.value = parseInt(dislikeCount.value) + 1;
}*/

var ip='';
var likeCount = document.querySelector('#likeCount');
var dislikeCount = document.querySelector('#dislikeCount');
/*$.get("https://ipinfo.io", function(response) {
  ip =response.ip;
}, "json")*/
//console.log(document.title);
function count(){
  $.ajax({
    url:'https://vi-tech.com.ng/testblog/blog_engine/save_data.php',
  // url:'http://localhost/testblog/blog_engine/save_data.php',
    method:'POST',
    data:{option:1,slug:document.title},
    success:function(response){
     //  console.log(response);
       var rep = JSON.parse(response); 
       if(rep)
    {
      likeCount.value = rep.likes;
      dislikeCount.value = rep.dislikes;
    }
    },
error: function(err){
    console.log(err);
}
});
}

function count1(){
  $.ajax({
    url:'https://vi-tech.com.ng/testblog/blog_engine/save_data.php',
  //url:'http://localhost/testblog/blog_engine/save_data.php',
    method:'POST',
    data:{option:0,slug:document.title},
    success:function(response){
    //   console.log(response);
       var rep = JSON.parse(response); 
       if(rep)
    {
      likeCount.value = rep.likes;
      dislikeCount.value = rep.dislikes;
    }
    },
error: function(err){
    console.log(err);
}
});
}