import { component$ } from '@builder.io/qwik';
import projects from '~/data/recent-works.json';
import { RecentWork } from '~/types/Portfolio';

export default component$(() => {
  return (
    <div className="py-10 sm:py-6 inline-block w-full px-2">
    <h2 className="text-3xl font-bold uppercase py-10 sm:py-5 sm:text-2xl text-center text-primary-100">
      Recent Projects
    </h2>
    <div className="flex flex-wrap -mx-2">
      {projects.map((project: RecentWork) => (
        <div v-for="(work, index) in recentWorks" className="item w-4/12 sm:w-full px-2 mb-4 float-left">
        <a href={`/project/${project.id}`} >
          <div className="shadow-md cursor-pointer rounded-b-lg hover:shadow-lg">
            <img src={`images/portfolio/${project.thumbnail}`} className="w-full rounded-t" alt="" />
            
            <div className="details p-3 rounded-b-lg bg-gray-100">
              <h3 className="font-semibold text-gray-800 text-lg">
                { project.company }
              </h3>
              <p className="text-gray-700 text-sm">
                { project.workOn }
              </p>
            </div>
          </div>
        </a>
      </div>
      ))}
      
    </div>
  </div>
  );
});