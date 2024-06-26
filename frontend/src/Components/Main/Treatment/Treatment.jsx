import React from 'react'
import data from '../../../../public/assets/data/data.json'
import { Link } from 'react-router-dom'


const Treatment = () => {
  return (
    <>
       {/* What we offer */}

       <h1 className="pt-20 pl-20 font-bold text-blue-500 title">
        What we treat
      </h1>
      <p className="w-1/2 py-5 pl-20">
      BAGH Homoeo Clinic under the supervision of Dr. Guftiar Ahmed invites patients with the following diseased conditions. Dr. Guftiar Ahmed and his team of doctors and paramedics give special attention to each of their patient individually with the aim and attention on proper diagnosis and curable treatment:
      </p>

      {/* what we offer card  */}
      <div class="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.offers
            .map((offer) => {
              return (
                <div
                  key={offer.id}
                  class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                  <Link to={`/offer/${offer.id}`}>
                    <img
                      class="rounded-t-lg w-48 mx-auto mt-7"
                      src={offer.image}
                      alt="image"
                    />
                  </Link>
                  <div class="p-5">
                    <a href="#">
                      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {offer.name}
                      </h5>
                    </a>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      {offer.description}
                    </p>
                    <a
                      href="#"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Read more
                      <svg
                        class="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
        <div className="text-center">
          <a href="#">
            <h1 className="mt-8 text-3xl ">See All</h1>
          </a>
        </div>
      </div>
    </>
  )
}

export default Treatment