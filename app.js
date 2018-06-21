var config = {
    apiKey: "AIzaSyAsoGaVPSfQPjaZRpb5ru6TQ_otmDf-k7c",
    authDomain: "vue-todo-13c2b.firebaseapp.com",
    databaseURL: "https://vue-todo-13c2b.firebaseio.com",
    projectId: "vue-todo-13c2b",
    storageBucket: "vue-todo-13c2b.appspot.com",
    messagingSenderId: "177443944312"
  };
  firebase.initializeApp(config);

var tasksRef = firebase.database().ref('task');

var app = new Vue({
    el: '#app',
    data: {
        newTask: {
            content: ''
        },
        currentMessage: null,
        currentKey: null
    },
    firebase: {
        task: tasksRef
    },
    methods: {
        addTask: function() {
            if(this.newTask.content == ''){
                M.toast({html: 'You can not add empty task!'})
                return
            }
            tasksRef.push(this.newTask)
            M.toast({html: 'Added new task \"'+this.newTask.content+'\"'})
            this.newTask.content = ''
        },
        removeTask: function(task) {
            tasksRef.child(task['.key']).remove()
            M.toast({html: 'Task deleted!'})
        },
        edit: function(task) {
            this.currentMessage = task.content
            this.currentKey = task['.key']
        },
        save: function(newMessage, task) {
            tasksRef.child(task['.key']).update({content: newMessage})
            this.currentMessage = null
            this.currentKey = null
            M.toast({html: 'Changes saved!'})
        }
    }
})
