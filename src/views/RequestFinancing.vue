<template>
  <div
    class="object-top max-w-full bg-gray-300 bg-no-repeat bg-cover lg:bg-transparent lg:bg-graduation"
  >
    <div class="container max-w-full px-5 mx-auto lg:max-w-6xl">
      <div
        class="relative flex justify-center mx-auto mb-10 lg:mb-0 h-88 lg:w-8/12 lg:h-124"
      >
        <div
          class="absolute px-5 py-5 mt-32 text-white rounded-t-lg lg:px-16 lg:mt-80 lg:py-14 lg:shadow-sm bg-finlandia-500"
        >
          <h1 class="mb-3 text-2xl text-center text-white">
            Request Financing Information
          </h1>
          <!-- <div class="px-5 mt-4"> -->
          <p class="text-sm font-light lg:text-base">
            If you are interested in learning more about how 8B financing can
            help you meet your education costs, please fill out the form below.
            Please note that this is a request for information and not an
            application. Once we receive your request, a member of our team will
            contact you to discuss your financing options
          </p>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
  <div class="container max-w-3xl px-5 mx-auto mt-24">
    <div class="flex justify-center p-8 mb-5 shadow-md">
      <div>
        <div class="flex flex-col mt-4">
          <label class="pb-1 text-sm text-finlandia-500" for="name"
            >First Name<span class="text-red-500 ">*</span></label
          >
          <input
            type="text"
            v-model="first_name"
            id="name"
            placeholder="first name"
            class="h-12 px-2 bg-white border rounded-md w-80 lg:w-96 border-finlandia-100"
          />
        </div>
        <div class="flex flex-col mt-4">
          <label class="pb-1 text-sm text-finlandia-500" for="lname"
            >Last Name<span class="text-red-500 ">*</span></label
          >
          <input
            type="text"
            v-model="last_name"
            id="lname"
            placeholder="last name"
            class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
          />
        </div>
        <div class="flex flex-col mt-4">
          <label class="pb-1 text-sm text-finlandia-500" for="email"
            >Email Address<span class="text-red-500 ">*</span></label
          >
          <input
            type="text"
            v-model="email"
            id="email"
            placeholder="email address"
            class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
          />
        </div>
        <div class="flex flex-col mt-4">
          <label class="pb-1 text-sm text-finlandia-500" for="citizenship"
            >Citizenship<span class="text-red-500 ">*</span></label
          >
          <input
            type="text"
            v-model="citizenship"
            id="citizenship"
            placeholder="email address"
            class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
          />
        </div>
        <p class="py-1 text-sm text-finlandia-500">
          Have you received an offer letter from a university?
        </p>
        <div class="grid grid-cols-2 gap-5">
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio"  v-model="response" value="true" />
            <span class="ml-2">Yes</span>
          </label>
          <label class="inline-flex items-center">
            <input type="radio" class="form-radio" v-model="response" value="false" />
            <span class="ml-2">No</span>
          </label>
        </div>
        <div v-if="response == 'true'">
          <div class="flex flex-col mt-4">
            <label class="pb-1 text-sm text-finlandia-500" for="email"
              >Name of University</label
            >
            <input
              type="text"
              v-model="name_of_university"
              id="email"
              placeholder="email address"
              class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label class="pb-1 text-sm text-finlandia-500" for="email"
              >In which country is the University</label
            >
            <input
              type="text"
              v-model="university_location"
              id="email"
              placeholder="email address"
              class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label class="pb-1 text-sm text-finlandia-500" for="email"
              >Field of study</label
            >
            <input
              type="text"
              v-model="field_of_study"
              id="email"
              placeholder="email address"
              class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
            />
          </div>
          <div class="flex flex-col mt-4">
            <label class="pb-1 text-sm text-finlandia-500" for="email"
              >Level of program</label
            >
            <input
              type="text"
              v-model="level_of_program"
              id="email"
              placeholder="email address"
              class="h-12 px-2 bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
            />
          </div>
        </div>
        <div class="flex flex-col mt-4">
            <label class="pb-1 text-sm text-finlandia-500" for="description"
              >Your message</label
            >
            <textarea
              type="text"
              v-model="message"
              id="description"
              class="bg-white border rounded-md border-finlandia-100 w-80 lg:w-96"
            ></textarea>
          </div>

          <div class="mt-4">
            <a
              class="flex justify-center px-5 py-3 rounded-full shadow-md text-finlandia-500 bg-aero-blue-500 w-80 md:w-96"
              @click="submit"
              >Send Request</a
            >
          </div>
      </div>
    </div>
  </div>
</template>

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
            message: null,
            name_of_university: null,
            university_location: null,
            field_of_study: null,
            level_of_program: null,
            citizenship: null,
            response: false,
            // base_url: this.$store.state.baseUrl
        }
    },
    
   
    methods: {
        submit() {
          axios.post('http://8bfinancing.test/api/financing/create', 
            {
              first_name: this.first_name,
              last_name: this.last_name,
              message: this.message,
              email: this.email,
              field_of_study: this.field_of_study,
              citizenship: this.citizenship,
              level_of_program: this.level_of_program,
              name_of_university: this.name_of_university,
              is_received: this.response,
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
