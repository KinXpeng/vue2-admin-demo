export const ComponentList = {
	icon: 'el-icon-s-operation',
	index: 'component',
	subs: [
		{
			path: '/editor',
			index: 'editor',
			meta: {
				title: 'editor'
			}
		},
		{
			path: '/countTo',
			index: 'countTo',
			meta: {
				title: 'countTo'
			}
		},
		{
			index: 'trees',
			icon: 'el-icon-share',
			subs: [
				{
					path: '/customTree',
					index: 'customTree',
					meta: {
						title: 'customTree'
					}
				},
				{
					path: '/treeTable',
					index: 'treeTable',
					meta: {
						title: 'treeTable'
					}
				},
				{
					path: '/treeSelect',
					index: 'treeSelect',
					meta: {
						title: 'treeSelect'
					}
				}
			]
		}
	]
}
