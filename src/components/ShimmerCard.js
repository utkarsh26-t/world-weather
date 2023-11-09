import React from 'react'

const ShimmerCard = () => {
  return (
    <article className="animate-pulse flex flex-row sm:block bg-slate-100 rounded-lg p-2 w-1/3 mx-auto h-64">
      <div className="rounded-lg basis-2/5 h-full sm:h-1/2 bg-slate-200"></div>
      <section className="px-2 basis-3/4 sm:px-0">
        <div className="h-6 bg-slate-200 w-1/2 my-2 rounded-lg"></div>
        <div className="h-6 bg-slate-200 w-3/4 my-2 rounded-lg"></div>
        <div className="flex justify-between w-full h-6">
          <span className="w-1/4 bg-slate-200 rounded-lg"></span>
          <span className="w-1/4 bg-slate-200 rounded-lg"></span>
        </div>
      </section>
    </article>
  );
}

export default ShimmerCard