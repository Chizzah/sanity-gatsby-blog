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
                  buildHookId: '5e8f4edf9e8a8501bb4634b4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-j879qmpg',
                  apiId: 'c0483b89-0100-422a-8ee4-da933e913062'
                },
                {
                  buildHookId: '5e8f4edf366ee402484f3246',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-u1c18y73',
                  apiId: '55f66b12-d64d-4678-979a-3ac57fb479b6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Chizzah/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-u1c18y73.netlify.com', category: 'apps' }
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
