<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="3"
      >
        <v-card>
          <v-card-title class="primary white--text">
            <v-icon class="mr-2" large dark>mdi-devices</v-icon>
            环境
          </v-card-title>
          <v-card-text class="pa-0">
            <v-data-table
              hide-default-header
              hide-default-footer
              :headers="headers"
              :items="devices"
            >
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-card>
          <v-card-title class="green white--text">
            <v-icon class="mr-2" large dark>mdi-vuejs</v-icon>
            前端
          </v-card-title>
          <v-card-text class="pa-0">
            <v-data-table
              hide-default-header
              hide-default-footer
              :headers="headers"
              :items="front"
            >
            </v-data-table>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col
        cols="12"
        sm="3"
      >
        <v-card>
          <v-card-title class="red white--text">
            <v-icon class="mr-2" large dark>mdi-language-java</v-icon>
            后端
          </v-card-title>
          <v-card-text class="pa-0">
            <v-data-table
              hide-default-header
              hide-default-footer
              :headers="headers"
              :items="back"
            >
            </v-data-table>
          </v-card-text>
        </v-card>
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
      devices: [
        {
          name: '系统',
          version: 'Windows 10 20H2'
        },
        {
          name: 'JDK',
          version: '1.8.0'
        },
        {
          name: 'Node.js',
          version: '14.16.1'
        },
        {
          name: 'MySQL',
          version: '8.0.16'
        },
        {
          name: '浏览器',
          version: 'Google Chrome 90'
        }
      ],
      front: [
        {
          name: 'vue',
          version: '2.6.11'
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
          name: 'Sa-Token',
          version: '1.17.0'
        }
      ]
    }
  }
}
</script>
