Vue = require("vue");
new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date()
    }
});
app2.message = 'some new message';


var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {
                text: 'Learn JavaScript'
            },
            {
                text: 'Learn Vue'
            },
            {
                text: 'Build something awesome'
            }
        ]
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
});