<template>
  <v-app>
    <v-content>
      <Modals/>
      <Buttons/>
    </v-content>
  </v-app>
</template>

<script>
import Buttons from './components/Buttons'
import Modals from './components/modal/App'

export default {
  components: {
    Buttons,
    Modals
  },
  data: () => ({})
}
</script>
