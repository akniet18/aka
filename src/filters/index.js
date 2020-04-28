import moment from 'moment'
import Vue from 'vue'

/* eslint-disable */
const filters = {
    capitalize: function (value) {
        console.log('filter', value);

        if (!value) return '';
        value = value.toString();
        return value.charAt(0).toUpperCase() + value.slice(1);
    },
    dataform(value){
  		if (value) {
  			return moment(String(value)).format('DD.MM.YY HH:MM')
  		}
  	},
};

Vue.filter('capitalize', filters.capitalize)
Vue.filter('dataform', filters.dataform)

export default filters;