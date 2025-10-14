export default function Landingpage() {
  /* classname =""
  1. mandatory css
  2. brakpoint css(ui responsiveness tags
  2. dark/light mode conditonal css(break point 
  4. animations  dark:bg-blue-950*/
  return (
    <div className="bg-gray-200 flex flex-col items-center justify-center min-h-screen w-full ">
      <div className="min-h-screen bg-black h-[500px]  items-center rounded-[80px] mx-[100px] flex flex-col">
        <div className="bg-gray-800 h-[100px] rounded-2xl w-[1200px] flex flex-row justify-center items-center py-2 ">
          <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png" />

          <div className="flex flex-row">
            <div className=" hidden md:block px-[40px] underline underline-offset-4 mr-[20px] mt-2.5  text-red-600 font-bold">
              Home
            </div>
            <div className="hidden md:block px-[0px] underline underline-offset-4 mr-[20px] mt-2.5  text-white font-bold">
              About us
            </div>
            <div className=" hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5  text-white font-bold">
              pages
            </div>
            <div className=" hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-white font-bold">
              Shop
            </div>
            <div className=" hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-white font-bold">
              blog
            </div>
            <div className="hidden md:block px-[10px] underline underline-offset-4 mr-[20px] mt-2.5 text-white font-bold">
              contact
            </div>
            {/*mobile first response d */}
            {/*hidden and block:md is used to hide an html codevfor certian contions */}
          </div>
          <div className="flex flex-row">
            <div className="rounded-full hover:bg-black hover:text-white bg-gray-600  border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
            <div className= "hidden md:block rounded-full hover:bg-black hover:text-white bg-gray-600 border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              t
            </div>
            <div className=" hidden md:block rounded-full hover:bg-black hover:text-white  bg-gray-600  border border-cyan- border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
            <div className=" hidden md:block rounded-full hover:bg-black hover:text-white bg-gray-600  border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
            <div className=" hidden md:block rounded-full  hover:bg-black hover:text-white bg-gray-600  border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
          </div>
          <div className=" hidden md:block rounded-full hover:bg-black hover:text-white bg-gray-400  border border-b-cyan-950 border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] md:ml-[50px] w-[50px] py-2">
            F
          </div>
        </div>

        {/*hero section   dark:to-black dark :text-white*/}
        <div className="flex flex-row bg-black-200 h-[700px]  text-white rounded-4xl ">
          {/* text*/}
          <div>
            <div className="text-white text-lg font-bold text-[30px] w-[400px] font-semibold mt-[150px]">
              Where Quality is A <br />
              Service Meets The
              <br />
              <span className="text-red-600">Open Road</span>
              <div className="text-white text-sm">
                car service is essential for maintaining the performance and{" "}
                <br />
                longevity of your vehicle from all changes ar service
              </div>
            </div>
            <div className="flex flex-row  ">
              <div className="rounded-4xl border border-red-700 border-4 bg-cyanw-[150px] h-[50px] w-[150px] text-center mt-[30px]">
                Get started
              </div>
              <div className="rounded-full  bg-red-600  border border-black mt-[30px] ml-[50px] border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
                +
              </div>
            </div>
          </div>

          <div className="flex h-[500px]  text-amber-200 ml-[30px] mt-[100px] rounded-4xl">
            <img
              className="w-[400px] h-[400px] rounded-3xl"
              src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg"
            />
          </div>
        </div>
        {/* Statistics overlay card  dark:bg-black dark-border-white dark:text-white*/}
        <div
          className="bg-white w-[1000px] h-[100px] 
          absolute bottom-[-40px] rounded-md shadow-white shadow-md border
          border-black flex flex-row items-center justify-evenly space-x-2.5"
        >
          <div className="font-extrabold text-4xl ">600+</div>
          <div className="font-extrabold text-4xl">2K+</div>
          <div className="font-extrabold text-4xl">53+</div>
          <div className="font-extrabold text-4xl">3K+</div>
        </div>
      </div>
      {/*2nd page */}
      <div className="items-center">
        <div className="flex flex-col mt-[150px] bg-white  space-x-20.5 w-[1200px] rounded-4xl items-center">
          <span className=" text-red-600 font-medium mt-[20px]">
            {" "}
            LATEST SERVICE
          </span>
          <div className="text-4xl text-black font-medium pt-[10px]">
            Your Trusted Car Provider
            <br />
            Keeping Your Vehicle
          </div>
          <div className="flex flex-row justify-center m-[40px] ">
            <div
              className="flex flex-col items-center justify-center 
                    w-[300px] h-[300px] rounded-md border-2 border-black 
                   hover:bg-black hover:text-white m-[20px] dark:hover:bg-black dark:hover:text-white "
            >
              <div className="bg-linear-60 bg-indigo-400 w-[80px] h-[80px] rounded-full "></div>

              <div className="font-bold text-lg mt-2">
                Transformation Advising
              </div>

              <div className="text-center">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>

            <div
              className="flex flex-col items-center justify-center 
w-[300px] h-[300px] rounded-md border-2 border-black 
hover:bg-black hover:text-white  m-[20px]"
            >
              <div className="bg-linear-60 bg-indigo-400 w-[80px] h-[80px] rounded-full"></div>

              <div className="font-bold text-lg mt-2">
                Easy Drive Maintenance
              </div>

              <div className="text-center">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
            <div
              className="flex flex-col items-center justify-center 
w-[300px] h-[300px] rounded-md border-2 border-black shadow-black
hover:bg-black hover:text-white m-[20px]"
            >
              <div className="bg-linear-60 bg-indigo-400 w-[80px] h-[80px] rounded-full"></div>

              <div className="font-bold text-lg mt-2">Elite Auto Services</div>

              <div className="text-center">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*3rd page */}
      <div className="flex flex-row h-[500px] w-[1000px] mt-[100px] items-center ">
        <div className=" w-[600px] h-[400px] ">
          <span className=" text-red-600 font-medium"> ABOUT US</span>
          <div className="text-4xl text-black font-medium pt-[30px]">
            Fast and Reliable Car Care
            <br />
            Your Car Our Priority
          </div>
          <div className="text-m text-black pt-[30px]">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes
            <br />
          </div>
          <div className="text-lg font-semibold pt-[30px] ">
            Fast and Reliable Car Care Your Car Our Priority
            <br />
            Free with Our Services Care for Your Car
            <br />
            Top-notch Care for Your Vehicle Your Vehicle
            <br />
            Expert Service for Your Vehicle Drive Stress
          </div>
        </div>
        <div>
          <img
            className="mt-[100px] rounded-4xl mt-2.5 ml-[100px]"
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
          />
        </div>
      </div>
      <div className="flex flex-col bg-black h-[100px] w-[600px] justify-center rounded-4xl mx-[400px] mt-[10px]">
        <div className="flex flex-row text-white items-center ">
          <div className="ml-[50px]">Coinbase</div>
          <div className="ml-[50px]">Dropbox</div>
          <div className="ml-[50px]">slack</div>
          <div className="ml-[50px]">Spotify</div>
          <div className="ml-[50px]">Gizmodo</div>
        </div>
      </div>
      {/*4th page */}
      <div className="flex flex-col h-[500px] w-full mt-[100px]  ml-[100px] items-center">
        <div className=" w-[600px] h-[400px] flex flex-col ">
          <span className=" text-red-600 font-medium">LATEST QUALITY</span>
          <div className="flex flex-row">
            <div className=" w-[900px] h-[100px] font-bold text-4xl ">
              Quality Service, Every Time
              <br />
              Drive Safe Stay Secure
            </div>
            <div className="w-[600px] ml-[50px]">
              Car service is essential for maintaining the performance and
              <br /> longevity of your vehicle. From oil changes
            </div>
          </div>
          <div className="flex flex-row  justify-center">
            <div>
              <img
                className=" h-[300px] w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg"
              />{" "}
            </div>
            <div>
              <img
                className=" h-[300px] w-[300px] rounded-4xl my-[30px] ml-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div>
              <img
                className=" h-[300px] w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg"
              />{" "}
            </div>
            <div>
              <img
                className=" h-[300px] w-[300px] rounded-4xl my-[30px] ml-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg"
              />
            </div>
          </div>
          <div className="flex flex-row ">
            <div>
              <img
                className=" h-[300px] w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-6.jpg"
              />{" "}
            </div>
            <div>
              <img
                className=" h-[300px] w-[300px] rounded-4xl my-[30px] ml-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      {/*5th page */}
      <div className="flex flex-col h-[600px] w-full mt-[800px]   rounded-4xl items-center">
        <span className=" text-red-600 font-medium ">ASK QUESTION</span>
        <div>
          <span className=" w-[900px] h-[100px] font-bold  text-4xl ">
            {" "}
            Got Questions? We've
          </span>
        </div>
        <div>
          <span className=" w-[900px] h-[100px] font-bold text-4xl  ">
            Got Answers
          </span>
        </div>
        <div className="flex flex-col h-[100px] w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-2xl font-semibold mt-[10px]">
          What types of businesses do you support?
        </div>
        <div className="flex flex-col h-[100px] w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-2xl font-semibold mt-[20px]">
          What are the signs of brake wear?
        </div>
        <div className="flex flex-col h-[100px] w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-2xl font-semibold mt-[20px]">
          Are scheduled service intervals important for my car?
        </div>
        <div className="flex flex-col h-[100px] w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-2xl font-semibold mt-[20px]">
          Can regular maintenance prevent major repairs?
        </div>
      </div>
      {/*6th page */}
      <div className="flex flex-col h-[500px] w-[1300px] bg-black my-[200px] mx-[200px] rounded-4xl py-2 ">
        <div className="flex flex-col h-[100px] w-[200px] m-[40px]">
          <span className="text-sm font-semibold text-red-600">
            TESTIMONIAL
          </span>

          <div className=" w-[900px] h-[100px] font-bold text-4xl text-white mt-[20px] ">
            Clients Testimonial
          </div>
          <div className="flex flex-row h-[200px] w-[1400px] mt-[50px] ">
            <div className="flex flex-row h-[200px] w-[400px] border-2 border-white rounded-3xl text-white ">
              <img
                className="h-[130px] w-[80px] rounded-3xl "
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
              />
              <div className="flex flex-col mt-[10px] ml-[40px]">
                <div className=" font-bold">Arlene Smith</div>
                <div className="text-sm mt-[10px]">Nursing Assistant</div>
                <div className="mt-[10px]  ">
                  Car service the maintaining and the <br /> performance
                  longevity of vehicle a <br />
                  From oil is a and tire rotations
                </div>
              </div>
            </div>
            <div className="flex flex-row h-[200px] w-[400px] border-2 border-white rounded-3xl text-white ml-[20px] ">
              <img
                className="h-[130px] w-[80px] rounded-3xl "
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
              />
              <div className="flex flex-col mt-[10px] ml-[40px]">
                <div className=" font-bold">Arlene Smith</div>
                <div className="text-sm mt-[10px]">Nursing Assistant</div>
                <div className="mt-[10px]  ">
                  Car service the maintaining and the <br /> performance
                  longevity of vehicle a <br />
                  From oil is a and tire rotations
                </div>
              </div>
            </div>
            <div className="flex flex-row h-[200px] w-[400px] border-2 border-white rounded-3xl text-white ml-[20px] ">
              <img
                className="h-[130px] w-[80px] rounded-3xl "
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-4.jpg"
              />
              <div className="flex flex-col mt-[10px] ml-[40px]">
                <div className=" font-bold">Arlene Smith</div>
                <div className="text-sm mt-[10px]">Nursing Assistant</div>
                <div className="mt-[10px]  ">
                  Car service the maintaining and the <br /> performance
                  longevity of vehicle a <br />
                  From oil is a and tire rotations
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*7th page */}
      <div className="flex flex-col h-[500px] w-full text-black items-center">
        <span className=" text-red-600 text-xs font-medium mt-[30px]">
          OUR TEAM
        </span>
        <div className="mt-[20px] text-3xl">
          They are Our Best Team Member Ever
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col h-auto w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px]">
            {/* Image section */}
            <div className="  hover:bg-gray-300 transition-all duration-300  flex justify-center bg-white p-4">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-1.jpg"
                className=" rounded-xl h-[250px] w-[300px] object-cover"
              />
            </div>

            {/* Text section */}
            <div className="flex flex-col items-center justify-center py-4 ml-[50px]">
              <div className="flex flex-row">
                <div className="flex items-center justify-center rounded-full border-4 border-black h-[50px] w-[50px] mb-2 "></div>
                <div className="flex flex-col ml-[50px]">
                  <span className="text-lg  font-semibold text-black">
                    Darlene Robertson
                  </span>
                  <span className="text-sm text-black">Nursing Assistant</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] ml-[50px]">
            {/* Image section */}
            <div className="  hover:bg-gray-300 transition-all duration-300 flex justify-center bg-white p-4">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-2.jpg"
                className="rounded-xl h-[250px] w-[300px] object-cover"
              />
            </div>

            {/* Text section */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="flex flex-row">
                <div className="flex items-center justify-center rounded-full border-4 border-black h-[50px] w-[50px] mb-2"></div>
                <div className="flex flex-col ml-[50px]">
                  <span className="text-lg  font-semibold text-black">
                    Dianne Russell
                  </span>
                  <span className="text-sm text-black">President of Sales</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col h-auto w-[300px] bg-white rounded-2xl shadow-xl overflow-hidden ml-[50px] mt-[50px]">
            {/* Image section */}
            <div className=" hover:bg-gray-300 transition-all duration-300  flex justify-center bg-white p-4">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-3.jpg"
                className="  rounded-xl h-[250px] w-[300px] object-cover"
              />
            </div>

            {/* Text section */}
            <div className="flex flex-col items-center justify-center py-4">
              <div className="flex flex-row">
                <div className="flex items-center justify-center rounded-full border-4 border-black h-[50px] w-[50px] mb-2"></div>
                <div className="flex flex-col ml-[50px]">
                  <span className="text-lg  font-semibold text-black">
                    Leslie Alexander
                  </span>
                  <span className="text-sm text-black">Medical Assistant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*8th page */}
      <div className="flex flex-col h-[800px] w-full text-black items-center mt-[150px]">
        <span className=" text-red-600 text-xs font-medium mt-[30px]">
          PRICING PLAN
        </span>
        <div className="mt-[10px] text-3xl font-semibold">Our Pricing plan</div>
        <div className="flex flex-row h-[50px] w-[155px] border-2 border-amber-700 rounded-4xl mt-[40px]">
          <div className="  hover:bg-red-800 hover:text-white  m-[5px]">
            MONTHLY|
          </div>
          <div className=" hover:bg-red-800 hover:text-white m-[5px]">
            YEARLY
          </div>
        </div>
        <div className="flex flex-row ">
          <div className="flex flex-col h-[600px] w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px]">
            {/* block 2*/}
            <div className="flex flex-col h-[200px] w-[400px]">
              <div className=" ml-[40px] w-[400px] text-black font-semibold text-4xl mt-[30px]">
                Free
              </div>
              <div className="  ml-[40px] w-[400px] text-black text-sm mt-[30px]">
                Car service is essential for maintaining performance
                <br /> and longevity of vehicle. From oil changes
              </div>
              <div className="flex flex-row h-[200px] w-[400px] text-black text-2xl mt-[30px]">
                <div>
                  <span className=" ml-[40px] font-bold text-4xl">$0</span>
                  /month
                </div>
                <div className="rounded-full h-[50px] ml-[150px] w-[50px] bg-gray-200 border-2 border-black"></div>
              </div>
            </div>

            <div className="flex flex-col h-[400px] w-[400px] text-2xl font-medium text-black mt-[50px]">
              <div className=" ml-[40px]">Mistakes To Avoid</div>

              <div className="mt-[20px]  ml-[40px]">
                Winning for Your Startup
              </div>

              <div className="mt-[20px]  ml-[40px]">Mistakes To Avoid</div>

              <div className="mt-[20px]  ml-[40px]">
                Your Event, Your Memories
              </div>
              <div className="  mt-[30px] ml-[40px] rounded-3xl h-[50px] w-[310px] bg-gray-300 hover:bg-red-800 hover:text-white text-black ">
                GET SARTED NOW
              </div>
            </div>
          </div>
          <div className="flex  ml-[30px] flex-col h-[600px] w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px]">
            {/* block 2*/}
            <div className="flex flex-col h-[200px] w-[400px]">
              <div className=" ml-[40px] w-[400px] text-black font-semibold text-4xl mt-[30px]">
                Free
              </div>
              <div className="  ml-[40px] w-[400px] text-black text-sm mt-[30px]">
                Car service is essential for maintaining performance
                <br /> and longevity of vehicle. From oil changes
              </div>
              <div className="flex flex-row h-[200px] w-[400px] text-black text-2xl mt-[30px]">
                <div>
                  <span className=" ml-[40px] font-bold text-4xl">$0</span>
                  /month
                </div>
                <div className="rounded-full h-[50px] ml-[150px] w-[50px] bg-gray-200 border-2 border-black"></div>
              </div>
            </div>

            <div className="flex flex-col h-[400px] w-[400px] text-2xl font-medium text-black mt-[50px]">
              <div className=" ml-[40px]">Mistakes To Avoid</div>

              <div className="mt-[20px]  ml-[40px]">
                Winning for Your Startup
              </div>

              <div className="mt-[20px]  ml-[40px]">Mistakes To Avoid</div>

              <div className="mt-[20px]  ml-[40px]">
                Your Event, Your Memories
              </div>
              <div className="  mt-[30px] ml-[40px] rounded-3xl h-[50px] w-[310px] bg-gray-300 hover:bg-red-800 hover:text-white text-black ">
                GET SARTED NOW
              </div>
            </div>
          </div>
          <div className="flex ml-[30px] flex-col h-[600px] w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px]">
            {/* block 2*/}
            <div className="flex flex-col h-[200px] w-[400px]">
              <div className=" ml-[40px] w-[400px] text-black font-semibold text-4xl mt-[30px]">
                Free
              </div>
              <div className="  ml-[40px] w-[400px] text-black text-sm mt-[30px]">
                Car service is essential for maintaining performance
                <br /> and longevity of vehicle. From oil changes
              </div>
              <div className="flex flex-row h-[200px] w-[400px] text-black text-2xl mt-[30px]">
                <div>
                  <span className=" ml-[40px] font-bold text-4xl">$0</span>
                  /month
                </div>
                <div className="rounded-full h-[50px] ml-[150px] w-[50px] bg-gray-200 border-2 border-black"></div>
              </div>
            </div>

            <div className="flex flex-col h-[400px] w-[400px] text-2xl font-medium text-black mt-[50px]">
              <div className=" ml-[40px]">Mistakes To Avoid</div>

              <div className="mt-[20px]  ml-[40px]">
                Winning for Your Startup
              </div>

              <div className="mt-[20px]  ml-[40px]">Mistakes To Avoid</div>

              <div className="mt-[20px]  ml-[40px]">
                Your Event, Your Memories
              </div>
              <div className="  mt-[30px] ml-[40px] rounded-3xl h-[50px] w-[310px] bg-gray-300 hover:bg-red-800 hover:text-white text-black ">
                GET SARTED NOW
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 9 th page*/}
      <div className=" flex flex-col h-[600px] w-full  text-black  m-[100px]">
        <div className="flex flex-col  w-full text-white ml-[20px]">
          <span className="  text-red-600 text-xs font-medium mt-[30px]">
            LATEST BLOG AND NEWS
          </span>
        </div>
        <div className="flex flex-row mt-[10px]">
          <div className="ml-[20px] text-4xl font-semibold">
            Our Best Recent Blog And News
          </div>
          <div className="ml-[600px] h-[40px]  hover:bg-black hover:text-white rounded-3xl w-[100px] bg-gray-50 border border-2 border-black">
            VIEW MORE
          </div>
        </div>
        <div className="flex flex-row h-[600px] w-full bg-black">
          <div className="h-[400px] w-[300px]  bg-white rounded-3xl m-[50px]">
            {/*image */}
            <div>
              <img
                className="h-[170px] m-[15px] w-[270px] rounded-3xl"
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-3.jpg"
              />
            </div>
            {/*middle col */}
            <div className="flex flex-row h-[30px] w-[300px]">
              <div className="mt-[30px] ml-[20px] ">By admin</div>
              <div className="mt-[30px] ml-[50px] ">O comment</div>
              <div className="mt-[30px] ml-[80px] rounded-4xl h-[50px] w-[50px] text-white bg-red-700">
                20
                <br />
                OCT
              </div>
            </div>
            <div className="text-black font-semibold text-2xl mt-[40px] ml-[20px]">
              Your Trusted Car Service
              <br /> Provider Keeping
              <div className="font-bold text-black mt-[40px] ml-[20px]">
                READ MORE
              </div>
            </div>
          </div>
          <div className="ml-[20px] text-4xl font-semibold">
            Our Best Recent Blog And News
          </div>
          <div className="ml-[600px] h-[40px]  hover:bg-black hover:text-white rounded-3xl w-[100px] bg-gray-50 border border-2 border-black">
            VIEW MORE
          </div>
        </div>
        <div className="flex flex-row h-[600px] w-full bg-black">
          <div className="h-[400px] w-[300px]  bg-white rounded-3xl m-[50px]">
            {/*image */}
            <div>
              <img
                className="h-[170px] m-[15px] w-[270px] rounded-3xl"
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-3.jpg"
              />
            </div>
            {/*middle col */}
            <div className="flex flex-row h-[30px] w-[300px]">
              <div className="mt-[30px] ml-[20px] ">By admin</div>
              <div className="mt-[30px] ml-[50px] ">O comment</div>
              <div className="mt-[30px] ml-[80px] rounded-4xl h-[50px] w-[50px] text-white bg-red-700">
                20
                <br />
                OCT
              </div>
            </div>
            <div className="text-black font-semibold text-2xl mt-[40px] ml-[20px]">
              Your Trusted Car Service
              <br /> Provider Keeping
              <div className="font-bold text-black mt-[40px] ml-[20px]">
                READ MORE
              </div>
            </div>
          </div>

          <div className=" flex flex-col ml-[20px] text-4xl font-semibold">
            Our Best Recent Blog And News
          </div>
          <div className="ml-[600px] h-[40px]  hover:bg-black hover:text-white rounded-3xl w-[100px] bg-gray-50 border border-2 border-black">
            VIEW MORE
          </div>
        </div>
        <div>
          <div className="flex flex-row h-[600px] w-full bg-black">
            <div className="h-[400px] w-[300px]  bg-white rounded-3xl m-[50px]">
              {/*image */}
              <div>
                <img
                  className="h-[170px] m-[15px] w-[270px] rounded-3xl"
                  src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-3.jpg"
                />
              </div>
              {/*middle col */}
              <div className="flex flex-row h-[30px] w-[300px]">
                <div className="mt-[30px] ml-[20px] ">By admin</div>
                <div className="mt-[30px] ml-[50px] ">O comment</div>
                <div className="mt-[30px] ml-[80px] rounded-4xl h-[50px] w-[50px] text-white bg-red-700">
                  20
                  <br />
                  OCT
                </div>
              </div>
              <div className="text-black font-semibold text-2xl mt-[40px] ml-[20px]">
                Your Trusted Car Service
                <br /> Provider Keeping
                <div className="font-bold text-black mt-[40px] ml-[20px]">
                  READ MORE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
