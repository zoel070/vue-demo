<template>
  <div>
    <ul>
      <li v-for="todo in filteredTodos" v-bind:key="todo.id">
        <!--
    我们为每个 todo 准备了一个插槽，
    将 `todo` 对象作为一个插槽的 prop 传入。
    -->
        <slot name="small" v-bind:big="todo">
          <!-- 后备内容 -->
          {{ todo.text }}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  props: ['fooz'],
  data() {
    return {
    }
  },
  computed: {
    filteredTodos() {
      return this.fooz.filter(item => item.id > 3)
    }
  }
}
</script>
