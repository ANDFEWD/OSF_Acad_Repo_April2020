$(document).ready(function(){
  $("form").on('submit', function (e){
    e.preventDefault();
    

    let formdata = $( this ).serializeArray()

    var data = {};
$(formdata).each(function(index, obj){
    data[obj.name] = obj.value;
});
	// console.log(data);
    $('#myForm').reset();
    $.ajax ({
      type: 'POST',
      url: "/submit",
      data: data,
      success: function(data){
      	$('#successModal').modal('show')
      },
      error: function (data) {
        
        $('#errorModal').modal('show')
    }

  }); 
});
});

