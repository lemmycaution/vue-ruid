<template>
  <div id="app">
    <button v-ruid="'button-to-test'">I'm a button</button>
    <ul>
      <li
        v-for="number in [1,2,3]"
        v-ruid="`li-to-test-${number}`"
        :key="number">
        I'm a list item {{ number }}
      </li>
    </ul>
  </div>
</template>
