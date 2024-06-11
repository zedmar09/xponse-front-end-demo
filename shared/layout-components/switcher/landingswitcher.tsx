
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Themeprimarycolor, * as switcherdata from "../../data/switcherdata/switcherdata";

import Link from "next/link";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "@/shared/redux/store";

const Landingswitcher = ({ local_varaiable, ThemeChanger }:any) => {

  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
        ...theme,
        "dataNavStyle": "menu-click",
        "dataNavLayout":"horizontal"
    });

    return () => {
        ThemeChanger({
            ...theme,
            "dataNavStyle": "",
            "dataNavLayout":`${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`
        });
    };
  }, []);

//   useEffect(() => {
//     switcherdata.LocalStorageBackup1(ThemeChanger);
// }, []);

  const customstyles :any=`
  ${local_varaiable.colorPrimaryRgb != "" ? `--color-primary-rgb:${local_varaiable.colorPrimaryRgb}` : ""};
  ${local_varaiable.colorPrimary != "" ? `--color-primary:${local_varaiable.colorPrimary}` : ""};
  ${local_varaiable.bodyBg != "" ? `--body-bg:${local_varaiable.bodyBg}` : ""};
  ${local_varaiable.darkBg != "" ? `--dark-bg:${local_varaiable.darkBg}` : ""};
  `;

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <html dir={local_varaiable.dir}
            className={local_varaiable.class}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-toggled={local_varaiable.dataToggled}
            data-nav-style={local_varaiable.dataNavStyle}
            data-menu-position={local_varaiable.dataMenuPosition}
            style={customstyles}
          ></html>
          <body className="landing-body"></body>
        </Helmet>

        <div id="hs-overlay-switcher" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabIndex={-1}>
          <div className="ti-offcanvas-header">
            <h3 className="ti-offcanvas-title">
              Switcher
            </h3>
            <button type="button"
              className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-white/70 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
              data-hs-overlay="#hs-overlay-switcher">
              <span className="sr-only">Close modal</span>
              <i className="ri-close-circle-line leading-none text-lg"></i>
            </button>
          </div>
          <div className="ti-offcanvas-body" id="switcher-body">
                        <div id="switcher-1" role="tabpanel" aria-labelledby="switcher-item-1" className="space-y-6">
                            <div className="space-y-3">
                                <p className="switcher-style-head">Theme Color Mode:</p>
                                <div className="grid grid-cols-3 gap-6 switcher-style">
                                    <div className="flex">
                                        <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-light-theme"
                                            checked={local_varaiable.class != "dark"} onChange={e => { }}
                                            onClick={() => switcherdata.Light(ThemeChanger)}
                                        />
                                        <label htmlFor="switcher-light-theme"
                                            className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Light</label>
                                    </div>
                                    <div className="flex">
                                        <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-dark-theme"
                                            checked={local_varaiable.class == "dark"} onChange={e => { }}
                                            onClick={() => switcherdata.Dark(ThemeChanger)}
                                        />
                                        <label htmlFor="switcher-dark-theme"
                                            className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Dark</label>
                                    </div>
                                </div>
                            </div>
                            <div className="!mt-0">
                                <p className="switcher-style-head">Directions:</p>
                                <div className="grid grid-cols-3 gap-6 switcher-style">
                                    <div className="flex">
                                        <input type="radio" name="direction" className="ti-form-radio" id="switcher-ltr"
                                            checked={local_varaiable.dir == "ltr"} onChange={e => { }}
                                            onClick={() => { switcherdata.Ltr(ThemeChanger); }}
                                        />
                                        <label htmlFor="switcher-ltr" className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">LTR</label>
                                    </div>
                                    <div className="flex">
                                        <input type="radio" name="direction" className="ti-form-radio" id="switcher-rtl"
                                            checked={local_varaiable.dir == "rtl"} onChange={e => { }}
                                            onClick={() => { switcherdata.Rtl(ThemeChanger); }}
                                        />
                                        <label htmlFor="switcher-rtl" className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">RTL</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <div className="theme-colors">
                                <p className="switcher-style-head">Theme Primary:</p>
                                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                                            id="switcher-primary" onClick={() => switcherdata.primaryColor1(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                                            id="switcher-primary1" onClick={() => switcherdata.primaryColor2(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                                            id="switcher-primary2" onClick={() => switcherdata.primaryColor3(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                                            id="switcher-primary3" onClick={() => switcherdata.primaryColor4(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                                            id="switcher-primary4" onClick={() => switcherdata.primaryColor5(ThemeChanger)} />
                                    </div>
                                    <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />

                                </div>
                            </div>
                            <div className="theme-colors">
                                <p className="switcher-style-head">Theme Background:</p>
                                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-bg-1" type="radio" name="theme-background"
                                            id="switcher-background" onClick={() => switcherdata.backgroundColor1(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-bg-2" type="radio" name="theme-background"
                                            id="switcher-background1" onClick={() => switcherdata.backgroundColor2(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-bg-3" type="radio" name="theme-background"
                                            id="switcher-background2" onClick={() => switcherdata.backgroundColor3(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-bg-4" type="radio" name="theme-background"
                                            id="switcher-background3" onClick={() => switcherdata.backgroundColor4(ThemeChanger)} />
                                    </div>
                                    <div className="ti-form-radio switch-select">
                                        <input className="ti-form-radio color-input color-bg-5" type="radio" name="theme-background"
                                            id="switcher-background4" onClick={() => switcherdata.backgroundColor5(ThemeChanger)} />
                                    </div>
                                    <switcherdata.Themebackgroundcolor theme={local_varaiable} actionfunction={ThemeChanger} />
                                </div>
                            </div>
                    </div>
          <div className="ti-offcanvas-footer">
            <Link id="reset-all" className="ti-btn ti-btn-danger w-full" href="#!" onClick={() => switcherdata.Reset1(ThemeChanger)} >Reset</Link>
          </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

const mapStateToProps = (state:any) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);
