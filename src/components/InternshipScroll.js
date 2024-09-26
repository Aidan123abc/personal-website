import React, { useState } from 'react';
import InternshipBox from './InternshipBox';

export default function BackgroundScroll() {
  const [activeTab, setActiveTab] = useState('work'); // State to track the active tab

  // Array of experiences with their respective properties
  const experiences = [
    {
      imageName: 'climbingTeam.jfif',
      title: 'Captain',
      description:
        'I have recently been elected as the captain of Tufts University’s 200-person rock climbing club-sport team. Having previously served on the C-Board, which manages all team operations and events, I am now responsible for leading the team. My duties include managing rosters, organizing events, and overseeing the competition schedule. Prior to this, I was elected captain of my high school rock climbing team for two consecutive years, where I guided the team through the challenges of COVID-19.',
      employer: 'Tufts Rock Climbing Team',
      dateRange: 'May 2024 - Current',
      type: 'extracurricular',
    },
    {
      imageName: 'EnvironmentAmerica.jpg',
      title: 'Summer Associate and Policy Research Assistant',
      description:
        'I worked as a Summer Associate and Policy Researcher with Environment America\'s national clean water chapter. I worked to push forward legislation for increased monitoring of Harmful Algae Bloom in waterways and generating grassroots support for a stronger solution for lead in school water.',
      employer: 'Environment America',
      dateRange: 'July 2024 - August 2024',
      type: 'work',
    },
    {
      imageName: 'Iceland.jpg',
      title: 'Summer Study Abroad - Iceland',
      description:
        "In Summer 2024, I participated in the SIT Study Abroad program in Iceland, titled 'Renewable Energy, Technology & Resource Economics'. This 6-week course focused on the policy, science, and economics of renewable energy, with an emphasis on applying these solutions to the U.S. context. I worked with GIS tools and conducted extensive literature research to develop a policy and engineering-focused project which measured the hydroelectric energy storage potential of New England states while exploring the economic feasibility of its implementation. The program also featured expert talks and in-depth group discussions.",
      employer: 'School of International Training',
      dateRange: 'June 2024 - September 2024',
      type: 'extracurricular',
    },
    {
      imageName: 'disc-logo.png',
      title: 'Research Internship in Offshore Wind',
      description:
        'At the Data Intensive Studies Center, I conducted research on offshore wind, focusing on structural dynamics, signal processing, and physics-informed machine learning models. My work involved analyzing the structural health of offshore wind turbines and contributing to policy integration through agent-based modeling, blending engineering research with public policy considerations.',
      employer: 'Tufts Data Intensive Studies Center (DISC)',
      dateRange: 'January 2024 - May 2024',
      type: 'work',
    },
    {
      imageName: 'jumbocode.png',
      title: 'Project Manager - Full Stack Web Developer',
      description:
        'For two years, I was a part of Jumbocode, a prominent club at Tufts that develops scalable web-app solutions for non-profits in the Boston area. Initially, I worked as a backend/frontend developer and later transitioned into a role as project manager and full-stack engineer. In this position, I led a team of 10-12 developers, built web applications, and managed client communications, timelines, and deliverables to ensure we met project goals. I also coordinated closely with our tech-lead designer and the broader club to align on project objectives.',
      employer: 'Tufts JumboCode',
      dateRange: 'September 2022 - May 2024',
      type: 'extracurricular',
    },
    {
      imageName: 'Powerley_Logo.jpg',
      title: 'Software Developer Intern',
      description:
        'As a Hardware/Software Intern, I worked on integrating firmware controls in C/C++ with cloud services for the company\'s outage detection systems. I played a key role in developing AWS Lambda Functions to collect and track energy meter data, improving energy monitoring systems.',
      employer: 'Powerley Company',
      dateRange: 'May 2023 - August 2023',
      type: 'work',
    },
    {
      imageName: 'TuftsCS.jpg',
      title: 'Computer Science Teaching Assistant',
      description:
        'As a Teaching Assistant at Tufts Computer Science, I taught C++ to students during office hours, which I held 3-4 times a week, and assisted in grading assignments and leading lab recitations. My role supported students in navigating complex programming concepts.',
      employer: 'Tufts University Department of Computer Science',
      dateRange: 'September 2022 - January 2024',
      type: 'work',
    },
    {
      imageName: 'Appian.png',
      title: 'Web Marketing Intern',
      description:
        'At Appian Corporation, I held a Marketing Internship, where I designed and tested web projects on the Customer Experience team using Appian Community Edition (ACE). I developed an interactive job board as part of the \'Low Code for All\' (#lc4a) initiative, contributing to Appian\'s mission of expanding accessibility to low-code development tools.',
      employer: 'Appian Corporation',
      dateRange: 'May 2022 - August 2022',
      type: 'work',
    },
    {
      imageName: 'Raskin.jpg',
      title: 'Summer Staff Intern',
      description:
        'During my Summer Staff Internship in Congressman Jamie Raskin\'s Washington, D.C. office, I was responsible for engaging directly with constituents, answering calls, and addressing their concerns. I attended various meetings, both with constituents and legislative aides, to gain insights into the legislative process. Additionally, I wrote memos that summarized key discussions and policy issues for the Congressman and his staffers. This experience gave me firsthand exposure to the inner workings of a congressional office and the importance of constituent relations in shaping policy decisions.',
      employer: 'Congressman Jamie Raskin\'s DC Office',
      dateRange: 'August 2020',
      type: 'work',
    },
    {
      imageName: 'HopShop.jpg',
      title: 'Co-founder - CFO - Manager',
      description:
        'In highschool, I co-founded and managed the Hop Shop, an independent, non-profit business within school grounds that provided snacks and essential goods to students and staff. As CFO and acting manager, I oversaw all aspects of the operation, including marketing strategies, inventory management, financial planning, and accounting. Our shop quickly grew into a thriving enterprise, generating up to $2,000 in gross profit each month, which allowed us to donate up to $10,000 annually to various charities. This experience taught me the intricacies of running a sustainable business and sparked my passion for business management, teamwork, and social entrepreneurship. It also helped me develop valuable skills in commitment, collaboration, creativity, communication, and organization.',
      employer: 'The "Hop Shop"',
      dateRange: 'August 2017 - June 2021',
      type: 'extracurricular',
    },
    {
      imageName: 'GDS.jpg',
      title: 'Student Council Treasurer',
      description: 'Elected as treasurer twice, I managed all funding and financial planning for the GDS Student Staff Council. I also led the Public Relations subcommittee, overseeing communication with the student body to enhance engagement and keep them informed about council activities.',
      employer: 'Georgetown Day School',
      dateRange: 'September 2019 - June 2021',
      type: 'extracurricular',
    },
  ];

  // Filter experiences based on the active tab
  const filteredExperiences = experiences.filter((experience) =>
    activeTab === 'all' ? true : experience.type === activeTab
  );

  return (
    <div>
      {/* Dropdown for small screens */}
      <div className="block lg:hidden mb-4 flex justify-center">
        <select
          className="w-full p-2 border rounded-md bg-indigo-900 text-white text-center mt-4 py-4 w-[80%]"
          onChange={(e) => setActiveTab(e.target.value)}
          value={activeTab}
        >
          <option value="work">Work Experience</option>
          <option value="extracurricular">Extracurriculars</option>
          <option value="all">All</option>
        </select>
      </div>

      {/* Tabs for Filtering - visible on medium screens and up */}
      <div className="hidden md:flex justify-center space-x-4 mt-4">
        <button
          className={`px-4 py-2 min-w-[150px] lg:min-w-[250px] lg:text-lg rounded-md ${
            activeTab === 'work'
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'bg-indigo-900 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          }`}
          onClick={() => setActiveTab('work')}
        >
          Work Experience
        </button>
        <button
          className={`px-4 py-2 min-w-[150px] lg:min-w-[250px] lg:text-lg rounded-md ${
            activeTab === 'extracurricular'
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'bg-indigo-900 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          }`}
          onClick={() => setActiveTab('extracurricular')}
        >
          Extracurriculars
        </button>
        <button
          className={`px-4 py-2 min-w-[150px] lg:min-w-[250px] lg:text-lg rounded-md ${
            activeTab === 'all'
              ? 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
              : 'bg-indigo-900 text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          }`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
      </div>

      {/* Experience Boxes */}
      <div>
        {filteredExperiences.map((experience, index) => (
          <InternshipBox
            key={index}
            imageName={experience.imageName}
            title={experience.title}
            description={experience.description}
            employer={experience.employer}
            dateRange={experience.dateRange}
            type={experience.type}
          />
        ))}
      </div>
    </div>
  );
}
