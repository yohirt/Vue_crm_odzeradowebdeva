<template>
  <div class="hello">
    <h1>API</h1>
    <a href="" class="btn btn-success">Dodaj</a>
    <!-- <button type="button" class="btn btn-primary">Primary</button> -->
   <table class="table table-hover">
      <tr>
        <th>id</th>
        <th>userId</th>
        <th>Title</th>
        <th>Body</th>
      </tr>
      <tr v-for="category in categories">
        <td>{{category.id}}</td>
        <td>{{category.userId}}</td>
        <td>{{category.title}}</td>
        <td>{{category.body}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      categories: []
    }
  },
  methods: {
    fetchCategories(){
      this.$http.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(result => this.categories = result)
    }
  },
  created: function(){
    this.fetchCategories();
  } 
}
</script>

<style scoped>

</style>
