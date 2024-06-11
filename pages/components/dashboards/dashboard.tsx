
import React, { Fragment } from "react";
import PageHeader from "@/shared/layout-components/page-header/pageheader";
import Seo from "@/shared/layout-components/seo/seo";
import Link from "next/link";

const Dashboard = () => {

	return (
		<div>
			<Seo title='Dashboard' />
			<PageHeader currentpage="Dashboard" activepage="Home" mainpage="Dashboard" />
			{/* DashboardHere */}
		</div>
	);
};

Dashboard.layout = "Contentlayout";

export default Dashboard;
