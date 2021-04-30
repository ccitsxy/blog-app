<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="6"
      >
        <v-data-table
          hide-default-footer
          :headers="headers"
          :items="front"
        >
        </v-data-table>
      </v-col>
      <v-col
        cols="12"
        sm="6"
      >
        <v-data-table
          hide-default-footer
          :headers="headers"
          :items="back"
        >
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      headers: [
        {
          text: '名称',
          sortable: false,
          value: 'name'
        },
        {
          text: '版本',
          sortable: false,
          value: 'version'
        }
      ],
      front: [
        {
          name: 'vue',
          version: '2.6.11'
        },
        {
          name: 'vue-router',
          version: '3.2.0'
        },
        {
          name: 'vuex',
          version: '3.4.0'
        },
        {
          name: 'vuex-pathify',
          version: '1.4.5'
        },
        {
          name: 'axios',
          version: '0.21.1'
        },
        {
          name: 'vue-axios',
          version: '3.2.4'
        },
        {
          name: 'vuetify',
          version: '2.4.11'
        },
        {
          name: 'vditor',
          version: '3.8.4'
        },
        {
          name: 'nprogress',
          version: '0.2.0'
        }
      ],
      back: [
        {
          name: 'Spring Boot',
          version: '2.4.2'
        },
        {
          name: 'Spring Data JPA',
          version: '2.4.3'
        },
        {
          name: 'Jackson',
          version: '2.11.4'
        },
        {
          name: 'MySQL',
          version: '8.0.16'
        },
        {
          name: 'Sa-Token',
          version: '1.17.0'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
