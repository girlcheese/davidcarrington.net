export const state = () => ({
  items: {
    work: {
      name: 'Work',
      to: '/work',
      subNav: [
        {
          name: 'Consultancy',
          to: '/work/consultancy-projects'
        },
        // {
        //   name: 'Consultancy 2001-2006',
        //   to: '/work/consultancy-projects-2001-2006'
        // },
        {
          name: 'Speaking Engagements',
          to: '/work/speaking-engagements'
        },
        // {
        //   name: 'Speaking Engagements 2001-2006',
        //   to: '/work/speaking-engagements-2001-2006'
        // },
        {
          name: 'Mentor/Staff Development',
          to: '/work/mentoring'
        },
        {
          name: 'Joint Venture',
          to: '/work/joint-venture'
        }
      ]
    },
    boards: {
      name: 'Boards & Committees',
      to: '/board-committee-membership/'
    },
    articles: {
      name: 'Articles & Talks',
      to: '/articles-talks',
      subNav: [
        {
          name: 'Commissioned Reports',
          to: '/articles-talks/reports'
        }
      ]
    },
    career: {
      name: 'Career',
      to: '/career-summary',
      subNav: [
        {
          name: 'Curriculm Vitae',
          to: '/download/cv'
        }
      ]
    },
    contact: {
      name: 'Contact',
      to: '/contact'
    }
  }
})
