function save_options() {
  console.log("starting save");
  var fontId = $('#fonts option:selected').val();
  console.log(fontId);
  chrome.storage.sync.set({
    fontId: fontId
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    console.log("Saved!");
    status.textContent = 'Options saved as'+ fontId;
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}
$(document).ready(function(){
  chrome.fontSettings.getFontList(function(fonts){
    console.log(fonts);
      $.each(fonts,function(index,font){
        $('#fonts').append(
          "<option value='"+font.fontId+"'>"+font.displayName+"</option>"
          );
      });
  });
  $("#save").on("click",function(){
    save_options();
  });
});

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get('fontId', function(items) {
    document.getElementById('color').value = items.favoriteColor;
    $("#fonts option[value="+items.fontId+"]").attr("selected",true);
  });
}
// document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);