Vue.component('click-counter', {
  template: '#click-counter-template', // reference to the x-template script in index.html
  data () {
    return {
      count: 0
    }
  }
})

new Vue({
  el: '#app'
})