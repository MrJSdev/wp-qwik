import { component$ } from '@builder.io/qwik';

export default component$(() => {
  function getYear() {
    return new Date().getFullYear()
  }

  return (
    <div className="container mx-auto px-2 sm:min-w-full">
      <div className="py-5 flex">
        <p className="text-base flex-1 text-gray-100">
          &copy; {getYear()}. All Rights Reserved
        </p>
        <p className="text-base flex-1 text-gray-100 text-right">
          <i className="icon-phone py-1 px-2 rounded-full bg-white text-primary" /> <span>+91 9029 777087</span>
        </p>
      </div>
    </div>
  )
})