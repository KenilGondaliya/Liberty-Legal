import React from 'react'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div className="text-center">
      <p className="text-5xl font-semibold text-stone-800">404</p>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Only Login User Can Access </h1>
      <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Link
          to="/"x xx
          className="rounded-md bg-stone-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </Link>
        <Link to="/sing-in" 
        className="text-sm font-semibold text-gray-400 hover:text-gray-800">
          Log in <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  </main>
  )
}

export default Error


        {/*
          This example requires updating your template:
  
          ```
          <html class="h-full">
          <body class="h-full">
          ```
        */}
        
  
  