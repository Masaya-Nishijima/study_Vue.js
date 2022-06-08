var todo = new Vue({
  el: '#todoItem',
  data: {
    todos:[
      { text: 'memo 1', edit: true },
      { text: 'memo 2', edit: false }
    ],
    new_todo: 'new todo'
  },
  methods: {
    destroyTodo: function (todo_index) {
      this.todos.splice(todo_index, 1)
    },
    createTodo: function () {
      this.todos.push({text: this.new_todo, edit: false})
      this.new_todo = 'new todo'
    },
    changeMode: function (todo_index) {
      this.todos[todo_index].edit = !this.todos[todo_index].edit
    },
    exportTodo: function () {
      localStorage.clear()
      this.todos.forEach((todo, index) => {
        localStorage.setItem(index, todo.text)
      })
    },
    importTodo: function () {
      this.todos = []
      for (let index = 0; index < localStorage.length; index++) {
        let todo = {
          text: localStorage.getItem(localStorage.key(index)),
          edit: false
        }
        this.todos.push(todo)
      }
    }
  }
})
