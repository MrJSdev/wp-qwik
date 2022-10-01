import { component$ } from '@builder.io/qwik';
import { Skill } from '~/types/Portfolio';

type Props = {
  skill: Skill
}

export default component$((props: Props) => {
  return <>
    <div className="float-left w-2/6 sm:w-full px-2 mb-4">
      <div className="bg-white rounded flex flex-wrap shadow py-5 px-4">
        <div className="skill-icon flex-2 flex-initial mr-3 pt-1">
          <i className={props.skill.icon + ' text-3xl text- py-3 px-3 rounded-full text-blue-600 bg-white border-2 border-gray-200'} />
        </div>
        <div className="flex-1 pt-1">
          <h3 className="font-bold text-gray-700 -mt-2 mb-1">
            {props.skill.title}
          </h3>
          <div className="rounded-full w-full h-2 bg-gray-200 ">
            <div style={{ 'width': props.skill.percentage }} className="rounded-full w-full h-2 bg-gradient" />
          </div>
        </div>
      </div>
    </div>
  </>
})