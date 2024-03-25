import React from "react";
import { Helmet } from "react-helmet";
import { Button, Heading, Img, Text } from "../../components";

export default function ReversedHomepagePage() {
  return (
    <>
      <Helmet>
        <title>SAMCO ASSOCIATES</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="w-full bg-white-A700">
        <header className="p-[25px] sm:p-5 bg-blue_gray-900">
          <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-[1290px]">
            <div className="flex md:flex-col self-end justify-between items-start w-[100%] md:w-full gap-5 md:p-5 whitespace-nowrap">
              <Heading size="lg" as="h1" className="!text-white-A700 ml-[-2%]">
              SAMCO <span className="font-thin">ASSOCIATES</span>
              </Heading>
              <ul className="flex justify-center mt-2.5 gap-[31px] md:flex-wrap text-2xl">
                <li>
                  <a href="#">
                    <span as="h6" className="uppercase text-white-A700 text-xl	">
                      HOME
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                  <span as="h6" className="uppercase text-white-A700 text-xl">
                      ASSET MANAGEMENT
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span as="h6" className="uppercase text-white-A700 text-xl	">
                      CONVEYANCING
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span as="h6" className="uppercase text-white-A700 text-xl	">
                      CONSULTANCY
                    </span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span as="h6" className="uppercase text-white-A700 text-xl">
                      ABOUT
                    </span>
                  </a>
                </li>
                <Button shape="round" className="sm:px-6 mt-[-1%] border-4 border-cyan-300 bg-blue_gray-900 md:ml-[2%] text-sky-300 h-12 w-40 text-xl">
                      Contact Now
                    </Button>
              </ul>
            </div>
          </div>
        </header>
        <div>
          <div>
            <div className="h-[701px] relative">
              <div className="justify-center h-[700px] w-full left-0 bottom-0 right-0 top-0 m-auto bg-light_blue-100 absolute" />
              <div className="w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                <div className="h-[701px] relative">
                  <Img
                    src="images/Rectangle.png"
                    alt="HousePicture"
                    className="justify-center h-[701px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                  />
                  <div className="flex flex-col items-start w-[50%] h-[80%] ml-[5%] gap-5 bottom-0 top-0 my-auto absolute text-white pl-8 pr-5 pt-4 pb-8 bg-gray-700 bg-opacity-60 sm:w-[70%] rounded-[15px]">
                    <span className="tracking-[-0.72px] font-black text-5xl sm:text-2xl text-white-A700">
                      Unlock Your Inherited Wealth in Bangladesh!
                    </span>
                    <span className="tracking-[-0.32px] !leading-10 text-white-A700 font-thin text-4xl sm:text-2xl text-ellipsis overflow-hidden">
                      Your go-to for consolidating, managing, and safeguarding inherited assets in Bangladesh with
                      expertlegal assistance and property solutions
                    </span>
                    <Button shape="round" className="sm:px-6 font-black text-white-A700 m-[10px] sm:font-normal sm:text-lg sm:m-0 sm:py-0 sm:w-[90%] whitespace-nowrap  text-3xl h-10 w-[226px] py-8">
                      Contact Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between justify-items-center uppercase items-center!important w-full mt-[99px] md:p-5 max-w-7xl">
              <span size="xl" as="h3" className="w-[30%] md:ml-0 md:w-full tracking-[-0.48px] uppercase text-4xl mt-[7%] mx-[7%] md:mb-3 md:mt-0 font-bold ">
                Specialist in Bangladesh Asset Management & Conveyancing
              </span>
              <div className="flex md:flex-col justify-between items-start w-[60%] md:w-full mt-1 md:ml-0 gap-5">
                <div className="flex flex-col w-full md:ml-0 md:w-full gap-[15px]">
                  <div className="flex items-start md:w-full gap-3">
                    <div className="h-[18px] w-[18px] mt-0.5 bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="tracking-[-0.24px] mt-[-2px] font-bold text-xl">
                      Need Power of Attorney
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h5" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                      Need Bangla to English Translation of Bangladeshi Deed Papers
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h6" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                      Need to verify, consolidate your Bangladesh asset and property papers
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                      Need to obtain duplicate copies of your land/property deed papers
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                    RS - BANGLADESH LAND SURVEY (OBTAINING ZORIF & CORRECTION)
                    </span>
                  </div>
                </div>
                <div className="flex flex-col mr-[-10%] w-full md:w-full gap-[28px] md:ml-0">
                <div className="flex sm:flex-col items-start gap-3 md:ml-0">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                      Need to remove unlawful squatters
                     </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3 md:ml-0">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                    NEED HELP SELLING OR BUYING
LAND & PROPERTY IN BANGLADESH
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3 md:ml-0">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                      Need Bangladesh Asset Management Solution
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3 md:ml-0">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] sm:w-full tracking-[-0.24px] font-bold text-xl">
                    NEED RECORD CORRECTION (NAMZARI)
                    </span>
                  </div>
                  <div className="flex sm:flex-col items-start gap-3 md:ml-0">
                    <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                    <span as="h4" className="w-[95%] md:w-full sm:w-full tracking-[-0.24px] font-bold text-xl">
                    NEED HELP WITH OBTAINING BIRTH CERTIFICATE DUPLICATES
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span size="md" as="h6" className="tracking-[-0.32px] !leading-10 uppercase mt-[30px] text-2xl text-center flex flex-col mt-6">
            WE CAN HELP YOU RESOLVE MAJORITY OF YOUR LAND AND PROPERTY ISSUES REMOTELY, EVEN SALE OF YOUR ASSET!
              </span>
            <div className="flex justify-center items-end w-full mt-[30px] gap-3 mx-auto md:p-5 max-w-[1281px]">
              <div className="h-px mb-[7px] bg-black-900 flex-1" />
              <div className="h-[16px] w-[16px] bg-blue_gray-900 rounded-[50%]" />
              <div className="h-px mb-[7px] bg-black-900 flex-1" />
            </div>
            <div className="flex flex-col items-center w-full mt-[83px] gap-[33px] mx-auto md:line-clamp-2 md:p-5">
              <div className="self-stretch">
                <div className="h-[68px] gap-4 lg: relative flex">
                <Heading
                      size="2xl"
                      as="h2"
                      className="w-max m-auto text-center tracking-[-0.56px] lg:none xl:none overflow-hidden whitespace-pre-line overflow-ellipsis "
                    >
                      Chat on <Img
                    src="images/img_frame.svg"
                    alt="image"
                    className="h-[52px] w-[52px] left-[19%] top-[3%] m-auto sm:static ... inline-block ... sm:mb-auto"
                  /> WhatsApp with +44(0)7701065916
                    </Heading>
                </div>
              </div>
              <Button shape="round" className="sm:px-5 gap-y-5 font-bold m-[10px] min-w-[226px] sm:mt-[45%]">
                CONTINUE TO CHAT
              </Button>
            </div>
            <div className="flex md:flex-col justify-between items-start w-full mt-[100px] gap-5 mx-auto md:p-5 max-w-7xl">
              <div className="flex flex-col w-[44%] md:w-full mt-[74px] gap-1.5">
                <Heading size="2xl" as="h1" className="tracking-[-0.56px]">
                  Our Experience
                </Heading>
                <Text as="p" className="!text-blue_gray-900 text-justify">
                Throughout our tenure, we have diligently assisted expatriates, particularly British Bangladeshis, in consolidating their assets. Our services extend to facilitating the equitable division of inherited land <span className="font-bold italic">(Baturanama)</span> and property among family members, obtaining essential property documentation from official registries, and facilitating the removal of unauthorised occupants. Moreover, we adeptly manage asset sales and provide comprehensive legal consultancy to resolve any disputes concerning inherited assets. As a company founded by British Bangladeshis, we possess a profound under standing of the challenges faced by expatriates and provide tailored solutions to address their needs with utmost professionalism.
                </Text>
              </div>
              <Img
                src="images/Fild_img.jpg"
                alt="image_one"
                className="w-[50%] md:w-full md:h-auto object-cover rounded-[20px]"
              />
            </div>
            <div className="w-full mt-[120px] mx-auto md:p-5 max-w-7xl">
              <div className="flex md:flex-col justify-between items-center gap-5">
                <Img
                  src="images/Rectangle(1).png"
                  alt="Service"
                  className="w-[50%] md:w-full md:h-auto object-cover rounded-[20px]"
                />
                <div className="flex flex-col items-start w-[44%] md:w-full">
                  <Heading size="2xl" as="h1" className="tracking-[-0.56px]">
                    Our Service
                  </Heading>
                  <Text as="p" className="mt-[11px] !text-blue_gray-900 text-justify">
                    <>
                      SAMCO ASSOCIATES LLP comprises legal professionals, real estate experts, and influential figures
                      dedicated to serving the British Bangladeshi community. Our goal is to empower you by providing
                      comprehensive support to reclaim control over your inheritance. With offices in Sylhet, Dhaka, and
                      the UK, we offer tailored assistance, prioritising transparency and reliability.
                      <br />
                      <br />
                      As Non-Resident Bangladeshis (NRBs), we have lived in experience and understand the complexities
                      of resolving inheritance assets in Bangladesh. Leveraging our firsthand experiences, we guide you
                      through each step, ensuring a smooth and effective resolution process tailored to your needs.
                    </>
                  </Text>
                  <Button shape="round" className="mt-10 sm:px-5 font-bold min-w-[173px]">
                    Contact Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-[169px] px-14 py-20 md:p-5 bg-cyan-300">
              <div className="flex md:flex-col justify-between items-center w-full gap-5 mx-auto max-w-7xl">
                <Img
                  src="images/Rectangle (2).png"
                  alt="Woman_img"
                  className="w-[31%] md:w-full md:h-auto object-cover rounded-[20px]"
                />
                <div className="flex flex-col w-[64%] md:w-full gap-[31px] md:p-5">
                  <Heading as="h4" className="tracking-[-0.24px] !font-kalam text-justify !leading-10">
                    “Both my parents passed away, all my siblings live in Manchester, never been to Bangladesh. Ourmama
                    was entrusted to look after our basha and land in Sylhet. When we wanted to sell the land
                    andproperty, he kept on making excuses. On every visit to Bangladesh, he will be accommodating
                    forfirst few days and after that he will make one or the other excuses. Finally, we got in touch
                    withSAMCO ASSOCIATES who with some difficulties managed to help us consolidate all the papers
                    andhelp us sell the land and property.”
                  </Heading>
                  <Heading size="md" as="h2" className="tracking-[-0.32px]">
                    Halima Begum
                  </Heading>
                </div>
              </div>
            </div>
            <div className="w-full mt-[120px] mx-auto md:p-5 max-w-[1200px]">
              <div className="flex sm:flex-col justify-between items-center gap-5 p-[29px] sm:p-5 bg-blue_gray-900">
                <div className="flex self-end justify-center items-center ml-[50px] gap-6 md:ml-0">
                  <Heading size="xl" as="h1" className="self-end mb-2 !text-white-A700 tracking-[-0.48px]">
                    Only
                  </Heading>
                  <Heading size="5xl" as="h1" className="!text-white-A700 tracking-[-1.02px]">
                    £75
                  </Heading>
                </div>
                <Button shape="round" className="mr-7 md:mr-0 sm:px-5 font-bold min-w-[157px] text-white-A700">
                  Apply Now
                </Button>
              </div>
              <div className="flex justify-end p-10 sm:p-5 border-blue_gray-900 border border-solid">
                <div className="flex md:flex-col justify-between items-start w-[96%] md:w-full mr-[18px] gap-5 md:mr-0">
                  <div className="flex justify-center w-[44%] md:w-full">
                    <Heading size="3xl" as="h1" className="tracking-[-0.64px] uppercase">
                      to obtain a full report and solution
                    </Heading>
                  </div>
                  <div className="flex justify-center w-[50%] md:w-full mt-1">
                    <div className="flex flex-col w-full gap-[25px]">
                      <div className="flex items-startw-full gap-3">
                        <div className="h-[18px] w-[18px] mt-2 bg-blue_gray-900 rounded-[50%]" />
                        <Heading as="h4" className="tracking-[-0.24px]">
                          We will look at all your paperwork
                        </Heading>
                      </div>
                      <div className="flex sm:flex-col items-start gap-3">
                        <div className="h-[18px] md:w-[18px] w-[21px] mt-2 bg-blue_gray-900 rounded-[50%]" />
                        <Heading as="h4" className="tracking-[-0.24px]">
                          Our experts will call you and take note of your full issues
                        </Heading>
                      </div>
                      <div className="flex items-start w-full gap-3">
                        <div className="h-[18px] w-[18px] mt-2 bg-blue_gray-900 rounded-[50%]" />
                        <Heading as="h4" className="tracking-[-0.24px]">
                          We will conduct our own due diligence
                        </Heading>
                      </div>
                      <div className="flex sm:flex-col items-start gap-3">
                        <div className="h-[18px] w-[18px] mt-[7px] bg-blue_gray-900 rounded-[50%]" />
                        <Heading as="h4" className="w-[96%] sm:w-full tracking-[-0.24px]">
                          Write you a full report and a proposal on how to resolve your issues
                        </Heading>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center w-full mt-[120px] gap-5 mx-auto md:p-5 max-w-[1200px]">
              <Heading size="xl" as="h1" className="w-[56%] md:w-full tracking-[-0.48px] !leading-[64px]">
                <span className="text-blue_gray-900  bg-gray-700 bg-opacity-20 pl-2">&quot;</span>
                <span className="text-blue_gray-900 uppercase  bg-gray-700 bg-opacity-20 pr-2">Did you know? <br /></span>
                <span className="text-blue_gray-900 text-4xl  bg-gray-700 bg-opacity-20 px-2">You could be walking around as a <br/></span>
                <span className="text-blue_gray-900 uppercase  bg-gray-700 bg-opacity-20 px-2">secret millionaire, <br/> </span>
                <span className="text-blue_gray-900 text-4xl  bg-gray-700 bg-opacity-20 px-2">
                  <>
                     and not even know it!" 
                    
                  </>
                  <br />
                </span>
                <br />
                <span className="text-4xl ">TAKE ACTION BEFORE ITS TOO LATE</span>
              </Heading>
              <Img
                src="images/tensed_man.png"
                alt="image_four"
                className="w-[38%] md:w-full md:h-auto object-cover rounded-[20px]"
              />
            </div>
            <div className="mt-[187px]">
              <div className="flex flex-col gap-14 sm:gap-7">
                <div className="h-[1145px] relative">
                  <div className="w-full top-0 right-0 left-0 m-auto bg-blue_gray-900 absolute">
                    <div className="h-[1027px] relative">
                      <Img
                        src="images/img_pexels_karolina_1027x1440.png"
                        alt="pexelskarolina"
                        className="justify-center h-[1027px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto opacity-0.1 object-cover absolute"
                      />
                      <div className="flex flex-col w-[89%] gap-[42px] top-[8%] right-0 left-0 m-auto absolute sm:overflow-y-hidden">
                        <Heading size="xl" as="h1" className="!text-white-A700 tracking-[-0.48px]">
                          HOW!!!
                        </Heading>
                        <div className="flex md:flex-col items-start gap-10">
                          <div className="flex flex-col w-full gap-[18px] md:p-5">
                            <Heading size="s" as="h3" className="!text-white-A700 tracking-[-0.28px]">
                              Struggling with dividing inherited assets?
                            </Heading>
                            <Text as="p">
                              For British Bangladeshis, navigating property transactionsamong family members can be
                              daunting, especially without a Bangladeshi passport or NID Card.With family scattered
                              across the UK, gathering for decisions is challenging, often leaving assets inBangladesh
                              neglected. We offer cost-effective solutions to manage these complexities efficiently.
                            </Text>
                          </div>
                          <div className="flex flex-col w-full gap-[18px] md:p-5">
                            <Heading size="s" as="h3" className="!text-white-A700 tracking-[-0.28px]">
                              Facing disputes over land and property?
                            </Heading>
                            <Text as="p">
                              Our seasoned experts boast years of experience, networks,and contacts, enabling us to
                              resolve legitimate disputes and help you reclaim what&#39;s rightfully yours.
                            </Text>
                          </div>
                          <div className="flex flex-col w-full gap-[18px] md:p-5">
                            <Heading size="s" as="h3" className="!text-white-A700 tracking-[-0.28px]">
                              Need help managing and selling your assets?
                            </Heading>
                            <Text as="p" className="sm:hidden">
                              We provide professional and diligent estatemanagement services tailored to your needs.
                              Whether you require assistance with paperwork orselling your assets, we ensure a seamless
                              process, allowing you to move forward confidently.
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <Img
                    src="images/Rectangle (6).png"
                    alt="image_five"
                    className="h-[603px] sm:h-[13%] md:h-[33%] w-[89%] bottom-0 right-0 left-0 m-auto object-cover absolute rounded-[20px]"
                  />
                </div>
                <div className="flex md:flex-col justify-center items-center w-full gap-[26px] mx-auto md:p-5 max-w-[1040px]">
                  <Heading size="xl" as="h1" className="w-[89%] md:w-full tracking-[-0.48px] !leading-[60px]">
                    <span className="text-blue_gray-900 uppercase">
                      <>
                      DON'T LOSE OUT CALL TODAY <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900 font-normal text-xl">Bangladesh is reforming land and property laws periodically, take action before it's to late!</span>
                  </Heading>
                  <Button shape="round" className="sm:px-5 font-bold min-w-[173px] whitespace-nowrap">
                    Contact Now
                  </Button>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col justify-between items-center w-full mt-[114px] gap-5 mx-auto md:p-5 max-w-7xl">
              <div className="w-[50%] md:w-full">
                <div>
                  <Img
                    src="images/Rectangle (4).png"
                    alt="image_six"
                    className="h-[652px] w-full md:h-auto object-cover rounded-[20px]"
                  />
                </div>
              </div>
              <div className="flex flex-col w-[45%] md:w-full gap-[29px]">
                <div className="flex flex-col gap-[7px]">
                  <Heading size="md" as="h2" className="tracking-[-0.32px] uppercase">
                    Bangladesh Property Law
                  </Heading>
                  <Text as="p" className="!text-blue_gray-900">
                     Bangladesh property laws are in a state of constant evolution, with significant shifts anticipated over the next decade. Presently, changes dictate that a British Bangladeshi lacking a Bangladeshi passport and NID can not engage in property transactions, necessitating both for land and property registration
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <Heading size="md" as="h2" className="tracking-[-0.32px] uppercase">
                    Property Tax & Documentation
                  </Heading>
                  <Text as="p" className="!text-blue_gray-900">
                  Property tax and documentation pose challenges for many expatriates and NRB's who entrust their affairs to relatives in Bangladesh. This oftenresults in neglect of National Survey (Zarif), Land and Property Tax payments.Having no representation during surveys or boundary changes, leading to complications during asset disposal and sometimes resulting in a loss.
                  </Text>
                </div>
                <div className="flex flex-col gap-[7px]">
                  <Heading size="md" as="h2" className="tracking-[-0.32px] uppercase">
                    Disputes, Encroachments and Squatting
                  </Heading>
                  <Text as="p" className="!text-blue_gray-900">
                  Disputes, encroachments, and squatting are prevalent issues akin to those in Britain, with Bangladesh also adhering to ten-year sitting rights.Fallure to address issues such as property vecancy, encroachment, or squatter occupation promptly may result in the loss of the entire asset.
                  </Text>
                </div>
              </div>
            </div>
            <div className="mt-[120px]">
              <div>
                <div className="flex w-full pl-[74px] pr-14 py-[74px] mx-auto md:p-5 border-gray-500 border-2 border-solid max-w-[1200px]">
                  <Heading
                    size="2xl"
                    as="h1"
                    className="w-[90%] mb-[61px] ml-[63px] md:ml-0 tracking-[-0.56px] text-center !leading-[64px]"
                  >
                    <span className="text-blue_gray-900">
                      <>
                        ACT NOW BEFORE ITS TOO LATE!
                        <br />
                        <br />
                      </>
                    </span>
                    <span className="text-blue_gray-900 text-[40px]">
                      Bangladesh Government is reforming the land and property law that will affect NRB and
                      foreign nationals.
                    </span>
                  </Heading>
                </div>
                <div className="mt-[-82px] bg-blue_gray-900">
                  <div>
                    <div className="h-[427px] relative">
                      <Img
                        src="images/img_pexels_karolina_427x1440.png"
                        alt="pexelskarolina"
                        className="justify-center h-[427px] w-full md:h-auto left-0 bottom-0 right-0 top-0 m-auto opacity-0.1 object-cover absolute"
                      />
                      <div className="flex flex-col items-center justify-center w-full h-full gap-10 left-0 bottom-0 right-0 top-0 m-auto absolute">
                        <Heading size="xl" as="h1" className="!text-white-A700 tracking-[-0.48px] text-center">
                          With little as £75 Fee we can look at your enquiry and provide you step by step solution
                        </Heading>
                        <Button shape="round" className="sm:px-5 font-bold min-w-[164px] text-white-A700 !rounded-[29px]">
                          Apply Now !
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
