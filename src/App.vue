<template>
  <div id="app">
    <b-navbar variant='primary' type='dark' sticky>
      <b-navbar-brand class='franklin-demi text-uppercase' href='#'>Daniel Herzig</b-navbar-brand>

      <b-navbar-toggle target='nav-collapse'></b-navbar-toggle>

      <b-collapse id='nav-collapse' is-nav>
        <b-navbar-nav>
          <b-nav-item href='#experience'>Experience</b-nav-item>
          <b-nav-item href='#projects'>Projects & skills</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<style lang="scss">
</style>
