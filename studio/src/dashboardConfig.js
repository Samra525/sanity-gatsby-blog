export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '6032d5a7d1886ae3d08e5cd3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-wggosrsd',
                  apiId: '4d914091-92de-48b6-9cb7-e1c73033b5c3'
                },
                {
                  buildHookId: '6032d5a7cb9becd99ccb9f46',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-dj4637pv',
                  apiId: 'add4b1a5-2665-416d-b37b-a999e70c39fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Samra525/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-dj4637pv.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
