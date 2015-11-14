var app = {
    initialize: function() {
        this.bindEvents();
        window.blackboxLogViewer = new BlackboxLogViewer();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {}, function(e) {});
    }
};

app.initialize();