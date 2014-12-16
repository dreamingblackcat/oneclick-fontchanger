// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.commands.onCommand.addListener(function(command) {
  if (command === "to_zawgyi") {
  	console.log("Retreving Setting..");
  	chrome.storage.sync.get('fontId',function(items){
  		// Change Current Font Setting
  		console.log("Setting is: " + items.fontId);
  		chrome.fontSettings.setFont(
  		    { genericFamily: 'sansserif', script: 'Zyyy', fontId: items.fontId }
  		  ); 
  		chrome.fontSettings.setFont(
  		    { genericFamily: 'serif', script: 'Zyyy', fontId: items.fontId }
  		  );
  		chrome.fontSettings.setFont(
  		    { genericFamily: 'standard', script: 'Zyyy', fontId: items.fontId }
  		  );
  	});
    
  }
  if (command === "to_unicode") {
  	alert("LDKJFLKDJFL:KJF");

    // Change Current Font Setting
    chrome.fontSettings.setFont(
        { genericFamily: 'sansserif', script: 'Zyyy', fontId: 'Noto Sans Myanmar' }
      ); 
    chrome.fontSettings.setFont(
        { genericFamily: 'serif', script: 'Zyyy', fontId: 'Noto Sans Myanmar' }
      );
    chrome.fontSettings.setFont(
        { genericFamily: 'standard', script: 'Zyyy', fontId: 'Noto Sans Myanmar' }
      );
  }
});