<template>
  <q-header>
    <q-toolbar class="q-electron-drag">
      <q-toolbar-title class="q-electron-drag--exception">第6放映厅</q-toolbar-title>
      <q-space class="q-electron-drag" />
      <q-btn dense flat @click="minimize"
        ><img src="../assets/imgs/minimizing.svg" width="20"
      /></q-btn>

      <q-btn dense flat @click="restore">
        <img v-if="icon" src="../assets/imgs/maximizing.svg" width="20" />
        <img v-if="!icon" src="../assets/imgs/maximize.svg" width="20" />
      </q-btn>
      <q-btn dense flat @click="close"
        ><img src="../assets/imgs/close-bold.svg" width="20"
      /></q-btn>
    </q-toolbar>
  </q-header>
</template>
<script setup lang="ts">
import { ref } from "vue";

let icon = ref(true);

function minimize() {
  window.api.minimize();
}
function restore() {
  window.api.restore(function (val: boolean) {
    icon.value = val;
  });
}
function close() {
  window.api.close();
}
</script>
