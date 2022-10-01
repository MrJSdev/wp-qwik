import { component$ } from '@builder.io/qwik'
import { Experience } from '~/types/Portfolio';


export interface ExperienceProps {
  title: string;
  experience: Experience;
  total: number;
  index: number;
}

export default component$((props: ExperienceProps) => {

  return (
    <div className="item flex flex-initial flex-wrap">
      {props.title === 'Experience' && (
        <div className="w-8 relative mx-w-4">
          <div className="inline-block relative z-10 bg-green-400 p-1 rounded-full">
            <div className="p-1 bg-green-400 border-white border-2 rounded-full" />
          </div>
          {props.index !== props.total && (
            <div className="line absolute top-0 bottom-0 mt-5 left-0 w-1 ml-2 bg-gray-300" />
          )}
        </div>
      )}

      <div className={`flex-1 sm:w-full sm:px-0 pb-6 px-2 ${props.title === 'Experience' ? 'pr-5' : 'pl-5'}`}>
        <div className="bg-white p-5 rounded shadow-md border border-dashed border-green-300">
          <div className="flex flex-wrap">
            <h3 className="uppercase flex-1 text-lg font-semibold text-gray-900 mb-1">
              {props.experience.position}
            </h3>
            <div className="company text-sm text-green-700">
              {props.experience.date}
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="company flex-1 text-base text-gray-700">
              {props.experience.company}
            </div>
            <div className="company text-right flex-1 text-sm text-yellow-700">
              {props.experience.location}
            </div>
          </div>

          {props.title === 'Experience' && (
            <>
              {/* Skills list */}
              <ul className="mt-1">
                {props.experience.skills?.map((skill) => (
                  <li className="bg-gray-100 mt-1 inline-block rounded-lg text-xs mr-1 px-4 py-1 border-1 border-blue-500 text-primary font-semibold">
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Responsibilities List */}
              <ul className="mt-4">
                {props.experience.responsibility?.map((responsibility) => (
                  <li className="text-sm text-gray-700 mb-2">
                    <i className="icon-hand-o-right mr-1" /> {responsibility}
                  </li>
                ))}

              </ul>
            </>
          )}
        </div>
      </div>

      {props.title === 'Education' && (
        <div className="w-8 text-right relative mx-w-4">
          <div className="inline-block relative z-10 bg-green-400 p-1 rounded-full">
            <div className="p-1 bg-green-400 border-white border-2 rounded-full" />
          </div>

          {props.index !== props.total && (
            <div className="line absolute top-0 bottom-0 mt-5 right-0 w-1 mr-2 bg-gray-300" />
          )}
        </div>
      )}

    </div>
  )
});