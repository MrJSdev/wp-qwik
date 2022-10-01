import { useLocation } from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import projects from '~/data/works.json';

export default component$(() => {
  const location = useLocation();
  console.log({ location })

  const project = projects.find((project) => project.id === parseInt(location.params.projectId));

  return (
    <div className="container mx-auto px-2 sm:min-w-full">
      <div className="w-full mt-4 bg-white rounded-lg shadow-lg">
        <div className="flex p-10 bg-gray-200 rounded-lg head sm:p-5">
          <div className="w-8/12 sm:w-full">
            <h1 className="text-2xl font-bold text-gray-800 sm:text-xl">
              {project?.company}
            </h1>
            <p className="text-base text-gray-700 sm:text-sm">
              {project?.workOn}
            </p>
          </div>

          {project?.appUrl && (
            <div className="w-4/12 font-medium sm:w-full">
              <p className="font-semibold text-gray-800">App URL</p>
              <a href={project.appUrl} className="text-blue-600">{project.appUrl}</a>
            </div>
          )}
        </div>
        <div className="flex p-10 bg-white rounded sm:mt-4 sm:p-4 sm:inline-block">
          <div className="flex-1 pr-10 features sm:w-full sm:flex-none sm:pr-0">
            <h3 className="pb-1 mb-4 text-lg font-semibold text-gray-700 uppercase border-b-2 sm:text-base">
              Developed
            </h3>
            <ul>
              {project?.developed.map((feature) => (
                <li className="mb-2 text-sm text-gray-700">
                  <i className="mr-1 icon-hand-o-right" /> {feature}
                </li>
              ))}

            </ul>
          </div>
          <div className="flex-1 pl-10 sm:w-full sm:mt-5 sm:flex-none skills-used sm:pl-0">
            <h3 className="pb-1 mb-4 text-lg font-semibold text-gray-700 uppercase border-b-2 sm:text-base">
              Technologies
            </h3>
            <ul>
              {project?.skills.map((skill) => (
                <li className="inline-block px-5 py-2 mb-2 mr-2 text-sm font-medium text-green-600 border-2 border-gray-300 rounded-full">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          </div>
          <div className="flex px-10 pb-10 bg-white rounded-b-lg sm:px-5 sm:inline-block sm:pb-5">
            <div className="flex-1 sm:w-full skills-used">
              <h3 className="pb-1 mb-4 text-lg font-semibold text-gray-700 uppercase border-b-2 sm:text-base">
                Packages
              </h3>
              <ul>
                {project?.packages.map((pack) => (
                  <li className="inline-block px-5 py-1 mb-2 mr-2 text-xs font-medium text-gray-800 bg-gray-300 rounded-full">
                    {pack}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
});

export const head: DocumentHead = {
  title: 'Mr. JS Developer',
};
