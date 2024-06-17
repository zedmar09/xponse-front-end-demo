import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";
import DealerList from "./dealer-list";
import DealersPending from "./dealer-pending";
import DealersPartialApproved from "./dealer-partial-approved";
import DealersDeclined from "./dealer-declined";
import React from "react";

const Dealers = () => {
  return (
    <div>
      <Seo title={"Dealers"} />
      <PageHeader
        currentpage="Dealers"
        activepage="Users Management"
        mainpage="Dealers"
      />

<div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
        <div className="box">
          <div className="box-body">
            <nav
              className="flex space-x-2 rtl:space-x-reverse"
              aria-label="Tabs"
            >
              <button
                type="button"
                className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white active"
                id="pills-with-brand-color-item-1"
                data-hs-tab="#pills-with-brand-color-1"
                aria-controls="pills-with-brand-color-1"
              >
                Dealer List
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white"
                id="pills-with-brand-color-item-2"
                data-hs-tab="#pills-with-brand-color-2"
                aria-controls="pills-with-brand-color-2"
              >
                Pending Application
              </button>
              <button
                type="button"
                className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white"
                id="pills-with-brand-color-item-3"
                data-hs-tab="#pills-with-brand-color-3"
                aria-controls="pills-with-brand-color-3"
              >
                Patially Approved
              </button>

              <button
                type="button"
                className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-gray-500 rounded-sm hover:text-primary  dark:text-white/70 dark:hover:text-white"
                id="pills-with-brand-color-item-4"
                data-hs-tab="#pills-with-brand-color-4"
                aria-controls="pills-with-brand-color-4"
              >
                Declined Applications
              </button>
            </nav>

            <div className="mt-3">
              <div
                id="pills-with-brand-color-1"
                role="tabpanel"
                aria-labelledby="pills-with-brand-color-item-1"
              >
                <DealerList />
              </div>
              <div
                id="pills-with-brand-color-2"
                className="hidden"
                role="tabpanel"
                aria-labelledby="pills-with-brand-color-item-2"
              >
                <DealersPending />
              </div>
              <div
                id="pills-with-brand-color-3"
                className="hidden"
                role="tabpanel"
                aria-labelledby="pills-with-brand-color-item-3"
              >
                <DealersPartialApproved />
              </div>
              <div
                id="pills-with-brand-color-4"
                className="hidden"
                role="tabpanel"
                aria-labelledby="pills-with-brand-color-item-4"
              >
                <DealersDeclined />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

Dealers.layout = "Contentlayout";

export default Dealers;
