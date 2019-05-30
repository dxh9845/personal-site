<template>
  <b-container class="home" fluid>

    <b-row class='align-items-center justify-content-center'
      id='header' tag='section' data-bg='light'>
      <b-col sm='12' md='6' class='d-flex justify-content-center'>
        <div class='profile-photo rounded-circle'></div>
      </b-col>
      <b-col sm='12' md='6' class='text-center justify-content-center'>
        <h1 class='novecento font-weight-light'>Daniel Herzig</h1>
        <div></div>
      </b-col>
    </b-row>

    <b-row id='experience' tag='section' data-bg='dark'>
      <b-col cols='12'>
        <h1 class='franklin-demi text-uppercase'>Experience</h1>
      </b-col>
      <b-col cols='12'>
        <ScrollContainer class='pb-2' :items='items'>
          <ExperienceBlock slot-scope='row' :title='row.item.name' :type='1'></ExperienceBlock>
        </ScrollContainer>
      </b-col>
    </b-row>

    <b-row id='projects' tag='section' data-bg='neon'>
      <b-col cols='12'>
        <h1 class='franklin-demi text-uppercase'>Projects</h1>
      </b-col>
    </b-row>


    <b-row id='resume' tag='section' data-bg='light'>
      <b-col cols='12'>
        <h1 class='franklin-demi text-uppercase'>Resume</h1>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ScrollContainer from '@/components/Experience/ScrollContainer.vue';
import ExperienceBlock from '@/components/Experience/ExperienceBlock.vue';

// import GithubAPI from '@/utils/GithubAPI';

@Component({
  components: {
    ExperienceBlock,
    ScrollContainer,
  },
})
export default class Home extends Vue {
  items: object[] = [{ name: 'One' }, { name: 'Two' }, { name: 'Three' }, { name: 'One' }, { name: 'Two' }, { name: 'Three' }, { name: 'One' }, { name: 'Two' }, { name: 'Three' }];

  // async mounted() {
  //   const response = await GithubAPI.getRepositories();
  //   console.log(response);
  // }
}
</script>

<style lang="scss">
#header {
  height: 350px;
}

.profile-photo {
  width: 200px;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-image: url('~@/assets/images/candid_small.jpg');
}

section {
  padding: 15px 5px;

  &[data-bg='dark'] {
    color: color('white');
    background-color: theme-color('darkblue');
  }

  &[data-bg='light'] {
    color: color('black');
  }

  &[data-bg='neon'] {
    color: theme-color('darkblue');
    background-color: theme-color('seafoam');
  }
}
</style>
