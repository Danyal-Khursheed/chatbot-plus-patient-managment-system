import React from "react";
import "./home.css"; 
import data from "../../../../public/assets/data/data.json";
import about_bg from "../../../../public/assets/images/about-bg.jpg";
import maaz from "../../../../public/assets/images/Maaz.png";

import { Link } from "react-router-dom";
import Countup from "./../CountUp/Countup";
import Form from "../Form/Form";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Home = () => {
  return (
    <>
      {/* Banner */}
      <div className="md:flex">
        {" "}
        {/* Enables flexible arrangement on medium screens */}
        <div className="py-1 pl-20 md:py-40 md:w-6/12">
          <h1 className="pt-20 font-bold text-blue-300 title">
            {data.banner.title}
          </h1>
          <h3 className="mt-4 text-6xl font-bold ">{data.banner.subtitle}</h3>
          <p className="w-10/12 mt-5">{data.banner.description}</p>
          <button className="button"> <Link to='visit-us'>Book An Appointment</Link></button>
        </div>
        <div className="flex items-center justify-center h-screen md:w-6/12">
          <img className="image" src={data.banner.image} alt="image" />
        </div>
      </div>

      {/* What we offer */}

      <h1 className="py-20 pl-20 font-bold text-blue-500 title">
        What we treat
      </h1>

      {/* what we offer card  */}
      <div class="flex flex-col items-center">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.offers
            .filter((offer) => offer.show)
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
            <h1 className="mt-8 text-3xl "><Link to='/treatment'>See All</Link></h1>
          </a>
        </div>
      </div>

      <div className="team">
        <Countup />
      </div>

      {/* <div
        className="flex h-auto mt-32 bg-center bg-cover "
        style={{ backgroundImage: `url(${about_bg})`, minHeight: "200px" }}
      >
        <div className="pt-40 pl-20 md:w-6/12">
          <h1 className="pt-20 font-bold title">{data.about.name}</h1>
          <h3 className="mt-4 text-3xl font-bold ">
            {data.about.qualification}
          </h3>
          <p className="w-10/12 mt-5">{data.about.short_description}</p>
          <button className="button"><Link to='/visit-us'>Show More Details</Link></button>
          <img className=" md:hidden" src={data.about.image} />
        </div>
        <div className="mt-20 md:w-1/2">
          <img className="about-image" src={data.about.image} />
        </div>
      </div> */}

{/*  */}

           {/*  */}

      <div className="px-12 md:px-72">

      <Form/>
      </div>
    </>
  );
};

export default Home;
