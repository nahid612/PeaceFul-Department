const Banner = () => {
  return (
    <>
      <div className="carousel w-full lg:h-[550px] md:h-[450px] h-[400px] rounded-xl">
        <div
          id="item1"
          className="hero min-h-screen carousel-item w-ful"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/cL6RK4D7/edwin-petrus-CP4ms-RXKWOM-unsplash.jpg)",
          }}
        >
          <div  className="hero-overlay bg-opacity-70"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" max-w-[700px]">
              <h1 className="mb-5 text-3xl font-bold">Welcome to Our <br /> <span className="text-5xl font-bold">PeaceFul Department</span></h1>
              <p className="mb-5">
              Good Service is our passion. No matter what the weather, no matter what the situation we are in, if we have the right perspective in life, life will always be beautiful!
              </p>
              <button className="btn btn-primary">Explore</button>
            </div>
          </div>
        </div>
        <div
          id="item2"
          className="hero min-h-screen carousel-item w-ful"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/90VPzdSz/abdullah-al-mamun-dot-Sodu-Pd-CY-unsplash.jpg)",
          }}
        >
          <div  className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div
          id="item3"
          className="hero min-h-screen carousel-item w-ful"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/7Yns16Mp/sara-dubler-Koei-7y-Yt-Io-unsplash.jpg)",
          }}
        >
          <div  className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
        <div
          id="item4"
          className="hero min-h-screen carousel-item w-ful"
          style={{
            backgroundImage:
              "url(https://i.postimg.cc/90VPzdSz/abdullah-al-mamun-dot-Sodu-Pd-CY-unsplash.jpg)",
          }}
        >
          <div  className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
};

export default Banner;
