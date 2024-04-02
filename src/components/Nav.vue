<template>
  <Disclosure as="nav" class="fixed inset-x-0 top-0 z-50 w-full py-3 bg-white border-b shadow-sm text-finlandia-600" v-slot="{ open  = !open}">
    <div class="px-2 mx-auto lg:max-w-7xl sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
        </div>
        <div class="flex items-center flex-1 sm:items-stretch">
          <a href="/" class="flex items-center flex-shrink-0">
            <img class="block w-auto h-12" src="/img/logo.png" alt="Workflow" />
          </a>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
               <Menu as="div" class="relative ml-2">
                    <div>
                        <MenuButton class="flex-col flex-grow hidden pb-4 lg:pb-0 lg:flex lg:justify-end lg:flex-row">
                            <span class="sr-only">Open user menu</span>
                            <button class="flex flex-row items-center w-full px-2 py-2 mt-2 text-sm text-left lg:w-auto lg:inline lg:mt-0 lg:ml-4">
                                <span>Our Services</span>
                                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <a href="/8b-financing" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Financing</a>
                            </MenuItem>
                            <!-- <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Mentorship</a>
                            </MenuItem> -->
                        </MenuItems>
                    </transition>
                </Menu>
                <span>
                    <a href="/events" class="flex self-center px-2 py-2 mt-2 text-sm lg:mt-0 lg:ml-4 ">Events</a>
                </span>
                <span>
                    <a href="/news" class="flex self-center px-2 py-2 mt-2 text-sm lg:mt-0 lg:ml-4 ">8B In Action</a>
                </span>
                <Menu as="div" class="relative">
                    <div>
                        <MenuButton class="">
                            <span class="sr-only">Open user menu</span>
                            <button class="flex flex-row items-center w-full px-2 py-2 mt-2 text-sm text-left lg:w-auto lg:inline lg:mt-0 lg:ml-4">
                                <span>About Us</span>
                                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <!-- <MenuItem v-slot="{ active }">
                            <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">About 8B Education Investments</a>
                            </MenuItem> -->
                            <MenuItem v-slot="{ active }">
                            <a href="/team" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Our Team</a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="/mentors" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Mentors</a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="/advisors" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Advisors</a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="/investors" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Investors</a>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
                <span>
                    <a href="/faqs" class="flex self-center px-2 py-2 mt-2 text-sm lg:mt-0 lg:ml-4 ">FAQ</a>
                </span>
                <Menu as="div" class="relative">
                    <div>
                        <MenuButton class="">
                            <span class="sr-only">Open user menu</span>
                            <button class="flex flex-row items-center w-full px-2 py-2 mt-2 text-sm text-left rounded-full bg-aero-blue-500 lg:w-auto lg:inline lg:mt-0 lg:ml-4">
                                <span>Contact Us</span>
                                <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
                        </MenuButton>
                    </div>
                    <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                        <MenuItems class="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <MenuItem v-slot="{ active }">
                            <a href="/inquiry" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">General Inquiry</a>
                            </MenuItem>
                            <MenuItem v-slot="{ active }">
                            <a href="/request-financing" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Request Funding Information</a>
                            </MenuItem>
                        </MenuItems>
                    </transition>
                </Menu>
            </div>
          </div>

          <!-- Profile dropdown -->
        </div>
        <DisclosureButton class="rounded-lg lg:hidden focus:outline-none focus:shadow-outline">
            <span class="sr-only">Open main menu</span>
            <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                <path v-if="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                <path v-if="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
            </svg>
          </DisclosureButton>
      </div>
    </div>

  <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <Menu as="div" class="relative ml-3">
            <div>
                <MenuButton class="flex-col flex-grow hidden pb-4 lg:pb-0 lg:flex lg:justify-end lg:flex-row">
                    <span class="sr-only">Open user menu</span>
                    <button class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left lg:w-auto lg:inline lg:mt-0 lg:ml-4">
                        <span>Our Services</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                <MenuItems class="absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg lg:right-0 lg:origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a href="/8b-financing" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">Financing</a>
                    </MenuItem>
                    <!-- <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">Mentorship</a>
                    </MenuItem> -->
                </MenuItems>
            </transition>
        </Menu>
        <span>
            <a href="/events" class="flex self-center px-4 py-2 mt-2 text-sm lg:mt-0 lg:ml-4 ">Events</a>
        </span>
        <span>
            <a href="/news" class="flex self-center px-4 py-2 mt-2 text-sm lg:mt-0 lg:ml-4 ">8B In Action</a>
        </span>
        <Menu as="div" class="lg:relative">
            <div>
                <MenuButton class="">
                    <span class="sr-only">Open user menu</span>
                    <button class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left lg:w-auto lg:inline lg:mt-0 lg:ml-4">
                        <span>About Us</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </MenuButton>
            </div>
            <transition enter-active-class="z-50 transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                <MenuItems class="absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg lg:right-0 lg:origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <!-- <MenuItem v-slot="{ active }">
                    <a href="#" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">About 8B Education Investments</a>
                    </MenuItem> -->
                    <MenuItem v-slot="{ active }">
                    <a href="/team" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">Our Team</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="/mentors" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">Mentors</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="/advisors" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-xs text-finlandia-500 hover:underline']">Advisors</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="/investors" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">Investors</a>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Menu>
        <span>
            <a href="/faqs" class="flex self-center px-4 py-2 mt-2 text-sm lg:mt-0 lg:ml-4 ">FAQs</a>
        </span>
        <Menu as="div" class="lg:relative">
            <div>
                <MenuButton class="">
                    <span class="sr-only">Open user menu</span>
                    <button class="flex flex-row items-center w-full px-4 py-2 mt-2 text-sm text-left rounded-full bg-aero-blue-500 lg:w-auto lg:inline lg:mt-0 lg:ml-4">
                        <span>Contact Us</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="{'rotate-180': open, 'rotate-0': !open}" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform lg:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </button>
                </MenuButton>
            </div>
            <transition enter-active-class="transition duration-100 ease-out" enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100" leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100" leave-to-class="transform scale-95 opacity-0">
                <MenuItems class="absolute w-48 py-1 mt-2 bg-white rounded-md shadow-lg lg:right-0 lg:origin-top-right ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-slot="{ active }">
                    <a href="/inquiry" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">General Inquiry</a>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                    <a href="/request-financing" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-finlandia-500 hover:underline']">Request Funding Information</a>
                    </MenuItem>
                </MenuItems>
            </transition>
        </Menu>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
// import { BellIcon } from '@heroicons/vue/outline'

const navigation = [
  { name: 'Events', href: '#', current: true },
  { name: '8B In Action', href: '#', current: false },
  { name: 'FAQ', href: '#', current: false }
//   { name: 'Calendar', href: '#', current: false }
]

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems
    // BellIcon
    // MenuIcon,
    // XIcon
  },
  setup () {
    return {
      navigation
    }
  }
}
</script>
