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
                  buildHookId: '616610d139d9cf006bc5bb5c',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-4spnnkhb',
                  apiId: '66e9c3db-c891-4b37-b5f7-fd5557931a53'
                },
                {
                  buildHookId: '616610d29439a30099b4d558',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zpcuwb9h',
                  apiId: 'f4b5b663-a7fb-4e22-afc5-82f8ade5bb67'
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
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zpcuwb9h.netlify.app', category: 'apps'}
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
