import React from "react";
import Section from "./section";

const Testimonials = () => {
	return (
		<div className="flex flex-col items-center w-full gap-4 p-8 mb-8 md:flex-row md:mb-0 flex-between">
			<div className="bg-blue-950 w-80 h-64 shadow-lg mx-auto rounded-xl p-4">
				<Section>
					<p className="text-gray-600 dark:text-white">
						<span className="text-lg font-bold text-indigo-500">“</span>
						Tesla's battery recycling program, announced in 2019, aims to
						recover valuable materials such as lithium, cobalt, and nickel
						from their electric vehicle batteries. The recycled materials
						are then used in new batteries, reducing the need for new raw
						materials and supporting the circular economy.
						<span className="text-lg font-bold text-indigo-500">”</span>
					</p>
				</Section>
				<Section>
					<span className="text-sm font-semibold text-indigo-500">
						Tesla
					</span>
				</Section>
			</div>
			<div className="bg-blue-950 w-80 h-64 shadow-lg mx-auto rounded-xl p-4">
				<Section>
					<p className="text-gray-600 dark:text-white">
						<span className="text-lg font-bold text-indigo-500">“</span>
						In 2020, Google announced that they had achieved their goal of
						sending zero waste to landfills from their global data
						centers. They also have a robust e-waste recycling program for
						their offices and employees.
						<span className="text-lg font-bold text-indigo-500">”</span>
					</p>
				</Section>
				<Section>
					<span className="text-sm font-semibold text-indigo-500">
						Google
					</span>
				</Section>
			</div>
			<div className="bg-blue-950 w-80 h-64 shadow-lg mx-auto rounded-xl p-4">
				<Section>
					<p className="text-gray-600 dark:text-white">
						<span className="text-lg font-bold text-indigo-500">“</span>
						In 2020, Apple announced that they had recycled over 1 million
						devices through their trade-in program, diverting over 7.7
						million pounds of e-waste from landfills. They have also
						committed to using 100% recycled and renewable materials in
						their products.
						<span className="text-lg font-bold text-indigo-500">”</span>
					</p>
				</Section>
				<Section>
					<span className="text-sm font-semibold text-indigo-500">
						Apple
					</span>
				</Section>
			</div>
		</div>
	);
};

export default Testimonials;
