const App = {
	data() {
		return {
			placeholderString: 'Поле для ввода заметок',
			title: 'Список заметок',
			inputValue: '',
			notes: [],
			absenceMessage: 'Ваш список заметок пуст. Здесь будет подсчет количества.'
		}
	},
	methods: {
		// 017. удаляем inputChangeHandler
		// inputChangeHandler(event) {
		// 	this.inputValue = event.target.value
		// },
		// create the new method
		addNewNote() {
			// add condition if form is blank
			if (this.inputValue !== '') {
				this.notes.push(this.inputValue)
				this.inputValue = ''
			}
			
		},
		/* doubleCount() {
			// недостаток в том, что при дописывании каждого символа в инпут будет добавляться будет вызываться этот метод
			// и это проблема производительности
			console.log('doubleCount');
			return this.notes.length * 2
		}, */
		//13. create method
		toUpperCase(item) {
			return item.toUpperCase()
		},
		removeNote(idx) {
			// начинаем с idx и удаляем 1 элемент
			this.notes.splice(idx, 1)
			// console.log('removeNote', idx, event)
		}
		// We may cope without this long code
		// ,
		// inputKeyPress(event) {
		// 	// shows in console what key we press
		// 	// console.log(event.key)
		// 	// condition when we click on Enter (we add item to the list)
		// 	if (event.key === 'Enter') {
		// 		this.addNewNote()
		// 	}
		// }
	},
	computed: {
		// 015. мы добавляем этот метод, для того чтобы решить проблему производительности
		//это объект, в котором мы
		//computed значит вычислен
		doubleCountComputed() {
			console.log('doubleCountComputed');
			return this.notes.length * 2
		},
	},
	/* watch: {
		// 016. watch добавляется на один уровень с computed
		// и может выводить сообщение об изменении каждый раз
		inputValue(value) {
			if (value.length > 10) {
				this.inputValue = ''
			}
			console.log('input Value changed', value)
		}
	} */
}


Vue.createApp(App).mount('#app')