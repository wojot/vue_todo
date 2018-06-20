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
        }
    },
    firebase: {
        task: tasksRef
    },
    methods: {
        addTask: function() {
            tasksRef.push(this.newTask)
            this.newTask.content = ''
        },
        removeTask: function(task) {
            tasksRef.child(task['.key']).remove()
        },
        edit: function(key) {
            var inner = document.getElementById('edit'+key).innerHTML
            if(inner == 'Save'){
                document.getElementById('edit'+key).innerHTML = 'Edit'
                document.getElementById('editInput'+key).disabled = true
                var newContent = document.getElementById('editInput'+key).value
                tasksRef.child(key).update({content: newContent})
                tasksRef.child(key).remove()
                M.toast({html: 'Changes saved!'})
            } else if(inner == 'Edit') {
                document.getElementById('edit'+key).innerHTML = 'Save'
                document.getElementById('editInput'+key).disabled = false
            }
        }
    }
})
