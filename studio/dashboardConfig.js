export default {
  widgets: [
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
                  buildHookId: '5f2f0dab7ce85c6a4896317d',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zg7o3zpy',
                  apiId: '2963b6db-6540-4532-9b2d-0863129f1af8'
                },
                {
                  buildHookId: '5f2f0dabbed2687ae0703cc3',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3rvvwxrp',
                  apiId: 'fd93019b-3a99-4fff-bb5d-e631f36e54a2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/salymk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3rvvwxrp.netlify.app', category: 'apps'}
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
