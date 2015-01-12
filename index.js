(function(){

  'use strict';

  function initFileReader() {
    if (!window.ie || !window.jQuery) {
      return;
    }

    $('input[type="file"]').fileReader({
      id: 'fileReaderSWFObject',
      filereader: 'filereader.swf',
      expressInstall: 'expressInstall.swf',
      debugMode: true,
      callback: function() {}
    });
  }

  function ViewModel() {
    this.value = ko.observable('');
    this.event = ko.observable('');
  
    this.change = (function(target, event) {
      this.event(JSON.stringify(event.target.files[0]));
    }).bind(this);
  
    this.reset = (function() {
      this.value('');
      this.event('');
      initFileReader();
    }).bind(this);
  }
  
  ko.applyBindings(new ViewModel);

  !!window.jQuery && $(initFileReader);
  
}());
