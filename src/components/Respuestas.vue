<template lang="html">

    <section class="container">
      <h2>Respuestas</h2>
      <hr class="bg-white" />
      <table v-if="respuestas.length" class="table table-dark">
        <tr>
          <th>Número de pregunta</th>
          <th>Respuesta</th>
        </tr>
        <tr v-for="({ numero, respuestas }) in respuestas" :key="numero">
          <td>{{ numero}}</td>
          <td>{{ respuestas.join(', ') }}</td>
        </tr>
      </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'respuestas-view',
    props: [],
    mounted () {

    },
    data () {
      return {
        respuestas: [
          { numero: 1, respuestas: ['c'] },
          { numero: 2, respuestas: ['c'] },
          { numero: 3, respuestas: ['b'] },
        ]
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
.respuestas {
}
</style>
