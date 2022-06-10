<template lang="html">

  <section class="container">
    <h1 class="title">Notas</h1>
    <section class="content">
      <hr class="bg-white" />
      <vue-form :state="formState" @submit.prevent="sendData">
        <validate tag="div">
          <label class="my-2" for="name">Nombre</label>
          <input
            class="form-control"
            type="text"
            id="name"
            name="name"
            autocomplete="off"
            required
            :minlength="nameMinLength"
            :maxlength="nameMaxLength"
            v-model="formData.name"
          />
          <field-messages name="name" show="$dirty">
            <div class="alert alert-danger m-1 p-1" slot="required">
              Required field
            </div>
            <div class="alert alert-danger m-1 p-1" slot="minlength">
              The name must contain at least {{ nameMinLength }} characters.
            </div>
            <div class="alert alert-danger m-1 p-1 text-red" slot="maxlength">
              The name must contain a maximum of {{ nameMaxLength }} characters.
            </div>
          </field-messages>
        </validate>
        <validate tag="div">
          <label class="my-2" for="lastName">Apellido</label>
          <input
            class="form-control"
            type="text"
            id="lastName"
            name="lastName"
            autocomplete="off"
            required
            :minlength="lastNameMinLength"
            :maxlength="lastNameMaxLength"
            v-model="formData.lastName"
          />
          <field-messages name="lastName" show="$dirty">
            <div class="alert alert-danger m-1 p-1" slot="required">
              Required field
            </div>
            <div class="alert alert-danger m-1 p-1" slot="minlength">
              The lastName must contain at least {{ lastNameMinLength }} characters.
            </div>
            <div class="alert alert-danger m-1 p-1 text-red" slot="maxlength">
              The lastName must contain a maximum of {{ lastNameMaxLength }} characters.
            </div>
          </field-messages>
        </validate>
        <validate tag="div">
          <label class="my-2" for="age">Note</label>
          <input
            class="form-control"
            type="number"
            id="note"
            name="note"
            autocomplete="off"
            required
            :min="noteMin"
            :max="noteMax"
            v-model="formData.note"
          />
          <field-messages name="note" show="$dirty">
            <div class="alert alert-danger m-1" slot="required">
              Required field
            </div>
            <div class="alert alert-danger m-1" slot="min">
              The minimum note allowed is {{ noteMin }}
            </div>
            <div class="alert alert-danger m-1" slot="max">
              The maximum note allowed is {{ noteMax }}
            </div>
          </field-messages>
        </validate>
        <button
          class="btn btn-primary mt-4"
          type="submit"
          :disabled="formState.$invalid"
        >
          Send
        </button>
      </vue-form>
    </section>
    <hr />
    <section class="content">
      <h2>Historial de Notas</h2>
      <hr class="bg-white" />
      <table v-if="notes.length" class="table table-dark">
        <tr>
          <th>Alumno</th>
          <th>Nota</th>
        </tr>
        <tr v-for="({ name, lastName, note }, key) in notes" :key="key">
          <td :style="setColorByNote(note)">{{ `${name} ${lastName}`}}</td>
          <td :style="setColorByNote(note)">{{ note }}</td>
        </tr>
        <tr>
          <td :style="setColorByNote(promedio)">PROMEDIO TOTAL</td>
          <td :style="setColorByNote(promedio)">{{ promedio }}</td>
        </tr>
      </table>
      <div v-else-if="!notes.length" class="alert alert-warning" role="alert">
        Notes have not loaded.
      </div>
    </section>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'form-view',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState: {},
        formData: this.startFormData(),
        notes: [],
        nameMinLength: 3,
        nameMaxLength: 15,
        lastNameMinLength: 3,
        lastNameMaxLength: 15,
        noteMin: 0,
        noteMax: 10,
        promedio: 0
      }
    },
    methods: {
      startFormData() {
        return {
          name: "",
          lastName: "",
          note: ""
        };
      },
      sendData() {
        this.promedio = 0;
        this.notes.push(this.formData);
        this.calcularPromedio();
        this.formData = this.startFormData();
        this.formState._reset();
      },
      setColorByNote(note) {
        let color = 'green';
        if (note >= 0 && note < 4) {
          color = 'red';
        } else if(note >= 4 && note < 7) {
          color = 'yellow';
        }
        return { color };
      },
      calcularPromedio() {
        this.notes.forEach(({note}) => {
          this.promedio += +note;
        });
        this.promedio = this.promedio / this.notes.length;
      }
    },
    computed: {
    }
}


</script>

<style scoped lang="css">
.title {
  color: red;
}
</style>
