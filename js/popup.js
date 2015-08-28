var searchURL = 'http://control.zake.com:3000'

$('document').ready(function(){
  $.ajax(searchURL).done(function(data){
    var hold = '<ul>';
    console.log(data);
    data.forEach(function(item){
      hold += '<li><input type="button" id="'+item.user+'" value="User: '+item.user+' Type: '+item.type+'" /></li>';
    });
    hold += '</ul>';
    $('#popup').append(hold);
  });
});
