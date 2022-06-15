const todo = new Vue({
  el: '#todo-app',
  data: {
    todos: [],
    newTodo: 'new todo'
  },
  created() {
    this.todos = []
    for (let index = 0; index < localStorage.length; index++) {
      const todo = {
        text: localStorage.getItem(localStorage.key(index)),
        edit: false
      }
      this.todos.push(todo)
    }
  },
  methods: {
    destroyTodo(todoIndex) {
      this.todos.splice(todoIndex, 1)
      this.exportTodos()
    },
    createTodo() {
      this.todos.push({ text: this.newTodo, edit: false })
      this.newTodo = 'new todo'
      this.exportTodos()
    },
    changeMode(todoIndex) {
      this.todos[todoIndex].edit = !this.todos[todoIndex].edit
      this.exportTodos()
    },
    importTodos() {
      this.todos = []
      for (let index = 0; index < localStorage.length; index++) {
        const todo = {
          text: localStorage.getItem(localStorage.key(index)),
          edit: false
        }
        this.todos.push(todo)
      }
    },
    exportTodos() {
      localStorage.clear()
      this.todos.forEach((todo, index) => {
        localStorage.setItem(index, todo.text)
      })
    }
  }
})
