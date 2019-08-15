<template>
  <v-app>
    <v-content>
      <Buttons/>
    </v-content>
  </v-app>
</template>

<script>
import Buttons from './components/Buttons'

export default {
  name: 'App',
  components: {
    Buttons
  },
  data: () => ({})
}
</script>
