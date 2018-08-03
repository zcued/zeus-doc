const Config = [
    { name: '开始使用', route: '/docs/articles/get-started' },
    { name: '文档的使用', route: '/docs/articles/README' },
    {
        name: '组件',
        options: [
            {
                name: '基本',
                options: [
                    { name: 'Grid 布局', route: '/docs/components/grid' },
                    { name: 'Heading 标题', route: '/docs/components/heading' },
                    { name: 'Icon 图标', route: '/docs/components/icon' },
                    { name: 'Button 按钮', route: '/docs/components/button' }
                ]
            },
            {
                name: '输入',
                options: [
                    { name: 'Form 表单', route: '/docs/components/form' },
                    { name: 'Input 输入框', route: '/docs/components/input' },
                    { name: 'Select 选项', route: '/docs/components/select' },
                    { name: 'Checkbox 复选框', route: '/docs/components/checkbox' },
                    { name: 'Datepicker 日期', route: '/docs/components/datepicker' }
                ]
            },
            {
                name: '数据呈现',
                options: [
                    { name: 'List 列表', route: '/docs/components/list' },
                    { name: 'Card 卡片', route: '/docs/components/card' },
                    { name: 'Table 表格', route: '/docs/components/table' },
                    { name: 'Toast 和 Modal 弹窗', route: '/docs/components/toast' },
                    { name: 'Collpase 折叠面板', route: '/docs/components/collapse' }
                ]
            },
            {
                name: '导航',
                options: [
                    { name: 'Tabs 选项卡', route: '/docs/components/tabs' },
                    { name: 'Menus 菜单栏', route: '/docs/components/menus' },
                    { name: 'Collapse 下拉菜单', route: '/docs/components/dropdown' },
                    { name: 'Pagination 分页', route: '/docs/components/pagination' }
                ]
            },
            {
                name: '辅助',
                options: [
                    { name: 'Spinner 遮罩层', route: '/docs/components/spinner' },
                    { name: 'Tooltip 提示', route: '/docs/components/tooltip' }
                ]
            }
        ]
    }
]

export default Config
