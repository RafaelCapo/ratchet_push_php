
    var conn = new ab.Session('ws://localhost:8080',
        function() {
            conn.subscribe('feed', function(topic, data) {
                // This is where you would add the new article to the DOM (beyond the scope of this tutorial)
                // console.log('New article published to category "' + topic + '" : ' + data.title);
                // console.log(data);
                createDom(data);
            });
        },
        function() {
            console.warn('WebSocket connection closed');
        },
        {'skipSubprotocolCheck': true}
    );

    function createDom(data) {
        var box_content = document.getElementById('box_content');
        var copy_content = box_content.innerHTML;

        box_content.innerHTML = '<div class="box_news"><h1>' + data.title + '</h1><p>' + data.message + '</p><div class="box_img"><img src="' + data.photo + '" alt="" title=""></div><p class="dt_pub">' + data.date + '</p></div>' + copy_content;
    }
