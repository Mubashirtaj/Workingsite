"use client";
import { useEffect, useState } from "react";
import "./Navbar.css";
// import { TbChartArrows, TbChartArrowsVertical } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";

function Mobilenavbar() {
  const [Product, Setvproduct] = useState("hide");
  // adding the states
  const [Isstate, Setinactive] = useState(false);
  //add the active className

  const [Scrollvalue, Setscrollvalue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      Setscrollvalue(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleActiveClass = () => {
    Setinactive(!Isstate);
  };
  //clean up function to remove the active className

  return (
    <div className="App">
      <header className={`App-header ${Scrollvalue > 670 ? "bg-black" : ""}`}>
        <nav
          className={`relative rounded-full border shadow-white	shadow-md dark:bg-black bg-black  border-white/[1] shadow-input flex justify-center space-x-4 px-8 py-6 `}
        >
          {/* logo */}
          <Link href={"/"} className={`logo`}>
            <h1 className="RobotoMono ">
              <img src="developlogo.png" alt="" />
            </h1>{" "}
          </Link>
          <ul
            className={`navMenu overflow-y-scroll	 ${Isstate ? "active" : ""}`}
          >
            <li
              className={`overflow-hidden ${
                Product === "service" ? "" : "h-8"
              } `}
            >
              <span className="flex 	 flex-row	 ">
                <Link
                  href=""
                  className={`navLink  `}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("service");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  Service
                </Link>
                <span
                  className={`mt-1.5 ml-5 ${
                    Product === "service" ? "rotate-180 mb-1.5" : "block"
                  }`}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("service");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <ul className={`transition-max-height duration-900`}>
                <Link href={"/Mobile-App-Development"}>
                  <li>Mobile App Development</li>
                </Link>
                <Link href={"/Web-Development"}>
                  <li>Web Development</li>
                </Link>
                <Link href={"/Digital-Marketing"}>
                  <li>Digital Marketing</li>
                </Link>
                <Link href={"/Blockchain-Technoly"}>
                  <li>Blockchain Technology</li>
                </Link>

                <Link href={"/ada-compliance"}>
                  <li>ADA Compliance</li>
                </Link>
                <Link href={"/services-online-reputation-management"}>
                  <li>Online Reputation Management</li>
                </Link>
                <Link href={"/Services-Cloud"}>
                  <li>Cloud Infrastructure</li>
                </Link>
                <Link href={"/IT-Security"}>
                  <li>IT Security Services</li>
                </Link>
                <Link href={"/Services-remote-technology-staffing"}>
                  <li>Remote Technology Staffing</li>
                </Link>
              </ul>
            </li>

            <li
              className={`overflow-hidden ${Product === "show" ? "" : "h-8"} `}
            >
              <span className="flex 	 flex-row	 ">
                <Link
                  href={""}
                  className={`navLink  `}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("Product");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  Product
                </Link>
                <span
                  className={`mt-1.5 ml-5 ${
                    Product === "show" ? "rotate-180 mb-1.5" : "block"
                  }`}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("show");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <ul className={`transition-max-height duration-900`}>
                <Link href={"/Board"}>
                  <li>Board Meeting App</li>
                </Link>
                <Link href={"/products-purchase-approval"}>
                  <li>Purchase Approval</li>
                </Link>
              </ul>
            </li>

            <li>
              <Link
                href={"/portfolio"}
                className={`navLink  `}
                onClick={() => {
                  if (Product === "hide") {
                    Setvproduct("potfolio");
                  } else {
                    Setvproduct("hide");
                  }
                }}
              >
                Potfolio
              </Link>
            </li>

            <li
              className={`overflow-hidden ${
                Product === "company" ? "" : "h-8"
              } `}
            >
              <span className="flex 	 flex-row	 ">
                <Link
                  href={""}
                  className={`navLink  `}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("company");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  Company
                </Link>
                <span
                  className={`mt-1.5 ml-5 ${
                    Product === "company" ? "rotate-180 mb-1.5" : "block"
                  }`}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("company");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <ul className={`transition-max-height duration-900`}>
                <span
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("about");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  <Link href={"/aboutUs"}>
                    <li>About Us</li>
                  </Link>
                  <Link href={"/skill-sets"}>
                    <li>Technoligy & Skill Set</li>
                  </Link>
                  <Link href={"//careers"}>
                    <li>Careers</li>
                  </Link>
                  <Link href={"/ContactUs"}>
                    <li>Contact Us</li>
                  </Link>
                  <Link href={"/company-ventures"}>
                    <li>Ventures and Partnerships</li>
                  </Link>
                </span>
              </ul>
            </li>

            <li
              className={`overflow-hidden ${
                Product === "Reviews" ? "" : "h-8"
              } `}
            >
              <span className="flex 	 flex-row	 ">
                <Link href={"testimonials"} className={`navLink  `}>
                  Reviews
                </Link>
                <span
                  className={`mt-1.5 ml-5 ${
                    Product === "Reviews" ? "rotate-180 mb-1.5" : "block"
                  }`}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("Reviews");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <ul className={`transition-max-height duration-900`}>
                <Link href={"/Add-Reviews"}>
                  <li>Add Reviews</li>
                </Link>
                <Link href={"/testimonials"}>
                  <li>See Reviews</li>
                </Link>
              </ul>
            </li>
            <li
              className={`overflow-hidden ${
                Product === "resour" ? "" : "h-8"
              } `}
            >
              <span className="flex 	 flex-row	 ">
                <Link href={"ContactUs"} className={`navLink  `}>
                  Resources
                </Link>
                <span
                  className={`mt-1.5 ml-5 ${
                    Product === "resour" ? "rotate-180 mb-1.5" : "block"
                  }`}
                  onClick={() => {
                    if (Product === "hide") {
                      Setvproduct("resour");
                    } else {
                      Setvproduct("hide");
                    }
                  }}
                >
                  <IoIosArrowDown />
                </span>
              </span>
              <ul className={`transition-max-height duration-900`}>
                <Link href={"/resources-case-study"}>
                  <li>Case Study</li>
                </Link>
                <Link href={"/resources"}>
                  <li>RPA Website Case Study</li>
                </Link>
              </ul>
            </li>
            <li>
              <Link
                href={"/login"}
                className={`navLink  `}
                onClick={() => {
                  if (Product === "hide") {
                    Setvproduct("potfolio");
                  } else {
                    Setvproduct("hide");
                  }
                }}
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href={"/signup"}
                className={`navLink  `}
                onClick={() => {
                  if (Product === "hide") {
                    Setvproduct("potfolio");
                  } else {
                    Setvproduct("hide");
                  }
                }}
              >
                Signup
              </Link>
            </li>
            <li>
              {" "}
              <div className="workbtn">
                <Link href={"/Start-Project-Form"}>
                  <button
                    id="btn"
                    className="relative rounded-full h-12 w-60 overflow-hidden border border-cyan-500	 text-cyan-500	 shadow-2xl transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-cyan-500	 before:duration-300 before:ease-out hover:text-white hover:shadow-cyan-500	 hover:before:h-40 hover:before:w-60 hover:before:opacity-80"
                  >
                    <span className="relative z-10">Start Project</span>
                  </button>
                </Link>
              </div>
            </li>
          </ul>
          <div
            className={`hamburger ${Isstate ? "active" : ""}`}
            onClick={toggleActiveClass}
          >
            <span className={`bar`}></span>
            <span className={`bar`}></span>
            <span className={`bar`}></span>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default Mobilenavbar;
