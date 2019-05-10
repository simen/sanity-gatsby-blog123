export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
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
                  buildHookId: '5cd54d30b655659615a9b68b',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog123-studio',
                  apiId: '130a715b-54bc-4841-a5f8-9efa4a04b0bd'
                },
                {
                  buildHookId: '5cd54d30e770acf5fd00aada',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog123',
                  apiId: '3cad7efd-e6b9-44ad-ba6e-d5abba0ca934'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-gatsby-blog123',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog123.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
