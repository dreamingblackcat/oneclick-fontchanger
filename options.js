// Copyright (c) 2012 dreamingblackcat. All rights reserved.
// Use of this source code is governed by MIT license that can be
// found in the LICENSE file.
function save_options() {
  var firstFontId = $('#first-fonts option:selected').val();
  var secondFontId = $('#second-fonts option:selected').val();
  chrome.storage.sync.set({
    firstFontId: firstFontId,
    secondFontId: secondFontId
  }, function() {
    // Update status to let user know options were saved.
    $('#status').text('Options saved as '+ firstFontId + "and " + secondFontId); 
    setTimeout(function() {
      $('#status').text('');
    }, 750);
  });
}
function first_selection_of($select, value){
  $select.children('.value')
    .text(value);
}
function restore_last_selection() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    'firstFontId': "Zawgyi-One",
    'secondFontId': "Noto Sans Myanmar"
  },function(items) {
      var $first_select_box = $("#first-select .select-container");
      var $second_select_box = $("#second-select .select-container");
      first_selection_of($first_select_box, items.firstFontId);
      first_selection_of($second_select_box, items.secondFontId);
  });
}
$(document).ready(function(){
  $('.fonts_for_select').append($('<div>',{class:"value"}));
  var $fonts_combo = $('.fonts_for_select');
  var $ul = $('<ul>',{class:"fonts_combo"});
  var $month_option = $('<li>',{class:"option"});
  chrome.fontSettings.getFontList(function(fonts){
    console.log(fonts);
      $.each(fonts,function(index,font){
        console.log(font.fontId);
        console.log($ul);
        $ul.append($month_option.clone().text(font.fontId));
      });
  $fonts_combo.append($ul);
  $('.select_container').click(function() {
      console.log("noway");
      $('.fonts_combo').toggle();
  });

  $('.fonts_combo').children('.option').click(function(){
    $('.fonts_for_select').children('.value').text($(this).text());
          console.log("noway");

  });

      // $.each(fonts,function(index,font){
      //   $('#first-fonts').append(
      //     "<option value='"+font.fontId+"'>"+font.displayName+"</option>"
      //     );
      //   $('#second-fonts').append(
      //     "<option value='"+font.fontId+"'>"+font.displayName+"</option>"
      //     );
      // });
  });
  restore_last_selection();
  $("#save").on("click",function(){
    save_options();
  });
});

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
