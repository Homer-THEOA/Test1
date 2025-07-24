import React from "react";

const timelineData = [
  { year: 2011, text: "CTA Foundation established, focusing on education and outreach." },
  { year: 2012, text: "First community program launched for rural schools." },
  { year: 2013, text: "Expanded healthcare initiatives in underserved regions." },
  { year: 2014, text: "Introduced vocational training for youth empowerment." },
  { year: 2015, text: "Reached 10,000 beneficiaries across multiple districts." },
  { year: 2016, text: "Started women entrepreneurship support programs." },
  { year: 2017, text: "Built first skill development center in partnership with NGOs." },
  { year: 2018, text: "Launched scholarship fund for higher education." },
  { year: 2019, text: "Achieved milestone of 50 community events conducted." },
  { year: 2020, text: "COVID-19 relief programs and emergency aid distribution." },
  { year: 2021, text: "Digital literacy initiatives launched for rural youth." },
  { year: 2022, text: "Green energy projects introduced in remote areas." },
  { year: 2023, text: "Expanded operations to neighboring states." },
  { year: 2024, text: "Reached 100,000 lives positively impacted." },
  { year: 2025, text: "Celebrating 14 years of community transformation." },
];

export default function Timeline() {
  return (
    <div className="relative">
      <h2 className="text-3xl font-bold text-center mb-10">Our Journey</h2>
      <div className="relative border-l-2 border-blue-400 ml-6">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-3 h-3 bg-blue-400 rounded-full -left-1.5 mt-2"></div>
            <p className="text-sm text-gray-500">{item.year}</p>
            <h3 className="text-lg font-semibold">{item.text}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
