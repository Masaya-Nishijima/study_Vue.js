const todo = new Vue({
  el: '#todoItem',
  data: {
    todos: [
      { text: 'memo 1', edit: true },
      { text: 'memo 2', edit: false }
    ],
    new_todo: 'new todo'
  },
  computed: {
    exportTodos: function () {
      localStorage.clear()
      this.todos.forEach((todo, index) => {
        localStorage.setItem(index, todo.text)
      })
    }
  },
  methods: {
    destroyTodo: function (todoIndex) {
      this.todos.splice(todoIndex, 1)
    },
    createTodo: function () {
      this.todos.push({ text: this.new_todo, edit: false })
      this.new_todo = 'new todo'
    },
    changeMode: function (todoIndex) {
      this.todos[todoIndex].edit = !this.todos[todoIndex].edit
    },
    importTodos: function () {
      this.todos = []
      for (let index = 0; index < localStorage.length; index++) {
        const todo = {
          text: localStorage.getItem(localStorage.key(index)),
          edit: false
        }
        this.todos.push(todo)
      }
    }
  }
})
