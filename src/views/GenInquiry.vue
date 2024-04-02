<template>
    <div class="container max-w-5xl p-5 mx-auto">
        <div class="content-center gap-4 lg:grid lg:grid-cols-2">
            <div>
                <p class="text-xl text-finlandia-500">Contact Us</p>
                <p class="mt-2 text-sm font-light w-96 text-finlandia-500">We'd love to hear from you. If you have any questions about our services or company,
                    please complete the form below:
                </p>
                <div>
                    <div class="flex flex-col mt-4">
                        <label class="pb-1 text-sm text-finlandia-500" for="name">First Name<span class="text-red-500 ">*</span></label>
                        <input type="text" v-model="first_name" id="name" placeholder="first name" class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-68">
                    </div>
                    <div class="flex flex-col mt-4">
                        <label class="pb-1 text-sm text-finlandia-500" for="lname">Last Name<span class="text-red-500 ">*</span></label>
                        <input type="text" v-model="last_name" id="lname" placeholder="last name" class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-68">
                    </div>
                    <div class="flex flex-col mt-4">
                        <label class="pb-1 text-sm text-finlandia-500" for="email">Email Address<span class="text-red-500 ">*</span></label>
                        <input type="text" v-model="email" id="email" placeholder="email address" class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-68">
                    </div>
                    <div class="flex flex-col mt-4">
                        <label class="pb-1 text-sm text-finlandia-500" for="description">How can we help?<span class="text-red-500 ">*</span></label>
                        <textarea type="text" v-model="description" id="description" class="p-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-68"></textarea>
                    </div>
                    <div class="mt-4">
                        <a class="flex justify-center px-5 py-3 rounded-full shadow-md cursor-pointer text-finlandia-500 bg-aero-blue-500 w-80 md:w-68 " @click="submit">Send</a>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-xl text-finlandia-500">Our Office</p>
                <p class="mt-2 mb-2 text-sm font-light w-96 text-finlandia-500">
                    314 East State Street <br>
                    Ithaca,<br>
                    NY 14850,
                    USA
                </p>
                <div class="mapouter">
                    <div class="gmap_canvas">
                        <iframe class=" w-88 h-96" id="gmap_canvas" 
                            src="https://maps.google.com/maps?q=314%20East%20State%20Street%20Ithaca%20NY%2014850%20&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                            frameborder="0" 
                            scrolling="no" 
                            marginheight="0" 
                            marginwidth="0"
                        >
                        </iframe>
                        <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon/"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
.mapouter{
    position:relative;
    text-align:right;
    height:500px;
    width:600px;
}
.gmap_canvas {
    overflow:hidden;
    background:none!important;
    height:500px;
    width:600px;}
</style>
<script>

import axios from 'axios'
// import { notify } from "@kyvg/vue3-notification";

export default {
    components: {
    },
    data () {
        return {
            first_name: null,
            last_name: null,
            email: null,
            description: null,
            // base_url: this.$store.state.baseUrl
        }
    },
    
    methods: {
        submit() {
          axios.post('http://8b-api.test/api/event/create', 
            {
              first_name: this.first_name,
              last_name: this.last_name,
              description: this.description,
              email: this.email,
              // photo: '' 
            })
          .then((response) => {
              alert(response)
            // notify({
            //   type: "success",
            //   title: "User",
            //   text: response.data.message,
            // })
            // window.location.href = "/profile"
          })
          .catch(error => console.log(error))
        },

    }
}
</script>
