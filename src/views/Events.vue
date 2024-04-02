<template>
  <div class="container max-w-full px-5 mx-auto mt-10 mb-10" v-if="events">
    <!-- <div class="grid grid-cols-1 gap-2 lg:grid-cols-2"> -->
    <div class="container flex flex-row max-w-full px-5 mx-auto mt-5 mb-5 lg:max-w-3xl">
      <input
        type="text"
        name=""
        id=""
        class="h-12 px-3 py-3 border rounded-l-lg w-72 lg:w-full"
      />
      <button class="px-3 py-3 text-sm rounded-r-lg lg:h-12 lg:w-44 bg-aero-blue-500">
        Search Events
      </button>
    </div>
    <div class="container flex flex-col px-5 mx-auto mt-5 lg:max-w-4xl" v-for="event in events" :key="event.id">
      <a :href="$router.resolve({name: 'Event', params: { id: event.id, slug: event.title }}).href" class="flex flex-row mt-10 border rounded-md shadow-md md:h-32 border-finlandia-50">
        <div class="flex flex-col items-center justify-center w-32 md:w-40 rounded-l-md bg-finlandia-300">
          <p class="text-sm text-center md:text-2xl text-finlandia-500">{{ month }}</p>
          <p class="text-center md:text-6xl text-finlandia-500">{{ day }}</p>
        </div>
        <div class="w-40">
            <img v-if="event" v-bind:src="event.photo" class="object-cover h-full md:h-32" alt="">
        </div>
        <div class="flex flex-col p-2 ml-4" v-if="event">
            <p class="text-base font-bold text-finlandia-400">
                {{ event.title }}
            </p>
            <p class="text-sm text-finlandia-400 font-regular">{{ dateTime(event.date) }}</p>
            <span class="flex flex-row">
                <img src="img/map.png" class="h-2 mt-1" alt="" v-if="event">
                <p class="ml-1 text-xs text-finlandia-400">{{ event.location }}</p>
            </span>
            <p class="text-xs text-finlandia-400 lg:w-132" v-if="event">
               {{ truncate(event.description, 200) }}
            </p>
        </div>
      </a>
      <!-- <div class="flex flex-row h-32 mt-10 border rounded-md shadow-md border-finlandia-50">
        <div class="flex flex-col items-center justify-center md:w-40 rounded-l-md bg-finlandia-300">
          <p class="text-sm text-center md:text-2xl text-finlandia-500">Feb</p>
          <p class="text-center md:text-6xl text-finlandia-500">9</p>
        </div>
        <div class="w-40">
            <img src="img/events/linkedin_panel.png" class="object-cover h-32" alt="">
        </div>
        <div class="flex flex-col p-2 ml-4">
            <p class="text-base font-bold text-finlandia-400">
                “Talent of the Future” panel
            </p>
            <p class="text-sm text-finlandia-400 font-regular">February 9, 2020</p>
            <span class="flex flex-row">
                <img src="img/map.png" class="h-2 mt-1" alt="">
                <p class="ml-1 text-xs text-finlandia-400">Online</p>
            </span>
            <p class="text-xs text-finlandia-400 md:w-132">
                Dr. Lydiah Kemunto Bosire spoke along with Jake Obeng-Bediako, Global Youth Ambassador for Diaspora Affairs, Government of Ghana; Liz Grossman, Co-Founder & CEO of Baobab Consulting; and Udochi Nwogu, Founder of It’s Made to Order.
            </p>
        </div>
      </div>
      <div class="flex flex-row h-32 mt-10 border rounded-md shadow-md border-finlandia-50">
        <div class="flex flex-col items-center justify-center md:w-40 rounded-l-md bg-finlandia-300">
          <p class="text-sm text-center md:text-2xl text-finlandia-500">Dec</p>
          <p class="text-center md:text-6xl text-finlandia-500">22</p>
        </div>
        <div class="w-40">
            <img src="img/events/LKB-FT-Panel.jpeg" class="object-cover h-32" alt="">
        </div>
        <div class="flex flex-col p-2 ml-4">
            <p class="text-base font-bold text-finlandia-400">
                Mobilizing Private Capital for African Higher Education
            </p>
            <p class="text-sm text-finlandia-400 font-regular">December 22, 2019</p>
            
            <p class="text-xs text-finlandia-400 md:w-132">
                On this panel hosted by Financial Times Investing For Good USA, Dr. Lydiah Kemunto Bosire and other experts discussed how increasing numbers of individuals, foundations, and institutions look to make investments that are focused on positive impact while generating a financial return and that a growing number of funds and investors are looking to the …
            </p>
        </div>
      </div> -->
      
      
      
    </div>

    <!-- </div> -->
    <!-- </div> -->

   
  </div>
</template>
<script>
import axios from 'axios'
import moment from 'moment'
// import { news } from "./news";
export default {
  components: {
    },
    data () {
        return {
            events: null,
            month: null,
            day: null,
        }
    },
    
    mounted() {
        axios.get('http://8bfinancing.test/api/event/all')
          .then((response) => {
                this.events = response.data
              // console.log('hi',this.events)
              for(let event of this.events)
              {
                let monthYear = this.dateTime(event.date).split('-')
                this.day = monthYear[2]
                this.month = monthYear[1]
              }
          })
          .catch(error => console.log(error))
    },

    methods: {
      truncate(str, n){
        return (str.length > n) ? str.substr(0, n-1) + '...' : str;
      },

      dateTime(value) {
        return moment(value).format('YYYY-MMM-DD');
      },
    }
};
</script>

