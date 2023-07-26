export default class DataService {
  _data = {
    projectRepo: 'https://github.com/JackBrooks/portfolio',
    react95Repo: 'https://github.com/React95/React95',
    items: [
      {
        id: 'about',
        name: 'About.txt',
        icon: 'info_bubble',
        content: {
          paragraphs: [
            'about me ..'
          ],
        },
      },
      {
        id: 'resume',
        name: 'Resume.txt',
        icon: 'notepad_2',
        content: {
          resumeLink:
            'https://docs.google.com/document/d/1c_fPwOf4zo-vkSWJiCkSyiH2SZECb6JSeOSmgniaeQY/export?format=pdf',
          workExperience: [
            {
              jobTitle: 'Software Developer',
              company: 'Roke',
              location: 'Woking',
              period: 'July 2022 – PRESENT',
              accomplishments: [
                'description',
              ],
            },
            {
              jobTitle: 'Software Developer',
              company: 'Freelance',
              period: ' 2017 – PRESENT',
              accomplishments: [
                'Description',
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
              title: '',
              description:
                '',
              techStack:
                '',
              url: '',
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
              name: 'React/Redux',
              progress: 90,
            },
            {
              name: 'AWS/Azure',
              progress: 70,
            },
          ],
          soft: 'Analytical thinking, Teamwork, Creative Problem solving, Mangement, Leadership, Entrepreneurship',
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
          socialText: 'Or you can reach me out through social media:',
          social: [
            {
              name: 'FaLinkedin',
              link: 'https://www.linkedin.com/in/',
            },
            {
              name: 'FaGithub',
              link: 'https://github.com/',
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
