const app = new Vue({
  el: '#app',

  data: {
    // flag per il messaggio warning di input
    alertActive: false,
    todoStr: '',
    todos: [
      {
        todo: 'Imparare Vue',
        completeAlert: false,
        checked: false
      },
      {
        todo: 'Studiare Vue',
        completeAlert: false,
        checked: false
      },
      {
        todo: 'Amare Vue',
        completeAlert: false,
        checked: false
      },
      {
        todo: 'Sposare Vue',
        completeAlert: false,
        checked: false
      },
      {
        todo: 'Procreare con Vue',
        completeAlert: false,
        checked: false
      },
      {
        todo: 'Divorziare Vue',
        completeAlert: false,
        checked: false
      },
    ],

  },

  methods: {

    removeTodo(index) {
        this.todos.splice(index, 1);
    },

    addTodo() {
      if (this.todoStr.length > 2) {
        this.todos.push(
          {
            todo: this.todoStr, 
            completeAlert: false, 
            checked: false
          });
      } else {
        this.alertActive = true;
        setTimeout(() => {
          this.alertActive = false;
        }, 2000);
      }
      this.todoStr = '';
    },

    // funzione che viene chiamata solo nel caso che
    // todo.checked sia falso e mostra per 1.5 secondi
    // un messaggio di warning
    displayAlert(index) {
      this.todos[index].completeAlert = true;
      setTimeout(() => {
        this.todos[index].completeAlert = false;
      }, 1500);
    }

  }


}); //end app