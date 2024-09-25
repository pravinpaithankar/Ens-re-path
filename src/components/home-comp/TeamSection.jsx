import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';


const TeamSection = () => {
  const teamMembers = [
    {
        name: 'Pravin Paithankar',
        role: 'Development Head',
        description: 'Leading the development team with expertise in full-stack development and project management.',
        image: '/assets/team/pravin-paithankar.jpeg',
        github: 'https://github.com/pravinpaithankar',
        linkedin: 'https://linkedin.com/in/pravinpaithankar',
        twitter: 'https://twitter.com/_paithankar8',
      },
      {
        name: 'Amar Jogdand',
        role: 'AI Head',
        description: 'Specializes in AI research and development, building intelligent systems for better user experiences.',
        image: '/assets/team/amar-jogdand.jpg',
        github: 'https://github.com/pravinpaithankar',
        linkedin: 'https://linkedin.com/in/pravinpaithankar',
        twitter: 'https://twitter.com/_paithankar8',
      },
      {
        name: 'Vaishnav Chaughule',
        role: 'Research Head',
        description: 'Focused on data-driven insights and leading research to create impactful solutions for the platform.',
        image: '/assets/team/vaishnav-chaughule.jpg',
        github: 'https://github.com/pravinpaithankar',
        linkedin: 'https://linkedin.com/in/pravinpaithankar',
        twitter: 'https://twitter.com/paithankar8',
      },
      {
        name: 'Adarsh Wankhede',
        role: 'Design Head',
        description: 'Crafting innovative and user-friendly designs that bring our ideas to life through creativity and detail.',
        image: '/assets/team/adarsh-wankhede.jpg',
        github: 'https://github.com/pravinpaithankar',
        linkedin: 'https://linkedin.com/in/pravinpaithankar',
        twitter: 'https://twitter.com/paithankar8',
      },
      {
        name: 'Swati Yadawar',
        role: 'Backend Dev Head',
        description: 'Ensures a smooth and scalable backend architecture to support the platform’s complex functionalities.',
        image: '/assets/team/swati-yadawar.jpg',
        github: 'https://github.com/pravinpaithankar',
        linkedin: 'https://linkedin.com/in/pravinpaithankar',
        twitter: 'https://twitter.com/paithankar8',
      },
      {
        name: 'Sharyu',
        role: 'Frontend Dev Head',
        description: 'Expert in building sleek and interactive frontend interfaces that elevate user engagement.',
        image: '/assets/team/sharyu.jpg',
        github: 'https://github.com/pravinpaithankar',
        linkedin: 'https://linkedin.com/in/pravinpaithankar',
        twitter: 'https://twitter.com/paithankar8',
      },
  ];

  
  return (
    <section className="bg-gray-200 text-gray-300 py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-700 shadow-lg rounded-lg p-6 text-center transform transition-transform duration-500 hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-r hover:from-gray-600 hover:via-blue-600 hover:to-blue-900"
            >
              {/* Custom Image */}
              <div className="relative w-24 h-24 mx-auto mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full border-4 border-gray-700 transform transition-transform duration-500 hover:scale-110"
                />
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-gray-100 transition-colors duration-500 group-hover:text-white">
                {member.name}
              </h3>
              <p className="text-sm text-blue-400 mb-2 transition-colors duration-500 group-hover:text-gray-200">
                {member.role}
              </p>
              <p className="text-gray-400 text-sm transition-colors duration-500 group-hover:text-gray-300">
                {member.description}
              </p>

              {/* Social Media Icons */}
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href={member.github}
                  className="text-gray-400 hover:text-blue-400 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" className="transition-all duration-500 hover:text-white hover:shadow-blue-500 hover:shadow-lg" />
                </a>
                <a
                  href={member.linkedin}
                  className="text-gray-400 hover:text-blue-400 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} size="lg" className="transition-all duration-500 hover:text-white hover:shadow-blue-500 hover:shadow-lg" />
                </a>
                <a
                  href={member.twitter}
                  className="text-gray-400 hover:text-blue-400 transition-transform hover:scale-110"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" className="transition-all duration-500 hover:text-white hover:shadow-blue-500 hover:shadow-lg" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;