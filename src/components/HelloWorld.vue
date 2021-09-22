
<template>

<div>

<h2>user details</h2>

<table>
  <tr>
    <th>user id</th>
    <th>user name</th>
    <th>user salary</th>
     <th></th>
  </tr>
  <tr v-for="x in userdata">
    <td>{{x.id}}</td>
    <td>{{x.u_name}}</td>
    <td>{{x.u_sal}}</td>
    <td> <button type="button" class="btn btn-danger" @click="deleteData(x,x.u_id)">Delete</button></td>
     <td> <button type="button" class="btn btn-danger" @click="editData(x,x.u_id)">update</button></td>
  </tr>

</table>
  
<router-link :to="{ name: 'post' }"><button class="btn btn-primary" >add</button></router-link>
</div>



</template>


<script>

import axios from 'axios'
export default {
  name: 'hello',
  data() {
    return {

      userdata: [],
      
    }
  },

  methods: {
     editData(userDetails,id) {
     console.log(userDetails);
        axios.put('http://localhost:3000/userdata/'+id,userDetails)
    //  axios.delete('http://localhost:7070/delete',userDetails)
     
        .then(response => console.log(response));
        console.log(userDetails);
         
      window.location.reload();
    },
    deleteData(userDetails,id) {
     console.log(userDetails);
        axios.delete('http://localhost:3000/userdata/'+id,userDetails)
    //  axios.delete('http://localhost:7070/delete',userDetails)
     
        .then(response => console.log(response));
        console.log(userDetails);
         
      window.location.reload();
    }
  }, created() {
  axios.get('http://localhost:3000/userdata')
   // axios.get('http://localhost:7070/fetch')
      .then((response) => {
      
        this.userdata =  response.data;
        console.log(this.userdata);
        
        e.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
  }
}
</script>

<style>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>



