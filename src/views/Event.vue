<template>
    <div class="max-w-6xl mx-auto mt-10 mb-10 " v-if="event">
        <img :src="event.photo" class="w-full mx-auto rounded-t-md lg:h-132" alt="">
        <div class="flex justify-between">
            <div class="flex flex-col items-center justify-center w-32 bg-finlandia-200">
                <p class="text-sm text-2xl text-center text-finlandia-500">{{ month }}</p>
                <p class="text-6xl text-center text-finlandia-500">{{ day }}</p>
            </div>
            <div class="flex flex-col justify-end">
                <p class="text-xl font-bold text-right text-finlandia-500">{{ event.title }}</p>
                <p class="font-medium text-right text-finlandia-400">{{ dateTime(event.date) }}</p>
                <span class="flex flex-row justify-end">
                    <img src="img/map.png" class="h-4 mt-1" alt="">
                    <p class="ml-1 text-finlandia-400">{{ event.location }}</p>
                </span>
            </div>
        </div>
        <div class="max-w-5xl p-5 mx-auto mt-10">
            <p class="font-light ">
                {{ event.description }}
            </p>
        </div>
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
            event: null,
            month: null,
            day: null,
        }
    },
    
    mounted() {

        
        axios.get('http://8bfinancing.test/api/event/read/' + this.$route.params.id)
          .then((response) => {
            this.event = response.data
            let monthYear = this.dateTime(this.event.date).split('-')
            this.day = monthYear[2]
            this.month = monthYear[1]
            //   console.log('hi',this.events)
          })
          .catch(error => console.log(error))
    },

    computed: {
        
    },
    methods: {
        dateTime(value) {
            return moment(value).format('YYYY-MMM-DD');
        },
    }
};
</script>
