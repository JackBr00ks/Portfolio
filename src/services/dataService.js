export default class DataService {
  _data = {
    projectRepo: 'https://github.com/JackBr00ks/Portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            'Hi! Im Jack...',
            
            'As a passionate and motivated software engineer, I have experience building innovative programs and providing customer solutions.',
            'With a background in one of the UKs leading software consultancies in National Security, I have a strong understanding of the importance of delivering secure and reliable solutions.',
            'A couple years ago, I transitioned from being an Application Engineer by completing an intensive software training course, allowing me to expand my skills and knowledge. I am now seeking a new challenge in a cutting-edge technology company where I can continue to progress my career and develop my skills further. I am excited to bring my experience and drive to a new team and work on the next generation of technology solutions.',
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://drive.google.com/file/d/1w6RWvsJexfwLoiJDnaCQSO5y4IlEJILs/view?usp=sharing',
          workExperience: [
            {
              jobTitle: 'Software Developer',
              company: 'Roke',
              location: 'Woking',
              period: 'June 2022 – PRESENT',
              accomplishments: [
                'Excelled in the Roke Academy, an intensive 6-month training course with the first half focused on learning Python and Javascript. Post-training, I have been working predominantly as a Front End Developer on various high-impact National Security projects. My responsibilities include developing and implementing new features using React and Vue, ensuring optimal website functionality.',
                '',
                'Client Projects: Engaged in multiple client projects within the National Security sector, leveraging React and Vue to create user interfaces.',
                'Team Collaboration: Contributed to a team effort in building a UI that integrates live third-party data, enabling dynamic data mapping and filtering.',
                'Independent Projects: Independently developed a research-based search engine from scratch using Vue.',
                'Current Project: Currently focused on developing a UI for a next-gen decompiler. Successfully ran a demo for senior members of the company and important stakeholders.',
                'AWS Certification: Actively pursuing the AWS Solutions Architect certification in my own time.',
                'Technical Achievements: Championed the creation of a GitLab CI/CD pipeline, significantly enhancing project efficiency by streamlining the deployment process.',
                '',
                'Skills: Agile/Scrum,  React, Vue, Python, Javascript, Cypress, Linux, GitLab CI/CD, AWS'
              ],
              skills: [
                'Agile/Scrum', 
                'React', 
                'Vue', 
                'Python', 
                'Javascript', 
                'Cypress', 
                'Linux', 
                'GitLab CI/CD', 
                'AWS'
              ],
            },
            {
              jobTitle: 'Web Developer',
              company: 'Freelance',
              period: 'JULY 2022 – PRESENT',
              accomplishments: [
                'Designed, created and maintain a user-friendly website for a small business. This involves making any changes to the style and content of the site as well as ensuring it remains secure and online. Created with consistent page formatting and functionality in mind.',
                
                'Skills: Wordpress, Javascript, HTML CSS',
              ],
            },

            {
              jobTitle: 'Lead Application Engineer',
              company: 'AFL Global',
              location: 'Woking',
              period: 'SEPT 2020 - JUNE 2022',
              accomplishments: [
                'Technical role providing support and solutions towards the sale of fibre optic cable and accessories for new and existing customers. Solely responsible for the technical support of AFLs overhead cable product range.',
                '- Responding to technical specifications for the design of fibre optic cables, accessories and full product solutions.',
                '- Product management of cable range.',
                '- Software development.',
                '- Provision of cost estimates.',
                '- Analysing and calculating cable performance.',
                '- Loading products onto the Oracle database.',
                '- Support the day to day operation of the department.',
                
                'Skills: Product Management, Leadership, Oracle Database, Report Writing, Technical Support, VBA, Microsoft Excel, Presentation Skills.',
              ],
            },
          ],
          education: [
            {
              Degree: 'Integrated Masters in Mechanical Engineering (MEng)',
              University: 'Cardiff University',
              Achieved: '2:1',
              period: 'SEPT 2015 – JULY 2019',
            },
            {
              Degree: 'Engineering Foundation Course ',
              University: 'Coventry University College',
              Achieved: 'First',
              period: 'SEPT 2014 – MAY 2015',
            },
          ],
        },
      },
      {
        id: 'projects',
        name: 'Projects.txt',
        icon: 'flying_through_space_100',
        content: {
          projects: [
            {
              title: 'Website for Small Business',
              description:
                'Designed, created and maintain a user-friendly website for a small business. This involves making any changes to the style and content of the site as well as ensuring it remains secure and online. Created with consistent page formatting and functionality in mind.',
              techStack:
                'Wordpress, Javascript, HTML CSS',
              url: 'www.thenurseryoxford.co.uk',
            },
            {
              title: 'Weather App',
              description:
                'This project is a weather application built using React.js. It provides real-time weather information based on the users current geolocation. The app fetches weather data from a weather API and displays the current weather details, including temperature, humidity, sunrise, and sunset time. Additionally, it also provides a five-day weather forecast for the users location.',
              techStack:
                'React.js, HTML CSS, API Integration, Styled Components',
              url: 'https://github.com/JackBr00ks/sidequests/tree/my-weather-app',
            },
          ],
        },
      },
      {
        id: 'skills',
        name: 'Skills.txt',
        icon: 'progman_11',
        content: {
          hard: [
            {
              name: 'React.js',
              progress: 100,
            },
            {
              name: 'Vue.js',
              progress: 100,
            },
            {
              name: 'Cypress',
              progress: 100,
            },
            {
              name: 'Microsoft Office',
              progress: 100,
            },
            {
              name: 'AWS',
              progress: 85,
            },
            {
              name: 'Postman',
              progress: 85,
            },
            {
              name: 'Python',
              progress: 75,
            },
            {
              name: 'GitLab CI/CD',
              progress: 75,
            },
            {
              name: 'Adobe Suite',
              progress: 70,
            },
            {
              name: 'Blender',
              progress: 50,
            },
            {
              name: 'Java',
              progress: 20,
            },
          ],
          soft: 'Analytical Thinking, Teamwork, Creative Problem Solving, Management, Leadership, Organisation, Communication and Presentation Skills',
        },
      },
      {
        id: 'contact',
        name: 'Contact.txt',
        icon: 'inetcfg_2301',
        content: {
          emailText:
            'If you want to hire me or invite to a project, just email me on ',
          email: 'jack.brooks@live.com',
          socialText: 'Or you can reach me out through socials:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/JackBr00ks',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/JackBr00ks',
            },
          ],
        },
      },
    ],
  };

  getItems() {
    return this._data.items.map(({ id, name, icon }) => ({ id, name, icon }));
  }

  getItem(id) {
    return this._data.items.find((x) => x.id === id);
  }

  getProjectInfo() {
    return {
      projectRepo: this._data.projectRepo,
      react95Repo: this._data.react95Repo,
    };
  }
}
