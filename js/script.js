$( document ).ready(function() {
    // alert( "ready!" );
getTasks();

});

const apiKey = 'fuck MLAB!!!!!!';


function getTasks(){
  $.get("https://api.mlab.com/api/1/databases/task_manager/collections/tasks?apiKey="+apiKey, function(data){
    console.log(data);
  });
}

  // https://api.mlab.com/api/1/databases/my-db/collections/my-coll?apiKey=myAPIKey
