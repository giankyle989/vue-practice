<template>
  <ul style="list-style-type: none">
    <li
      v-for="person in people"
      :key="person.id"
    >
      {{ person.name }} is {{ person.age }} years old
    </li>

    <p>{{ message }}</p>
    <button @click="addMoreCount">2nd Count</button>
  </ul>

</template>

<script>
export default {
  data() {
    return {
      people: [
        { id: 1, name: "Pedro", age: 24 },
        { id: 2, name: "Juan", age: 32 },
        { id: 3, name: "Jose", age: 44 },
      ],
    };
  },
  methods:{
    addMoreCount(){
        this.$emit('add-more-count')
    }
  },
  props:['message']
    
  
};
</script>
