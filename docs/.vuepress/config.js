module.exports = {
    title: '爱书栈',
    description: '君哥带你上王者',
    dest: './dist',
    port: '7777',
    head: [
        ['link', {rel: 'icon', href: '/logo.jpg'}]
    ],
    markdown: {
        lineNumbers: true,
		// markdown-it-anchor 的选项
		anchor: { permalink: false },
		// markdown-it-toc 的选项
		toc: { includeLevel: [1, 2] },
		extendMarkdown: md => {
		  // 使用更多的 markdown-it 插件!
		 // md.use(require('markdown-it-toc')),
		  //md.use(require('markdown-it-container'))
		}
  },
    themeConfig: {
        nav: [
			{
				text: '首页', link: '/'
			},
			{
				text: 'web前端', link: '/database/',
				items: [
					{text: 'MySQL', link: '/database/mysql/'},
					{text: 'Oracle', link: '/database/oracle/'},
					{text: 'Redis', link: '/database/redis/'},
					{text: 'Mongodb', link: '/database/mongodb/'},
				]
			},
			{
				text: '数据库', link: '/database/',
				items: [
					{text: 'MySQL', link: '/database/mysql/'},
					{text: 'Oracle', link: '/database/oracle/'},
					{text: 'Redis', link: '/database/redis/'},
					{text: 'Mongodb', link: '/database/mongodb/'},
				]
			},
			{
				text: '数据库', link: '/database/',
				items: [
					{text: 'MySQL', link: '/database/mysql/'},
					{text: 'Oracle', link: '/database/oracle/'},
					{text: 'Redis', link: '/database/redis/'},
					{text: 'Mongodb', link: '/database/mongodb/'},
				]
			},
			{
				text: '数据库', link: '/database/',
				items: [
					{text: 'MySQL', link: '/database/mysql/'},
					{text: 'Oracle', link: '/database/oracle/'},
					{text: 'Redis', link: '/database/redis/'},
					{text: 'Mongodb', link: '/database/mongodb/'},
				]
			}
		],
        sidebar: {'/database/':[
				{
                  title:'mysql',
                  collapsable: true,
                  children:[
                    '/database/mysql',
                  ]
                },
                {
                  title:'redis',
                  collapsable: true,
                  children:[
                    '/database/redis',
                  ]
                }
            ]
        },
        sidebarDepth: 5,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
