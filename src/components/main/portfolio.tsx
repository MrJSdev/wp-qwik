import { component$ } from '@builder.io/qwik';
import portfolio from '~/data/portfolio.json';

export default component$(() => {




  return <>
    <div class="py-10 sm:py-6 inline-block w-full px-2">
    <h2 class="text-3xl font-bold uppercase py-10 sm:py-5 sm:text-2xl text-center text-primary-100">
      Recent Projects
    </h2>
    <div class="flex flex-wrap -mx-2">
      {portfolio.map((work, index) => (
        <div class="shadow-md cursor-pointer rounded-b-lg hover:shadow-lg">
        <img src={`assets/img/portfolio/${work.thumbnail}`} class="w-full rounded-t" alt="">
        <div class="details p-3 rounded-b-lg bg-gray-100">
          <h3 class="font-semibold text-gray-800 text-lg">
            {{ work.company }}
          </h3>
          <p class="text-gray-700 text-sm">
            {{ work.workOn }}
          </p>
        </div>
      </div>
      ))}
      <div v-for="(work, index) in recentWorks" :key="index" class="item w-4/12 sm:w-full px-2 mb-4 float-left">
        <nuxt-link :to="'/portfolio/' + work.id">
          
        </nuxt-link>
      </div>
    </div>
  </div>
  </>
})