function deleteRequest(url) {

  $.ajax({
    url: url,
    type: 'DELETE',
    success: function(result) {
      window.location.href = '/';
    }
  });

}
