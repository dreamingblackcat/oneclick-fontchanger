// Copyright (c) 2012 dreamingblackcat. All rights reserved.
// Use of this source code is governed by MIT license that can be
// found in the LICENSE file.
function setFontSettings(storageKey){
	alert("Key Pressed!");
	chrome.storage.sync.get(storageKey,function(items){
		// Change Current Font Setting
		console.log("Setting is: " + items[storageKey]);
		chrome.fontSettings.setFont(
		    { genericFamily: 'sansserif', script: 'Zyyy', fontId: items[storageKey] }
		  ); 
		chrome.fontSettings.setFont(
		    { genericFamily: 'serif', script: 'Zyyy', fontId: items[storageKey] }
		  );
		chrome.fontSettings.setFont(
		    { genericFamily: 'standard', script: 'Zyyy', fontId: items[storageKey] }
		  );
	});	
}
chrome.commands.onCommand.addListener(function(command) {
		alert(" key");
  if(command === "first_font") {
  	alert("1 key");
 	setFontSettings('firstFontId');
    
  }
  if(command === "second_font") {
  	setFontSettings('secondFontId');
  }
});