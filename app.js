const app = Vue.createApp({
    data() {
      return {
        imgUrl: 'assets/img_pizza.svg',
        manyFoods: [
          {name: 'Burrito', url: 'assets/img_burrito.svg'},
          {name: 'Salad', url: 'assets/img_salad.svg'},
          {name: 'Cake', url: 'assets/img_cake.svg'},
          {name: 'Soup', url: 'assets/img_soup.svg'},
          {name: 'Fish', url: 'assets/img_fish.svg'},
          {name: 'Pizza', url: 'assets/img_pizza.svg'},
          {name: 'Rice', url: 'assets/img_rice.svg'}
      ]
      }
    }
  })
 app.mount('#app')