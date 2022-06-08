<template lang="html">

    <section class="content mb-2 d-flex justify-content-start w-100">
    <nav
      class="w-100 m-2 bg-red navbar navbar-expand-xl navbar-dark bg-dark"
    >
      <ul>
        <li class="nav-item">
          <router-link to="/">
            <a class="nav-link" href="#">Inicio</a>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notas">
            <a class="nav-link" href="#">Notas</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/respuestas">
            <a class="nav-link" href="#">Respuestas</a>
          </router-link>
        </li>
      </ul>
    </nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'navbar-view',
    props: [],
    mounted () {

    },
    data () {
      return {

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
section nav ul {
  width: 100%;
  padding: 5px;
  margin: 0;
  display: flex;
  justify-content: center;
  row-gap: 5px;
  font-size: 1.2rem;
  font-weight: 700;
  list-style: none;
  color: white;
}

section nav ul li a {
  border-radius: 5px;
  background-color: rgb(50, 4, 187);
  color: white;
}

section nav ul li a:hover {
  color: black;
  text-decoration: none;
}
</style>
