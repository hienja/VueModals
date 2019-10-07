<template>
    <v-app>
        <v-content>
            <Modals/>
            <Buttons/>
        </v-content>
    </v-app>
</template>

<script>
import Buttons from './components/ButtonsX'
import Modals from './components/modalX/App'

export default {
  components: {
    Buttons,
    Modals
  },
  data: () => ({})
}
</script>
