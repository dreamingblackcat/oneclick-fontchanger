// Copyright (c) 2012 dreamingblackcat. All rights reserved.
// Use of this source code is governed by MIT license that can be
// found in the LICENSE file.
function setFontSettings(storageKey){
	
	chrome.storage.sync.get(storageKey,function(items){
		// Change Current Font Setting
		if(!items[storageKey]){
			items[storageKey] = "Zawgyi-One"; //fall back to zawgyi if nothing in local storage 
		}
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
		
  if(command === "first_font") {
  	
 	setFontSettings('firstFontId');
    
  }
  if(command === "second_font") {
  	setFontSettings('secondFontId');
  }
});