import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import { Fragment } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Login = () => {
  return (
    <Fragment>
      <Seo title={"Signin-basic"} />
      <HelmetProvider>
        <Helmet>
          <body className="authentication-page"></body>
        </Helmet>
        <main id="content" className="w-full max-w-md mx-auto p-6">
          <div className="mt-7 bg-white rounded-sm shadow-sm dark:bg-bgdark">
            <div className="p-4 sm:p-7">
              <Link
                href={"/components/dashboards/sales/"}
                className="header-logo"
              >
                <img
                  src={"../../../../assets/img/brand-logos/xponse-logo.png"}
                  alt="logo"
                  className="mx-auto block dark:hidden"
                />
                <img
                  src={"../../../../assets/img/brand-logos/xponse-logo.png"}
                  alt="logo"
                  className="mx-auto hidden dark:block"
                />
              </Link>

              <div className="mt-5">
                <div>
                  <div className="grid gap-y-4">
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Email address
                      </label>
                      <div className="relative">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                          required
                          placeholder="mysample@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between items-center">
                        <label
                          htmlFor="password"
                          className="block text-sm mb-2 dark:text-white"
                        >
                          Password
                        </label>
                        <Link
                          className="text-sm text-danger decoration-2 hover:underline font-medium"
                          href={"#"}
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <input
                          type="password"
                          id="password"
                          name="password"
                          className="py-2 px-3 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-white/70"
                          required
                          placeholder="***************"
                        />
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="flex">
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                          className="shrink-0 mt-0.5 border-gray-200 rounded text-primary pointer-events-none focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:checked:bg-primary dark:checked:border-primary dark:focus:ring-offset-white/10"
                        />
                      </div>
                      <div className="ltr:ml-3 rtl:mr-3">
                        <label
                          htmlFor="remember-me"
                          className="text-sm dark:text-white"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <Link
                      href={"/components/dashboards/dashboard/"}
                      className="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-sm border border-transparent font-semibold bg-danger text-white hover:bg-danger focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm dark:focus:ring-offset-white/10"
                    >
                      Sign in
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </HelmetProvider>
    </Fragment>
  );
};

Login.layout = "Authenticationlayout";

export default Login;
