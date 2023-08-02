export const ComponentList = {
	icon: 'el-icon-s-operation',
	index: 'component',
	layer: 0,
	subs: [
		{
			path: '/editor',
			index: 'editor',
			// icon: 'el-icon-edit',
			meta: {
				title: 'editor'
			}
		},
		{
			path: '/transferBox',
			index: 'transferBox',
			// icon: 'el-icon-edit',
			meta: {
				title: 'transferBox'
			}
		},
		{
			path: '/searchCondition',
			index: 'searchCondition',
			// icon: 'el-icon-edit',
			meta: {
				title: 'searchCondition'
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
			// icon: 'el-icon-share',
			subs: [
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
