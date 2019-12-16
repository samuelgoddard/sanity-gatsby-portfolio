export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5df816e25fd0f45e0608b915',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-r33ne4zp',
                  apiId: 'b832b544-fc90-48e8-bd1e-a3b7217b0764'
                },
                {
                  buildHookId: '5df816e25fd0f43dab08b927',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-cdy9eyrb',
                  apiId: '38770e3c-c17a-4a42-ac37-5571cf7b61a8'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/samuelgoddard/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-cdy9eyrb.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
