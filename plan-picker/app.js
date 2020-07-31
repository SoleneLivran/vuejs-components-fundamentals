// Compnents naming best practices https://vueschool.io/lessons/vuejs-component-naming-best-practices

// Composant global :
// Vue.component('plan', { ...}
// pas ideal : par exemple si un composant n'est pas utilise, il risque d'etre quand meme inclus dans le build
// donc plus de JS a telecharger pour le user

// MIEUX : declarer le composant en tant qu'objet JS, et l'enregistrer la ou on en a besoin
// Composant declare en tant qu'objet JS :
let PlanPickerItemComponent = {
  template : '#plan-picker-item-template',
  props: {
    name: {
      type: String,
      required: true
    },
    selectedPlan: {
      type: String
      // quand un plan est clicked, la method selectPlan vient stocker son nom ici
      // cette prop est utilisee par la computed isSelected........
    }
  },
  computed: {
    isSelected () {
      // .....qui va verifier (pour chaque plan) s'il est le plan selectionne
      return this.name === this.selectedPlan
    }
    // puis isSelected est utilise par la class dynamique active-plan
  },
  methods: {
    select() {
      // $emit permet de passer un evenement au parent
      // arg1 = event name, arg2 (optional) = data to pass (payload)
      // ici : payload = le nom du plan qui a ete selected/clicked
      this.$emit('select', this.name)
    }
  }
}
// puis cet objet sera declare en component de son parent


let PlanPickerComponent = {
  template: '#plan-picker-template',
  // on register le composant enfant PlanComponent localement
  components: {
    // key = name og the component / value = objet
    'plan-picker-item': PlanPickerItemComponent
  },
  data() {
    return {
      plans: ['The Single', 'The Curious', 'The Addict'],
      selectedPlan: ''
    }
  },
  methods: {
    selectPlan(plan) { // la plan selectionne est recupere via le payload
      this.selectedPlan = plan // le plan selectionne est stocke dans la prop selectedPlan 
    }
  }
}
// PlanPickerComponent n'a pas de parent : on va donc le declarer dans l'instance racine Vue

// let PlanPickerItemComponent = {
//   template: '#plan-picker-item-template',
//   props: {
//     name: {
//       type: String,
//       required: true
//     },
//     selectedPlan: {
//       type: String
//     }
//   },
//   computed: {
//     isSelected() {
//       return this.name === this.selectedPlan
//     }
//   },
//   methods: {
//     select() {
//       this.$emit('select', this.name)
//     }
//   }
// }

// let PlanPickerComponent = {
//   template: '#plan-picker-template',
//   components: {
//     'plan-picker-item': PlanPickerItemComponent
//   },
//   data() {
//     return {
//       plans: ['The Single', 'The Curious', 'The Addict'],
//       selectedPlan: null
//     }
//   },
//   methods: {
//     selectPlan(plan) {
//       this.selectedPlan = plan
//     }
//   }
// }

new Vue({
  el: '#app',
  components: {
    'plan-picker': PlanPickerComponent
  }
})