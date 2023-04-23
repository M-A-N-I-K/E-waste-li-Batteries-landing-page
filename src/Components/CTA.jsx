import React from "react";
import Section from "./section";
const CTA = () => {
	return (
		<div className="bg-indigo-800 opacity-90">
			<div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
				<h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
					<Section>
						<span className="block text-yellow-300">
							Want to be part of community?
						</span>
					</Section>
					<Section>
						<span className="block text-indigo-500">
							It&#x27;s today or never.
						</span>
					</Section>
				</h2>
				<Section>
					<p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
						Join the e-waste and Li battery recycling movement today! Take
						a step towards a more sustainable future by properly disposing
						of your electronics and batteries. Click here to learn more
						and find a recycling program near you.
					</p>
				</Section>
				<Section>
					<div className="lg:mt-0 lg:flex-shrink-0">
						<div className="mt-12 inline-flex rounded-md shadow">
							<button
								type="button"
								className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
							>
								Get started
							</button>
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
};

export default CTA;
