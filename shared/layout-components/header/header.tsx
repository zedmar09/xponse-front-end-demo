import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Modalsearch from "../modal-search/modalsearch";
import store from "@/shared/redux/store";
import Link from "next/link";
import { basePath } from "@/next.config";

const Header = ({ local_varaiable, ThemeChanger }: any) => {
  let [storedata, SetStoreData] = useState(local_varaiable);

  //full screen
  function Fullscreen() {
    if (
      !document.fullscreenElement &&
      !document.fullscreenElement &&
      !document.fullscreenElement
    ) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  useEffect(() => {
    const handleResize = () => {
      const windowObject = window;
      if (windowObject.innerWidth <= 991) {
        // ThemeChanger({ ...local_varaiable, "dataToggled": "close" })
      } else {
        // ThemeChanger({...local_varaiable,"dataToggled":""})
      }
    };
    handleResize(); // Check on component mount
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    SetStoreData(local_varaiable);
  }, [local_varaiable]);

  function menuClose() {
    const theme = store.getState();
    ThemeChanger({ ...theme, dataToggled: "close" });
  }

  const toggleSidebar = () => {
    const theme = store.getState();
    let sidemenuType = theme.dataNavLayout;
    if (window.innerWidth >= 992) {
      if (sidemenuType === "vertical") {
        let verticalStyle = theme.dataVerticalStyle;
        const navStyle = theme.dataNavStyle;
        switch (verticalStyle) {
          // closed
          case "closed":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "close-menu-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "close-menu-close" });
            }
            break;
          // icon-overlay
          case "overlay":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "icon-overlay-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              if (window.innerWidth >= 992) {
                ThemeChanger({ ...theme, dataToggled: "icon-overlay-close" });
              }
            }
            break;
          // icon-text
          case "icontext":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "icon-text-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "icon-text-close" });
            }
            break;
          // doublemenu
          case "doublemenu":
            ThemeChanger({ ...theme, dataNavStyle: "" });
            if (theme.dataToggled === "double-menu-open") {
              ThemeChanger({ ...theme, dataToggled: "double-menu-close" });
            } else {
              let sidemenu = document.querySelector(".side-menu__item.active");
              if (sidemenu) {
                ThemeChanger({ ...theme, dataToggled: "double-menu-open" });
                if (sidemenu.nextElementSibling) {
                  sidemenu.nextElementSibling.classList.add(
                    "double-menu-active",
                  );
                } else {
                  ThemeChanger({ ...theme, dataToggled: "" });
                }
              }
            }

            // doublemenu(ThemeChanger);
            break;
          // detached
          case "detached":
            if (theme.dataToggled === "detached-close") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "detached-close" });
            }
            break;

          // default
          case "default":
            ThemeChanger({ ...theme, dataToggled: "" });
        }
        switch (navStyle) {
          case "menu-click":
            if (theme.dataToggled === "menu-click-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "menu-click-closed" });
            }
            break;
          // icon-overlay
          case "menu-hover":
            if (theme.dataToggled === "menu-hover-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "menu-hover-closed" });
            }
            break;
          case "icon-click":
            if (theme.dataToggled === "icon-click-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "icon-click-closed" });
            }
            break;
          case "icon-hover":
            if (theme.dataToggled === "icon-hover-closed") {
              ThemeChanger({ ...theme, dataToggled: "" });
            } else {
              ThemeChanger({ ...theme, dataToggled: "icon-hover-closed" });
            }
            break;
        }
      }
    } else {
      if (theme.dataToggled === "close") {
        ThemeChanger({ ...theme, dataToggled: "open" });

        setTimeout(() => {
          if (theme.dataToggled == "open") {
            const overlay = document.querySelector("#responsive-overlay");

            if (overlay) {
              overlay.classList.add("active");
              overlay.addEventListener("click", () => {
                const overlay = document.querySelector("#responsive-overlay");

                if (overlay) {
                  overlay.classList.remove("active");
                  menuClose();
                }
              });
            }
          }

          window.addEventListener("resize", () => {
            if (window.screen.width >= 992) {
              const overlay = document.querySelector("#responsive-overlay");

              if (overlay) {
                overlay.classList.remove("active");
              }
            }
          });
        }, 100);
      } else {
        ThemeChanger({ ...theme, dataToggled: "close" });
      }
    }
  };
  //Dark Model
  const ToggleDark = () => {
    ThemeChanger({
      ...local_varaiable,
      class: local_varaiable.class == "dark" ? "light" : "dark",
      // "dataHeaderStyles": local_varaiable.dataHeaderStyles == "dark" ? "light" : "dark" ,
      dataHeaderStyles: local_varaiable.dataHeaderStyles == "dark",
      dataMenuStyles:
        local_varaiable.dataNavLayout == "horizontal"
          ? local_varaiable.class == "dark"
            ? "light"
            : "dark"
          : "dark",
    });
    const theme = store.getState();

    if (theme.class != "dark") {
      ThemeChanger({
        ...theme,
        bodyBg: "",
        darkBg: "",
        dataHeaderStyles: "",
      });
      localStorage.setItem("Syntolighttheme", "light");
      localStorage.removeItem("Syntodarktheme");
      localStorage.removeItem("SyntoHeader");
      localStorage.removeItem("SyntoMenu");
    } else {
      localStorage.setItem("Syntodarktheme", "dark");
      localStorage.removeItem("Syntolighttheme");
    }
  };

  const cartProduct = [
    {
      id: 1,
      src: "/assets/img/ecommerce/products/1.png",
      name: "Black Heals For Women",
      newpr: "$699",
      oldpr: "$999",
    },
    {
      id: 2,
      src: "/assets/img/ecommerce/products/2.png",
      name: "Tshirt For Men",
      newpr: "$245",
      oldpr: "$599",
    },
    {
      id: 3,
      src: "/assets/img/ecommerce/products/9.png",
      name: "Travel Bag For Womens",
      newpr: "$299",
      oldpr: "$399",
    },
    {
      id: 4,
      src: "/assets/img/ecommerce/products/10.png",
      name: "Leather Wallet For girls",
      newpr: "$100",
      oldpr: "$150",
    },
  ];

  const notificationdata = [
    {
      id: 1,
      src: "/assets/img/users/17.jpg",
      heading: "Elon Isk",
      class: "Hello there! how are you doing?...",
      data: "2 min",
    },
    {
      id: 2,
      src: "/assets/img/users/2.jpg",
      heading: "Shakira Sen",
      class: "I would like to discuss about that...",
      data: "09:43",
    },
    {
      id: 3,
      src: "/assets/img/users/21.jpg",
      heading: "Sebastain",
      class: "Shall we go to the cafe at downto...",
      data: "yesterday",
    },
    {
      id: 4,
      src: "/assets/img/users/11.jpg",
      heading: "Charlie Davieson",
      class: "Lorem ipsum dolor sit amet, cons...",
      data: "yesterday",
    },
  ];
  const [allData1, setAllData1] = useState(notificationdata);
  function handleRemove1(id: number) {
    const newList1 = allData1.filter((idx) => idx.id !== id);
    setAllData1(newList1);
  }

  useEffect(() => {
    const navbar: any = document.querySelector(".header");
    const navbar1: any = document.querySelector(".app-sidebar");
    const sticky = navbar.clientHeight;
    // const sticky1 = navbar1.clientHeight;

    function stickyFn() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky-pin");
        navbar1.classList.add("sticky-pin");
      } else {
        navbar.classList.remove("sticky-pin");
        navbar1.classList.remove("sticky-pin");
      }
    }

    window.addEventListener("scroll", stickyFn);
    window.addEventListener("DOMContentLoaded", stickyFn);

    // Cleanup event listeners when the component unmounts
    return () => {
      window.removeEventListener("scroll", stickyFn);
      window.removeEventListener("DOMContentLoaded", stickyFn);
    };
  }, []);

  const [cartItems, setCartItems] = useState([...cartProduct]);
  const [cartItemCount, setCartItemCount] = useState(cartProduct.length);
  const handleRemove = (
    itemId: number,
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
    setCartItemCount(updatedCart.length);
  };

  const [notifications, setNotifications] = useState([...notificationdata]);

  const handleNotificationClose = (
    index: number,
    event: { stopPropagation: () => void } | undefined,
  ) => {
    // Create a copy of the notifications array and remove the item at the specified index
    if (event) {
      event.stopPropagation();
    }
    const updatedNotifications = [...notifications];
    updatedNotifications.splice(index, 1);
    setNotifications(updatedNotifications);
  };

  const handleRemoveNotification = (
    notificationId: number,
    event: { stopPropagation: () => void },
  ) => {
    // Ensure that event is not undefined before trying to access stopPropagation
    if (event) {
      event.stopPropagation();
    }

    // Handle remove logic for notifications here
    // For example, you can filter out the notification with the given notificationId
    const updatedNotifications = notifications.filter(
      (notification) => notification.id !== notificationId,
    );
    setNotifications(updatedNotifications);
  };
  return (
    <Fragment>
      <header className="header custom-sticky !top-0 !w-full">
        <nav className="main-header" aria-label="Global">
          <div className="header-content">
            <div className="header-left">
              <div className="">
                <button
                  type="button"
                  className="sidebar-toggle"
                  onClick={() => toggleSidebar()}
                >
                  <span className="sr-only">Toggle Navigation</span>
                  <i className="ri-arrow-right-circle-line header-icon toggle-icon"></i>
                </button>
              </div>
            </div>

            <div className="responsive-logo">
              <Link
                className="responsive-logo-dark"
                href={"/components/dashboards/sales"}
                aria-label="Brand"
              >
                <img
                  src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/brand-logos/xponse-logo.png`}
                  alt="logo"
                  className="mx-auto"
                  width={'200'}
                />
              </Link>
              <Link
                className="responsive-logo-light"
                href={"/components/dashboards/sales"}
                aria-label="Brand"
              >
                <img
                  src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/brand-logos/xponse-logo.png`}
                  alt="logo"
                  className="mx-auto"
                  width={'200'}
                />
              </Link>
            </div>

            <div className="header-right">
              <div className="responsive-headernav">
                <div className="header-nav-right">
                  {/* CHANGE COUNTRY DROPDOWN */}
                  {/* <div className="header-country hs-dropdown ti-dropdown hidden sm:block"
                                        data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-flag" type="button"
                                            className="hs-dropdown-toggle ti-dropdown-toggle !p-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] !border-0 rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/10.png`} alt="flag-img" className="h-[1.375rem] w-[1.375rem]" />
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu min-w-[10rem]" aria-labelledby="dropdown-flag">
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="py-2 first:pt-0 last:pb-0">
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/10.png`} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    USA
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/1.png`} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Argentina
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/2.png`} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Canada
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/3.png`} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    France
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/4.png`} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Germany
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="ti-dropdown-item">
                                                        <div className="flex items-center space-x-2 rtl:space-x-reverse w-full">
                                                            <div className="h-[1.375rem] w-[1.375rem] rounded-sm">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/flags/5.png`} alt="flag-img" />
                                                            </div>
                                                            <div>
                                                                <p className="text-xs font-medium">
                                                                    Italy
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  {/* SEARCH FEATURES */}
                  {/* <div className="header-search" >
                                        <button aria-label="button" type="button" data-hs-overlay="#search-modal"
                                            className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                            <i className="ri-search-2-line header-icon"></i>
                                        </button>
                                    </div> */}

                  {/* LIGHT AND DARK MODE */}
                  <div
                    className="header-theme-mode hidden sm:block"
                    onClick={() => ToggleDark()}
                  >
                    <Link
                      aria-label="anchor"
                      className="hs-dark-mode-active:hidden flex hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                      href="#!"
                      data-hs-theme-click-value="dark"
                    >
                      <i className="ri-moon-line header-icon"></i>
                    </Link>
                    <Link
                      aria-label="anchor"
                      className="hs-dark-mode-active:flex hidden hs-dark-mode group flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                      href="#!"
                      data-hs-theme-click-value="light"
                    >
                      <i className="ri-sun-line header-icon"></i>
                    </Link>
                  </div>

                  {/* FULLSCREEN FEATURES */}
                  <div
                    className="header-fullscreen hidden lg:block"
                    onClick={() => Fullscreen()}
                  >
                    <Link
                      aria-label="anchor"
                      href="#!"
                      className="inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                    >
                      <i className="ri-fullscreen-line header-icon full-screen-open"></i>
                      <i className="ri-fullscreen-line header-icon fullscreen-exit-line hidden"></i>
                    </Link>
                  </div>

                  {/* CART DROPDOWN */}
                  {/* <div className="header-cart hs-dropdown ti-dropdown hidden lg:block" data-hs-dropdown-placement="left">
                                        <button id="dropdown-cart" type="button" className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-shopping-basket-line header-icon"></i>
                                            <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                                                <span className="relative inline-flex rounded-full h-5 w-5 bg-danger text-white justify-center items-center" id="cart-data2">{cartItemCount}</span>
                                            </span>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0" aria-labelledby="dropdown-cart">
                                            <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                                                <p className="ti-dropdown-header-title !text-white font-semibold">Shopping Cart</p>
                                                <Link href="#!" className="badge bg-black/20 text-white rounded-sm" id="cart-data">{cartItemCount} Item{cartItemCount !== 1 ? 's' : ''}</Link>
                                            </div>
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="py-2 first:pt-0 last:pb-0" id="allCartsContainer">
                                                    {cartItems.map((idx) => (
                                                        <div className="ti-dropdown-item relative header-box" key={Math.random()}>
                                                            <Link href="#!" className="flex items-center space-x-3 rtl:space-x-reverse w-full">
                                                                <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${idx.src}`} alt="product-img" className="avatar p-2 shadow-none  shrink-0 items-center justify-center rounded-sm bg-gray-100 dark:bg-black/20 !ring-transparent"/>
                                                                <div>
                                                                    <p className="text-sm font-medium text-gray-800 dark:text-white">{idx.name}</p>
                                                                    <div className="flex space-x-2 rtl:space-x-reverse">
                                                                        <h5 className="text-xs">{idx.newpr}</h5>
                                                                        <span className="my-auto line-through text-xs text-gray-400 dark:text-white/70">{idx.oldpr}</span>
                                                                    </div>
                                                                </div>
                                                            </Link>
                                                            <Link aria-label="anchor" href="#!" onClick={(event) => handleRemove(idx.id,event)} className="header-remove-btn ltr:ml-auto rtl:mr-auto flex-shrink-0 inline-flex items-center justify-center text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                                <i className="ri-close-circle-line"></i>
                                                            </Link>
                                                          
                                                        </div>
                                                          
                                                    ))}
                                                   <div className="py-2 first:pt-0 last:pb-0 px-5">
                                                          <div className="flex justify-between">
                                                              <div>
                                                                  <span className="text-xs font-semibold text-gray-800 dark:text-white">Total</span>
                                                              </div>
                                                              <div className="text-end font-medium">
                                                                  <span className="text-xs font-semibold text-gray-800 dark:text-white">$40,020</span>
                                                              </div>
                                                          </div>
                                                      </div> 
                                                </div>
                                               
                                                <div className={`py-2 first:pt-0 px-5 ${cartItemCount === 0 ? 'hidden' : 'd-block'}`}>
                                                    <Link className="w-full ti-btn ti-btn-primary p-2" href="#!">
                                                        Proceed Checkout
                                                    </Link>
                                                </div>
                                                <div className={`p-6 pb-8 text-center ${cartItemCount === 0 ? 'd-block' : 'hidden'}`}>
                            <i className="ri ri-shopping-cart-2-line leading-none text-4xl avatar avatar-lg bg-primary/20 text-primary rounded-full p-3 align-middle flex justify-center mx-auto"></i>
                            <div className="mt-5 text-center">
                              <p className="text-base font-semibold text-gray-800 dark:text-white mb-1">
                                No Items In Cart
                              </p>
                              <p className="text-xs text-gray-500 dark:text-white/70">
                              When you have Items added here , they will appear here.
                              </p>
                              <Link href="#!" className="m-0 ti-btn ti-btn-primary py-1 !mt-5"><i className="ti ti-arrow-right text-base leading-none"></i>Continue Shopping</Link>
                            </div>
                          </div>
                                            </div>
                                        </div>
                                    </div> */}

                  {/* NOTIFICATION DROPDOWN */}
                  {/* <div className="header-notification hs-dropdown ti-dropdown hidden sm:block" data-hs-dropdown-placement="bottom-right">
                                        <button id="dropdown-notification" type="button"
                                            className="hs-dropdown-toggle ti-dropdown-toggle p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-notification-2-line header-icon animate-bell"></i>
                                            <span className="flex absolute h-5 w-5 top-0 ltr:right-0 rtl:left-0 -mt-1 ltr:-mr-1 rtl:-ml-1">
                                                <span
                                                    className="animate-ping absolute inline-flex h-full w-full rounded-full bg-success/80 opacity-75"></span>
                                                <span
                                                    className="relative inline-flex rounded-full h-5 w-5 bg-success text-white justify-center items-center" id="notify-data"> {notifications.length}</span>
                                            </span>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0" aria-labelledby="dropdown-notification">
                                            <div className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center">
                                                <p className="ti-dropdown-header-title !text-white font-semibold">Notifications</p>
                                                <Link href="#!" className="badge bg-black/20 text-white rounded-sm">{`${notifications.length} Mark All Read`}</Link>
                                            </div>
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="py-2 first:pt-0 last:pb-0" id="allNotifyContainer">
                                               {notifications.map((idx,index)=>(
                                                 <div className="ti-dropdown-item relative header-box" key={index}>
                                                 <Link href="#!" className="flex space-x-3 rtl:space-x-reverse">
                                                     <div className="ltr:mr-2 rtl:ml-2 avatar rounded-full ring-0">
                                                         <img src={`${process.env.NODE_ENV === "production" ? basePath : ""}${idx.src}`} alt="img" className="rounded-sm" />
                                                     </div>
                                                     <div className="relative w-full">
                                                         <h5 className="text-sm text-gray-800 dark:text-white font-semibold mb-1">{idx.heading}</h5>
                                                         <p className="text-xs mb-1 max-w-[200px] truncate">{idx.class}</p>
                                                         <p className="text-xs text-gray-400 dark:text-white/70">{idx.data}</p>
                                                     </div>
                                                 </Link>
                                                 <Link onClick={(event)=> handleNotificationClose(index,event)} aria-label="anchor" href="#!" className="header-remove-btn ltr:ml-auto rtl:mr-auto text-lg text-gray-500/20 dark:text-white/20 hover:text-gray-800 dark:hover:text-white">
                                                     <i className="ri-close-circle-line"></i>
                                                 </Link>
                                             </div>
                                               ))}
                                                </div>
                                                <div className= {`py-2 first:pt-0 px-5 ${notifications.length === 0 ? 'hidden' : 'd-block'}`}>
                                                    <Link className="w-full ti-btn ti-btn-primary p-2" href="#!">
                                                        View All
                                                    </Link>
                                                </div>
                                <div className={`p-6 pb-8 text-center ${notifications.length === 0 ? 'd-block' : 'hidden'}`}>
            <i className="ri ri-notification-off-line leading-none text-4xl avatar avatar-lg bg-secondary/20 text-secondary rounded-full p-3 align-middle flex justify-center mx-auto"></i>
            <div className="mt-5 text-center">
              <p className="text-base font-semibold text-gray-800 dark:text-white mb-1">
                No Notifications Found
              </p>
              <p className="text-xs text-gray-500 dark:text-white/70">
              When you have notifications added here , they will appear here.
              </p>
            </div>
          </div>
                                            </div>
                                        </div>
                                    </div> */}

                  {/* RELATED APPS DROPDOWN */}
                  {/* <div className="header-apps hs-dropdown ti-dropdown hidden md:block" data-hs-dropdown-placement="bottom-right">
                                        <button aria-label="button" id="dropdown-apps" type="button" className="hs-dropdown-toggle ti-dropdown-toggle !p-0 border-0 flex-shrink-0 h-[2.375rem] w-[2.375rem] rounded-full shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10">
                                            <i className="ri-bookmark-line header-icon"></i>
                                        </button>
                                        <div className="hs-dropdown-menu ti-dropdown-menu w-[20rem] border-0" aria-labelledby="dropdown-apps">
                                            <div
                                                className="ti-dropdown-header !bg-primary border-b dark:border-white/10 flex justify-between items-center text-center">
                                                <p className="ti-dropdown-header-title font-semibold !text-white">Related Apps</p>
                                            </div>
                                            <div className="ti-dropdown-divider divide-y divide-gray-200 dark:divide-white/10">
                                                <div className="grid grid-cols-3 gap-0 p-4 pt-2">
                                                    <Link href="#!" className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-mail-line leading-none text-2xl avatar ring-0 bg-primary/20 text-primary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Mail Inbox</div>
                                                    </Link>
                                                    <Link href="#!" className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-chat-2-line leading-none text-2xl avatar ring-0 bg-secondary/20 text-secondary rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Chat</div>
                                                    </Link>
                                                    <Link href="#!" className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-task-line leading-none text-2xl avatar ring-0 bg-warning/20 text-warning rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Task</div>
                                                    </Link>
                                                    <Link href="#!" className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-calendar-event-line leading-none text-2xl avatar ring-0 bg-danger/20 text-danger rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Calendar</div>
                                                    </Link>
                                                    <Link href="#!" className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-file-copy-2-line leading-none text-2xl avatar ring-0 bg-info/20 text-info rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">File Manager</div>
                                                    </Link>
                                                    <Link href="#!" className="block pt-0 p-2 text-center rounded-sm hover:bg-gray-50 dark:hover:bg-black/20">
                                                        <i className="ri ri-group-line leading-none text-2xl avatar ring-0 bg-success/20 text-success rounded-sm p-3 my-3 align-middle flex justify-center mx-auto"></i>
                                                        <div className="text-xs font-semibold text-gray-800 dark:text-white">Contacts</div>
                                                    </Link>
                                                </div>
                                                <div className="py-2 first:pt-0 px-5">
                                                    <Link className="w-full ti-btn ti-btn-primary p-2" href="#!">
                                                        View All
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                  <div
                    className="header-profile hs-dropdown ti-dropdown"
                    data-hs-dropdown-placement="bottom-right"
                  >
                    <button
                      id="dropdown-profile"
                      type="button"
                      className="hs-dropdown-toggle ti-dropdown-toggle gap-2 !p-0 !ring-0 !border-0 flex-shrink-0 h-8 w-8 rounded-full !shadow-none focus:ring-gray-400 text-xs dark:focus:ring-white/10"
                    >
                      <img
                        className="inline-block rounded-full ring-2 ring-white dark:ring-white/10"
                        src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/users/userThumb.jpg`}
                        alt="Image Description"
                      />
                    </button>

                    <div
                      className="hs-dropdown-menu ti-dropdown-menu border-0 w-[20rem]"
                      aria-labelledby="dropdown-profile"
                    >
                      <div className="ti-dropdown-header  flex">
                        <div className="ltr:mr-3 rtl:ml-3">
                          <img
                            className="avatar shadow-none rounded-full !ring-transparent"
                            src={`${process.env.NODE_ENV === "production" ? basePath : ""}/assets/img/users/userThumb.jpg`}
                            alt="profile-img"
                          />
                        </div>
                        <div>
                          <p className="ti-dropdown-header-title !text-dark">
                            John Doe
                          </p>
                          <p className="ti-dropdown-header-content !text-dark/50">
                            Administrator
                          </p>
                        </div>
                      </div>
                      <div className="mt-2 ti-dropdown-divider">
                        <Link href="#!" className="ti-dropdown-item">
                          <i className="ti ti-user-circle text-lg"></i>
                          Profile
                        </Link>
                        {/* <Link href="#!" className="ti-dropdown-item">
                                                    <i className="ti ti-inbox text-lg"></i>
                                                    Inbox
                                                </Link>
                                                <Link href="#!" className="ti-dropdown-item">
                                                    <i className="ti ti-clipboard-check text-lg"></i>
                                                    Task Manager
                                                </Link>
                                                <Link href="#!" className="ti-dropdown-item">
                                                    <i className="ti ti-adjustments-horizontal text-lg"></i>
                                                    Settings
                                                </Link>
                                                <Link href="#!" className="ti-dropdown-item">
                                                    <i className="ti ti-wallet text-lg"></i>
                                                    Bal: $7,12,950
                                                </Link> */}
                        <Link href={"/"} className="ti-dropdown-item">
                          <i className="ti ti-logout  text-lg"></i>
                          Log Out
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* THEME SWITCHER */}
                  {/* <div className="switcher-icon">
                    <button
                      aria-label="button"
                      type="button"
                      className="hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center gap-2 h-[2.375rem] w-[2.375rem] rounded-full font-medium  hover:bg-gray-200 text-gray-500 align-middle focus:outline-none focus-visible:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-xs dark:bg-bgdark dark:hover:bg-black/20 dark:text-white/70 dark:hover:text-white dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                      data-hs-overlay="#hs-overlay-switcher"
                    >
                      <i className="ri-settings-5-line header-icon animate-spin"></i>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <Modalsearch />
    </Fragment>
  );
};

const mapStateToProps = (state: any) => ({
  local_varaiable: state,
});
export default connect(mapStateToProps, { ThemeChanger })(Header);
