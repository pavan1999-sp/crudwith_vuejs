<template>
  <div>
    <form @submit.prevent="createPost">
      <div>
        <label for="u_id">Post User ID</label>
        <input type="text" id="u_id" v-model="formData.u_id" />
      </div>
      <div>
        <label for="u_name">Post userName</label>
        <input type="text" id="u_name" v-model="formData.u_name" />
      </div>
      <div>
        <label for="u_sal">Post usersal</label>
        <input type="text" id="u_sal" v-model="formData.u_sal" />
      </div>
      <button>Create Post</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'CreatePost',
  data() {
    return {
      formData: {
        u_id: '',
       u_name: '',
        u_sal: ''
      },
    }
  },
  methods: {

   
  createPost() {console.log(this.formData)
     axios   
     .post(' http://localhost:3000/userdata', {
       // .post('http://localhost:7070/insert', {
        
        
        ...this.formData})
        .then((response) => {
        console.log(this.formData.u_id)
        console.log("post res")
          console.log(response)
        })
        .catch((error) => {
        console.log(" post error")
          console.log(error)
        })
    },
  },
}
</script>

<style scoped>
</style>