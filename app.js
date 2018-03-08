
Vue.component('persona-id',{
  props:['imatge','nom'],
  template:`
  <div>
    <img width="100" :src="imatge" :alt="nom" />
    <h2>{{ nom }}</h2>
  </div>
  `,
})

new Vue({
  el : '#app',
  data:{
    persones:[
      {nom:'Pepito Perez',imatge:'http://sistemaepic.com/wp-content/uploads/2014/07/Anonymous.jpg'},
      {nom:'Juan Martinez',imatge:'http://sistemaepic.com/wp-content/uploads/2014/07/Anonymous.jpg'},
      {nom:'Pol Pau',imatge:'http://sistemaepic.com/wp-content/uploads/2014/07/Anonymous.jpg'},
    ]
  },
  template:`
  <div>
    <persona-id v-for="(persona,index) in persones"
      :key="index"
      :nom="persona.nom"
      :imatge="persona.imatge">
    </persona-id>
  </div>
  `
})
