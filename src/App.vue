<template>
  <div>
    <todo-list v-bind:fooz="todos">
      <template v-slot:small="slotProps">
        wdwd{{ slotProps }}
      </template>
    </todo-list>
    <base-checkbox v-model="lovingVue" :value="checked"></base-checkbox>
  </div>
</template>

<script>
import TodoList from './views/HomeView.vue'

export default {
  components: {
    TodoList,
  },
  data() {
    return {
      todos: [{ id: 1, text: '111' }, { id: 2, text: '222' }, { id: 3, text: '333' }, { id: 4, text: '444' }, { id: 5, text: '555' }, { id: 6, text: '666' },],
      lovingVue: true,
      checked: true,
    }
  },

}

</script>
