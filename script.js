const todo = new Vue({
  el: '#todo-app',
  data: {
    todos: [],
    editingTodo: {index: null},

    newTodo: 'new todo'
  },
  created() {
    localStorage.getItem('todo-app').split(',').forEach(todo => {
      this.todos.push({text: todo})
    })
  },
  methods: {
    destroyTodo(todoIndex) {
      this.todos.splice(todoIndex, 1)
      this.exportTodos()
    },
    createTodo() {
      this.todos.push({ text: this.newTodo})
      this.newTodo = 'new todo'
      this.exportTodos()
    },
    changeMode(todoIndex) {
      if (todoIndex != this.editingTodo.index) {
        this.editingTodo.index = todoIndex
      } else {
        this.editingTodo.index = null
      }

      // this.todos[todoIndex].edit = !this.todos[todoIndex].edit
      this.exportTodos()
    },
    exportTodos() {
      toSaveTodos = []
      this.todos.forEach(todo => {
        toSaveTodos.push(todo.text)
      })
      localStorage.setItem("todo-app", toSaveTodos)
    }
  }
})
