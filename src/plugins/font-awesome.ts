import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faGraduationCap, faBriefcase, faBuilding, faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
const fontawesome = require('@fortawesome/vue-fontawesome');

library.add(faGraduationCap, faBriefcase, faBuilding, faChevronRight);
Vue.component('fa-icon', fontawesome.FontAwesomeIcon);
