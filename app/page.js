export default function Landingpage() {
  /* classname =""
  1. mandatory css
  2. brakpoint css(ui responsiveness tags
  2. dark/light mode conditonal css(break point 
  4. animations  dark:bg-blue-950*/
  return (
    <div className="bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center h-full md:min-h-screen w-fit md:w-full ">
      <div className="min-h-screen bg-black w-[100%] md:w-[1400px] h-[1500px] md:h-[500px]  items-center md:rounded-[80px] mx-[100px] flex flex-col">
        <div className="bg-gray-800 h-[400px] md:h-[100px] rounded-2xl w-[1400px] md:w-[1200px] flex flex-row justify-center items-center py-2 ">
          <img
            className="md:h-[50px] h-[200px]"
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png  "
          />

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
            <div className=" hidden md:block rounded-full  hover:bg-black hover:text-white bg-gray-600  border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
            <div className="hidden md:block rounded-full hover:bg-black hover:text-white bg-gray-600 border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              t
            </div>
            <div className=" hidden md:block rounded-full hover:bg-black hover:text-white  bg-gray-600  border border-cyan- border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
            <div className=" hidden md:block rounded-full hover:bg-black hover:text-white bg-gray-600  border border-cyan border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
            <div className=" hidden md:block rounded-full  hover:bg-black hover:text-white bg-gray-600  border border-cyan border-4 bg-cyanw-[150px]h-[50px] text-center mt-[10px] w-[50px] py-2">
              F
            </div>
          </div>
          <div className="  rounded-full hover:bg-black hover:text-white bg-gray-400  border border-b-cyan-950 border-4 bg-cyanw-[150px]  h-[150px] md:h-[50px] md:w-[50px] w-[150px] text-center md:mt-[10px]  ml-[350px] md:ml-[50px] w-[50px] py-2">
            F
            {/*hidden md:block is used to block full div from moblie view ....md:text-white makes text
          visible white in laptop view but hides it in mbl view  so when mbl responsive nes ...you 
          make the mbl view px as default anad for rest you use md :"things you want to hide from the mbl view" */}
          </div>
        </div>

        {/*hero section   dark:to-black dark :text-white*/}
        <div className="flex flex-row bg-black-200 h-[700px]  text-white rounded-4xl ">
          {/* text*/}
          <div>
            <div className="text-white  font-bold text-9xl md:text-4xl md:w-[400px] font-semibold ml-[60px] mt-[400px] md:mt-[150px]">
              Where Quality is A <br />
              Service Meets The
              <br />
              <span className="text-red-600">Open Road</span>
              <div className="text-white text-5xl md:text-sm">
                car service is essential for maintaining the performance and{" "}
                <br />
                longevity of your vehicle from all changes ar service
              </div>
            </div>
            <div className="flex flex-col md:flex-row  ">
              <div className=" text-2xl md:text-2xl rounded-4xl border border-red-700 border-4 bg-cyanw-[150px] h-[50px] w-[150px] text-center ml-[60px] md:ml-[60px] mt-[50px] md:mt-[30px]">
                Get started
              </div>
              <div className="rounded-full  bg-red-600  border border-black mt-[30px] ml-[60px] md:ml-[60px] border-4 bg-cyanw-[150px] h-[50px] text-center mt-[10px] w-[50px] py-2">
                +
              </div>
            </div>
          </div>

          <div className="flex h-[500px]  text-amber-200 ml-[30px] mt-[100px] rounded-4xl">
            <img
              className="hidden md:block w-[400px] h-[400px] rounded-3xl"
              src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-1.jpg"
            />
          </div>
        </div>
        {/* Statistics overlay card  dark:bg-black dark-border-white dark:text-white*/}
        {/*flex flex-col md:flex-row meaining in mbl view it will be arrange col vise and 
        in laptop it will be row wise */}
      </div>
      <div className="relative flex  justify-center items-center">
        <div
          className="bg-white w-7xl md:w-[1000px] h-[2000px] md:h-[100px] 
             rounded-md shadow-md border border-black flex flex-col md:flex-row 
           items-center justify-evenly mt-[1px] md:mt-[-60px] z-50"
        >
          <div className="font-extrabold text-9xl md:text-4xl ">600+</div>
          <div className="font-extrabold text-9xl md:text-4xl">2K+</div>
          <div className="font-extrabold text-9xl md:text-4xl">53+</div>
          <div className="font-extrabold text-9xl md:text-4xl">3K+</div>
        </div>
      </div>
      {/*2nd page */}
      <div className="items-center mt-[100px] md:mt-[10px] w-[90%] md:w-[1200px]">
        <div className="flex flex-col  mt-[100px] dark:border-1 dark:border-white md:mt-[150px] bg-white dark:bg-black ml-[50px] md:space-x-20.5 rounded-4xl  items-center">
          <span className=" text-red-600 font-bold md:text-sm text-3xl  md:font-medium  mt-[30px] md:mt-[20px]">
            {" "}
            LATEST SERVICE
          </span>
          <div className="text-4xl text-black dark:text-white font-medium  pt-[20px]   md:pt-[50px]">
            Your Trusted Car Provider
            <br />
            Keeping Your Vehicle
          </div>
          <div className=" flex flex-col  md:flex-row  justify-center    m-[40px] ">
            <div
              className="
                flex flex-col 
                items-center
                dark:text-white 
                 justify-center 
                 w-full md:w-[300px]
                 md:h-[300px] h-[600px]
                 rounded-4xl border-4 
                 md:rounded-3xl border-2
                 border-black
                 dark:border-white
                 hover:bg-black
                 hover:text-white
                  m-[20px]
                 dark:hover:bg-white
                 dark:hover:text-black "
            >
              <div className="bg-linear-60 dark:bg-indigo-900 bg-indigo-400 w-[150px] h-[150px] md:w-[80px] md:h-[80px] rounded-full"></div>

              <div className="font-bold text-6xl md:text-lg mt-2">
                Transformation Advising
              </div>

              <div className=" md:text-sm text-6xl text-center">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
            <div
              className="
                flex flex-col 
                items-center
                dark:text-white 
                 justify-center 
                 w-full md:w-[300px]
                 md:h-[300px] h-[600px]
                 rounded-4xl border-4 
                 md:rounded-3xl border-2
                 border-black
                 dark:border-white
                 hover:bg-black
                 hover:text-white
                  m-[20px]
                 dark:hover:bg-white
                 dark:hover:text-black "
            >
              <div className="bg-linear-60 dark:bg-indigo-900 bg-indigo-400 w-[150px] h-[150px] md:w-[80px] md:h-[80px] rounded-full"></div>
              <div className="font-bold text-6xl md:text-lg mt-2">
                Easy Drive Maintenance
              </div>

              <div className=" md:text-sm text-6xl text-center">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
            <div
              className="
                flex flex-col 
                items-center
                dark:text-white 
                 justify-center 
                 w-full md:w-[300px]
                 md:h-[300px] h-[600px]
                 rounded-4xl border-4 
                 md:rounded-3xl border-2
                 border-black
                 dark:border-white
                 hover:bg-black
                 hover:text-white
                  m-[20px]
                 dark:hover:bg-white
                 dark:hover:text-black "
            >
              <div className="bg-linear-60 dark:bg-indigo-900 bg-indigo-400 w-[150px] h-[150px] md:w-[80px] md:h-[80px] rounded-full"></div>
              <div className="font-bold text-6xl md:text-lg mt-2">
                Elite Auto Services
              </div>

              <div className=" md:text-sm text-6xl text-center">
                Car service is essential for maintaining the performance and
                longevity of your vehicle. From oil changes Car service
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*3rd page */}
      <div className="flex flex-col md:flex-row h-[1000px] w full md:h-[500px] md:w-[1000px] mt-[100px] items-center ">
        <div className=" md:w-[600px] md:h-[400px] w-[1000px] h-[2000px]">
          <span className="dark:text-red-500 text-red-600 font-bold md:text-sm text-4xl md:font-medium mt-[30px] md:mt-[20px]">
            ABOUT US
          </span>
          <div className="text-7xl md:text-4xl dark:text-white text-black font-medium pt-[30px]">
            Fast and Reliable Car Care
            <br />
            Your Car Our Priority
          </div>
          <div className=" text-4xl md:text-sm md:text-m dark:text-white text-black pt-[30px]">
            Car service is essential for maintaining the performance and
            longevity of your vehicle. From oil changes
            <br />
          </div>
          <div className=" dark:text-white text-4xl md:text-lg font-semibold pt-[30px] ">
            ~Fast and Reliable Car Care Your Car Our Priority
            <br />
            ~Free with Our Services Care for Your Car
            <br />
            ~Top-notch Care for Your Vehicle Your Vehicle
            <br />
            ~Expert Service for Your Vehicle Drive Stress
          </div>
        </div>
        <div>
          <img
            className="md:mt-[100px] rounded-4xl mt-[100px] ml-[100px] w-7xl md:w-[500px]"
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
          />
        </div>
      </div>
      <div className="flex  flex-col dark:border-2 dark:border-white bg-black md:h-[100px] h-[300px]  w-7xl md:w-[600px] justify-center rounded-4xl md:mx-[400px] mt-[800px] md:mt-[10px]">
        <div className="flex flex-col md:flex-row text-white items-center ">
          <div className="ml-[50px] text-8xl md:text-lg">Coinbase</div>
          <div className="hidden md:block ml-[50px] ">Dropbox</div>
          <div className="hidden md:block ml-[50px]">slack</div>
          <div className="hidden md:blockml-[50px]">Spotify</div>
          <div className="hidden md:block ml-[50px]">Gizmodo</div>
        </div>
      </div>
      {/*4th page */}
      <div className="flex flex-col h-[500px] w-full mt-[100px]  md:ml-[100px] items-center">
        <div className=" md:w-[1000px] h-[400px] flex flex-col ">
          <span className="dark:text-red-500 text-red-600 font-bold md:text-sm text-4xl md:font-medium mt-[30px] md:mt-[20px]">
            LATEST QUALITY
          </span>
          <div className="flex flex-col md:flex-row">
            <div className=" dark:text-white w-[1000px] md:w-[900px] md:h-[100px] font-bold text-7xl md:text-4xl ">
              Quality Service, Every Time
              <br />
              Drive Safe Stay Secure
            </div>
            <div className="dark:text-white md:w-[700px] ml-[50px]  text-4xl md:text-2xl">
              Car service is essential for maintaining the performance and
              <br /> longevity of your vehicle. From oil changes
            </div>
          </div>
          <div className="flex flex-col md:flex-row  justify-center">
            <div>
              <img
                className="h-lvh w-full md:h-[300px] md:w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-1.jpg"
              />{" "}
            </div>
            <div>
              <img
                className="h-lvh w-full md:h-[300px] md:w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-2.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <div>
              <img
                className="h-lvh w-full md:h-[300px] md:w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg"
              />{" "}
            </div>
            <div>
              <img
                className="h-lvh w-full md:h-[300px] md:w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center">
            <div>
              <img
                className="h-lvh w-full md:h-[300px] md:w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-5.jpg"
              />{" "}
            </div>
            <div>
              <img
                className="h-lvh w-full md:h-[300px] md:w-[300px] rounded-4xl my-[30px]"
                src="https://themehealer.com/php-template/crank-php/assets/images/gallery/gallery-1-3.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      {/*5th page */}
      <div className="flex flex-col w-full mt-[5050px] md:mt-[800px] h-auto  rounded-4xl items-center">
        <span className=" dark:text-red-500 text-red-600 font-bold md:text-sm text-4xl md:font-medium mt-[30px] md:mt-[20px]">
          ASK QUESTION
        </span>
        <div>
          <span className=" dark:text-white w-[900px] h-[100px] font-bold text-7xl md:text-4xl ">
            {" "}
            Got Questions? We've
          </span>
        </div>
        <div>
          <span className=" dark:text-white w-[900px] h-[100px]  text-6xl font-bold md:text-4xl  ">
            Got Answers
          </span>
        </div>
        <div className="  dark:border-2 dark:white dark:text-white flex flex-col h-lvh w-full md:h-[100px] md:w-[700px] dark:bg-black bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-5xl md:text-2xl font-semibold mt-[10px]">
          What types of businesses do you support?
        </div>
        <div className=" dark:border-2 dark:white dark:text-white dark:bg-black flex flex-col h-lvh w-full md:h-[100px] md:w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-5xl md:text-2xl font-semibold mt-[20px]">
          What are the signs of brake wear?
        </div>
        <div className=" dark:border-2 dark:white dark:text-white dark:bg-black flex flex-col h-lvh w-full md:h-[100px] md:w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-5xl md:text-2xl font-semibold mt-[20px]">
          Are scheduled service intervals important for my car?
        </div>
        <div className=" dark:border-2 dark:white dark:text-white dark:bg-black flex flex-col h-lvh w-full md:h-[100px] md:w-[700px] bg-white shadow-2xl shadow-black rounded-3xl items-center justify-center text-5xl md:text-2xl font-semibold mt-[20px]">
          Can regular maintenance prevent major repairs?
        </div>
      </div>
      {/*6th page */}
      <div className=" dark:border-1 dark:border-white flex flex-col h-[1500px] md:h-[500px] w-[1300px] bg-black  md:mt-[200px] mt-[900px] rounded-4xl py-2 ">
        <div className="flex flex-col h-[100px] w-[200px] m-[40px]">
          <span className=" dark:text-red-500  text-red-600 font-bold md:text-sm text-4xl md:font-medium mt-[30px] md:mt-[20px]">
            TESTIMONIAL
          </span>

          <div className=" w-[900px] h-[100px] font-bold text-4xl text-white mt-[20px] ">
            Clients Testimonial
          </div>
          <div className="flex flex-col h-[500px] w-[1200px] md:flex-row md:h-[200px] md:w-[1400px] mt-[50px] ">
            <div className="flex flex-row h-[400px] w-[1200px] md:h-[200px] md:w-[400px] border-2 border-white rounded-3xl text-white ">
              <img
                className="md:h-[130px] w-[300px] md:w-[80px] rounded-3xl "
                src="https://themehealer.com/php-template/crank-php/assets/images/testimonial/testimonial-1-1.jpg"
              />
              <div className="flex flex-col mt-[10px] ml-[40px]">
                <div className=" md:text-2xl text-6xl font-bold">
                  Arlene Smith
                </div>
                <div className="md:text-sm mt-[10px]  text-4xl">
                  Nursing Assistant
                </div>
                <div className="mt-[10px]  md:text-sm text-4xl ">
                  Car service the maintaining and the <br /> performance
                  longevity of vehicle a <br />
                  From oil is a and tire rotations
                </div>
              </div>
            </div>
            <div className="flex flex-row h-[400px] w-[1200px] md:h-[200px] md:w-[400px] border-2 border-white rounded-3xl text-white ">
              <img
                className="md:h-[130px] w-[300px] md:w-[80px] rounded-3xl "
                src="https://themehealer.com/php-template/crank-php/assets/images/testimonial/testimonial-1-1.jpg"
              />
              <div className="flex flex-col mt-[10px] ml-[40px]">
                <div className=" md:text-2xl text-6xl font-bold">
                  Arlene Smith
                </div>
                <div className="md:text-sm mt-[10px]  text-4xl">
                  Nursing Assistant
                </div>
                <div className="mt-[10px]  md:text-sm text-4xl ">
                  Car service the maintaining and the <br /> performance
                  longevity of vehicle a <br />
                  From oil is a and tire rotations
                </div>
              </div>
            </div>
            <div className="flex flex-row h-[400px] w-[1200px] md:h-[200px] md:w-[400px] border-2 border-white rounded-3xl text-white ">
              <img
                className="md:h-[130px] w-[300px] md:w-[80px] rounded-3xl "
                src="https://themehealer.com/php-template/crank-php/assets/images/testimonial/testimonial-1-1.jpg"
              />
              <div className="flex flex-col mt-[10px] ml-[40px]">
                <div className=" md:text-2xl text-6xl font-bold">
                  Arlene Smith
                </div>
                <div className="md:text-sm mt-[10px]  text-4xl">
                  Nursing Assistant
                </div>
                <div className="mt-[10px]  md:text-sm text-4xl ">
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
      <div className="flex flex-col h-[500px] w-full dark:text-white text-black mt-[300px] md:mt-[100px] items-center">
        <span className="dark:text-red-500 text-red-600 font-bold md:text-sm text-4xl md:font-medium mt-[30px] md:mt-[20px]">
          OUR TEAM
        </span>
        <div className="mt-[20px] text-6xl md:text-3xl">
          They are Our Best Team Member Ever
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className=" dark:border-white dark:border-1 flex flex-col h-[1000px] md:h-auto w-7xl md:w-[300px] dark:bg-black bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] ml-[50px]">
            {/* Image section1 */}
            <div className="flex justify-center dark:bg-black bg-white p-4 hover:bg-gray-300 transition-all duration-300">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-1.jpg"
                className="h-[700px] w-7xl rounded-xl object-cover md:h-[250px] md:w-[300px]"
                alt="Team Member"
              />
            </div>

            {/* Text section1 */}
            <div className="flex flex-col items-center justify-center py-4 ml-[50px] md:ml-0">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center rounded-full border-4 border-black h-[100px] w-[100px] md:h-[50px] md:w-[50px] mb-2  dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
                  D
                </div>
                <div className="flex flex-col ml-[50px]">
                  <span className="font-semibold dark:text-white text-black text-7xl md:text-lg">
                    Darlene Robertson
                  </span>
                  <span className="text-black dark:text-white text-5xl md:text-sm">
                    Nursing Assistant
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className=" dark:border-white dark:border-1 flex flex-col h-[1000px] md:h-auto w-7xl md:w-[300px] dark:bg-black bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] ml-[50px]">
            {/* Image section2 */}
            <div className=" flex justify-center  dark:bg-black bg-white p-4  hover:bg-gray-300 transition-all duration-300">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-2.jpg"
                className="h-[700px] w-7xl rounded-xl object-cover md:h-[250px] md:w-[300px]"
                alt="Team Member"
              />
            </div>

            {/* Text section2 */}
            <div className="flex flex-col items-center justify-center py-4 ml-[50px] md:ml-0">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center rounded-full border-4 border-black h-[100px] w-[100px] md:h-[50px] md:w-[50px] mb-2  dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
                  D
                </div>
                <div className="flex flex-col ml-[50px]">
                  <span className="font-semibold dark:text-white text-black text-7xl md:text-lg">
                    Darlene Robertson
                  </span>
                  <span className="text-black  dark:text-white text-5xl md:text-sm">
                    Nursing Assistant
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="  dark:border-white dark:border-1 flex flex-col h-[1000px] md:h-auto w-7xl md:w-[300px] dark:bg-black bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] ml-[50px]">
            {/* Image section3 */}
            <div className="flex justify-center dark:bg-black bg-white p-4  hover:bg-gray-300 transition-all duration-300">
              <img
                src="https://themehealer.com/php-template/crank-php/assets/images/team/team-1-3.jpg"
                className="h-[700px] w-7xl rounded-xl object-cover md:h-[250px] md:w-[300px]"
                alt="Team Member"
              />
            </div>

            {/* Text section3 */}
            <div className="flex flex-col items-center justify-center py-4 ml-[50px] md:ml-0">
              <div className="flex flex-row items-center">
                <div className="flex items-center justify-center rounded-full border-4 border-black h-[100px] w-[100px] md:h-[50px] md:w-[50px] mb-2  dark:border-white dark:hover:bg-white dark:hover:text-black hover:bg-black hover:text-white">
                  D
                </div>
                <div className="flex flex-col ml-[50px]">
                  <span className="font-semibold dark:text-white text-black text-7xl md:text-lg">
                    Darlene Robertson
                  </span>
                  <span className="text-black dark:text-white text-5xl md:text-sm">
                    Nursing Assistant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*8th page */}
      <div className="flex flex-col h-[800px] w-full dark:text-white text-black items-center mt-[3000px] md:mt-[100px]">
        <span className="dark:text-red-500 text-red-600 font-bold md:text-sm text-4xl md:font-medium mt-[30px] md:mt-[20px]">
          PRICING PLAN
        </span>
        <div className="mt-[10px] text-6xl md:text-3xl font-semibold">
          Our Pricing plan
        </div>
        <div className="flex flex-row md:h-[50px] md:w-[155px] h-[200px] w-[200px] border-2 border-amber-700 rounded-4xl mt-[40px] justify-center">
          <div className="  hover:bg-red-800 hover:text-white  m-[5px]">
            MONTHLY|
          </div>
          <div className=" hover:bg-red-800 hover:text-white m-[5px]">
            YEARLY
          </div>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="dark:border-1 dark:border-white flex flex-col md:h-[600px] md:w-[400px] h-[800px] w-7xl  dark:bg-black bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] items-md:items-center">
            {/* block 1*/}
            <div className="flex flex-col h-[200px] w-[400px]">
              <div className=" ml-[40px] w-[400px] dark:text-white text-black font-semibold text-8xl md:text-4xl mt-[30px]">
                Free
              </div>
              <div className="  ml-[40px] dark:text-white w-[1500px] md:w-[400px] text-black text-5xl md:text-sm mt-[30px]">
                Car service is essential for maintaining performance
                <br /> and longevity of vehicle. From oil changes
              </div>
              <div className="dark:text-white flex flex-row h-[200px] w-[1500px] md:w-[400px] text-black text-5xl md:text-2xl mt-[50px] md:mt-[30px]">
                <div>
                  <span className=" dark:text-white ml-[40px] font-bold text-5xl md:text-4xl">
                    $0
                  </span>
                  /month
                </div>
                <div className="dark:border-white dark:border-2 dark:bg-black rounded-full h-[100px] w-[100px] md:h-[50px] ml-[700px] md:ml-[150px] md:w-[50px] bg-gray-200 border-2 border-black"></div>
              </div>
            </div>
            <div className=" dark:text-white flex flex-col h-[400px] w-[800px] md:w-[400px] text-4xl md:text-2xl font-medium text-black mt-[200px] md:mt-[50px]">
              <div className=" ml-[40px]">Mistakes To Avoid</div>
              <div className="mt-[20px]  ml-[40px]">
                Winning for Your Startup
              </div>
              <div className="mt-[20px]  ml-[40px]">Mistakes To Avoid</div>
              <div className="mt-[20px]  ml-[40px]">
                Your Event, Your Memories
              </div>
              <div className="  dark:text-white dark:border-2 dark:border-white dark:bg-black mt-[30px] ml-[40px] rounded-3xl md:h-[50px] h-[70px] w-[500px] md:w-[310px] bg-gray-300 hover:bg-red-800 hover:text-white text-black text-center ">
                GET SARTED NOW
              </div>
            </div>
          </div>
          <div className=" ml-[30px] dark:border-1 dark:border-white flex flex-col md:h-[600px] md:w-[400px] h-[800px] w-7xl  dark:bg-black bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] items-md:items-center">
            {/* block 2*/}
            <div className="flex flex-col h-[200px] w-[400px]">
              <div className=" ml-[40px] w-[400px] dark:text-white text-black font-semibold text-8xl md:text-4xl mt-[30px]">
                Free
              </div>
              <div className="  ml-[40px] dark:text-white w-[1500px] md:w-[400px] text-black text-5xl md:text-sm mt-[30px]">
                Car service is essential for maintaining performance
                <br /> and longevity of vehicle. From oil changes
              </div>
              <div className="dark:text-white flex flex-row h-[200px] w-[1500px] md:w-[400px] text-black text-5xl md:text-2xl mt-[50px] md:mt-[30px]">
                <div>
                  <span className=" dark:text-white ml-[40px] font-bold text-5xl md:text-4xl">
                    $0
                  </span>
                  /month
                </div>
                <div className="dark:border-white dark:border-2 dark:bg-black rounded-full h-[100px] w-[100px] md:h-[50px] ml-[700px] md:ml-[150px] md:w-[50px] bg-gray-200 border-2 border-black"></div>
              </div>
            </div>
            <div className=" dark:text-white flex flex-col h-[400px] w-[800px] md:w-[400px] text-4xl md:text-2xl font-medium text-black mt-[200px] md:mt-[50px]">
              <div className=" ml-[40px]">Mistakes To Avoid</div>
              <div className="mt-[20px]  ml-[40px]">
                Winning for Your Startup
              </div>
              <div className="mt-[20px]  ml-[40px]">Mistakes To Avoid</div>
              <div className="mt-[20px]  ml-[40px]">
                Your Event, Your Memories
              </div>
              <div className="  dark:text-white dark:border-2 dark:border-white dark:bg-black mt-[30px] ml-[40px] rounded-3xl md:h-[50px] h-[70px] w-[500px] md:w-[310px] bg-gray-300 hover:bg-red-800 hover:text-white text-black text-center ">
                GET SARTED NOW
              </div>
            </div>
          </div>
          <div className=" ml-[30px] dark:border-1 dark:border-white flex flex-col md:h-[600px] md:w-[400px] h-[800px] w-7xl  dark:bg-black bg-white rounded-2xl shadow-xl overflow-hidden mt-[50px] items-md:items-center">
            {/* block 3*/}
            <div className="flex flex-col h-[200px] w-[400px]">
              <div className=" ml-[40px] w-[400px] dark:text-white text-black font-semibold text-8xl md:text-4xl mt-[30px]">
                Free
              </div>
              <div className="  ml-[40px] dark:text-white w-[1500px] md:w-[400px] text-black text-5xl md:text-sm mt-[30px]">
                Car service is essential for maintaining performance
                <br /> and longevity of vehicle. From oil changes
              </div>
              <div className="dark:text-white flex flex-row h-[200px] w-[1500px] md:w-[400px] text-black text-5xl md:text-2xl mt-[50px] md:mt-[30px]">
                <div>
                  <span className=" dark:text-white ml-[40px] font-bold text-5xl md:text-4xl">
                    $0
                  </span>
                  /month
                </div>
                <div className="dark:border-white dark:border-2 dark:bg-black rounded-full h-[100px] w-[100px] md:h-[50px] ml-[700px] md:ml-[150px] md:w-[50px] bg-gray-200 border-2 border-black"></div>
              </div>
            </div>
            <div className=" dark:text-white flex flex-col h-[400px] w-[800px] md:w-[400px] text-4xl md:text-2xl font-medium text-black mt-[200px] md:mt-[50px]">
              <div className=" ml-[40px]">Mistakes To Avoid</div>
              <div className="mt-[20px]  ml-[40px]">
                Winning for Your Startup
              </div>
              <div className="mt-[20px]  ml-[40px]">Mistakes To Avoid</div>
              <div className="mt-[20px]  ml-[40px]">
                Your Event, Your Memories
              </div>
              <div className="  dark:text-white dark:border-2 dark:border-white dark:bg-black mt-[30px] ml-[40px] rounded-3xl md:h-[50px] h-[70px] w-[500px] md:w-[310px] bg-gray-300 hover:bg-red-800 hover:text-white text-black text-center ">
                GET SARTED NOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
