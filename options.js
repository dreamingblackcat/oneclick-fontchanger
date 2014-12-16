// Copyright (c) 2012 dreamingblackcat. All rights reserved.
// Use of this source code is governed by MIT license that can be
// found in the LICENSE file.
function save_options() {
  console.log("starting save");
  var firstFontId = $('#first-fonts option:selected').val();
  var secondFontId = $('#second-fonts option:selected').val();
  console.log(firstFontId);
  chrome.storage.sync.set({
    firstFontId: firstFontId,
    secondFontId: secondFontId
  }, function() {
    // Update status to let user know options were saved.
    console.log("Saved!");
    $('#status').text('Options saved as '+ firstFontId + "and " + secondFontId); 
    setTimeout(function() {
      $('#status').text('');
    }, 750);
  });
}
function restore_last_selection() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    'firstFontId': "Zawgyi-One",
    'secondFontId': "Noto Sans Myanmar"
  },function(items) {
    alert("ITEMS THERE!");
    console.log(items);
    $("#first-fonts option[value='"+items.firstFontId+"']").attr("selected",true);
    $("#second-fonts option[value='"+items.secondFontId+"']").attr("selected",true);
  });
}
$(document).ready(function(){
  chrome.fontSettings.getFontList(function(fonts){
      $.each(fonts,function(index,font){
        $('#first-fonts').append(
          "<option value='"+font.fontId+"'>"+font.displayName+"</option>"
          );
        $('#second-fonts').append(
          "<option value='"+font.fontId+"'>"+font.displayName+"</option>"
          );
      });
  });
  restore_last_selection();
  $("#save").on("click",function(){
    save_options();
  });
});

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
