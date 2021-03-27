<template>
  <v-container>
    <v-row justify="center">
      <v-col
        cols="12"
        sm="9"
      >
        <v-card flat>
          <v-timeline
            dense
            clipped
          >
            <v-timeline-item
              fill-dot
              class="mb-12 title"
            >
              2021
            </v-timeline-item>
            <v-timeline-item
              fill-dot
              class="mb-12"
              small
            >
              <v-row>
                <v-col cols="3">3-25</v-col>
                <v-col>title</v-col>
              </v-row>
            </v-timeline-item>
          </v-timeline>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Archive',
  data () {
    return {}
  }
}
</script>

<style scoped>

</style>
