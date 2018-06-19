
var config = {
    apiKey: "AIzaSyBTtOwODYpew7fpl3MBRy6PiTydLW46ll8",
    authDomain: "vuetodo-1af89.firebaseapp.com",
    databaseURL: "https://vuetodo-1af89.firebaseio.com",
    projectId: "vuetodo-1af89",
    storageBucket: "vuetodo-1af89.appspot.com",
    messagingSenderId: "1049113970688"
  };
  firebase.initializeApp(config);

var database = firebase.database();

var task = new Vue({
    el: '#task',
    data: {
        newTask:{
            id: 0,
            content: ''
        }
    },
    // firebase: {
    //     tasks: tasksRef
    // },
    methods: {
        addTask: function() {
            database.ref('tasks').push(this.newTask)
            this.newTask.id = ''
            this.newTask.content = ''
        }
    }
})




var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [{
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
})
var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!',
        variable: 'test'
    }
})