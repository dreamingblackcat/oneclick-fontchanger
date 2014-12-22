// Copyright (c) 2012 dreamingblackcat. All rights reserved.
// Use of this source code is governed by MIT license that can be
// found in the LICENSE file.
function save_options() {
  var firstFontId = $('.first-select').find('.value').text();
  var secondFontId = $('.second-select').find('.value').text();
  chrome.storage.sync.set({
    firstFontId: firstFontId,
    secondFontId: secondFontId
  }, function() {
    // Update status to let user know options were saved.
    $('#status').text('Options saved as '+ firstFontId + " and " + secondFontId); 
    setTimeout(function() {
      $('#status').text('');
    }, 1400);
  });
}
function first_selection_of($select, value){
  $select.find('.value')
    .text(value);
}
function restore_last_selection() {
  // Use default value color = 'red' and likesColor = true.
  chrome.storage.sync.get({
    'firstFontId': "Zawgyi-One",
    'secondFontId': "Noto Sans Myanmar"
  },function(items) {
      var $first_select_box = $(".first-select .select_container");
      var $second_select_box = $(".second-select .select_container");
      console.log($first_select_box.length);
      console.log(items.firstFontId);
      console.log("going into func");
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
        $(this).find('.fonts_combo').toggle();
    });

    $('.fonts_combo').children('.option').click(function(){
      $(this).parents('.select_container').find('.value').text($(this).text());

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
