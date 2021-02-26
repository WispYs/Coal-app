export const tabBarConfig = [
  {
    title: '首页',
    icon: 'wap-home-o',
    link: '/dashboard'
  },
  {
    title: '列表',
    icon: 'description',
    link: '/list/index'
  },
  {
    title: '详情',
    icon: 'records',
    link: '/detail/index'
  },
  {
    title: '设置',
    icon: 'setting-o',
    link: '/setting/index'
  }
]

export const sideBarConfig = [
  {
    title: 'GIS一张图',
    link: '/dashboard',
    children: [
      {
        title: '矿山三维场景展示',
        link: '/dashboard'
      }, {
        title: '三维地理信息展示',
        link: '/dashboard'
      }, {
        title: '综合一张图',
        link: '/dashboard'
      }, {
        title: '地测一张图',
        link: '/dashboard'
      }, {
        title: '生产一张图',
        link: '/dashboard'
      }
    ]
  },
  {
    title: '地测防控水',
    link: '/dashboard',
    children: [
      {
        title: '地质管理',
        link: '/dashboard'
      }, {
        title: '测量管理',
        link: '/dashboard'
      }, {
        title: '水文管理',
        link: '/dashboard'
      }, {
        title: '储量管理',
        link: '/dashboard'
      }, {
        title: '地测资料管理',
        link: '/dashboard'
      }
    ]
  },
  {
    title: '采掘管理',
    link: '/dashboard',
    children: [
      {
        title: '基础设计信息',
        link: '/dashboard'
      }, {
        title: '生产计划',
        link: '/dashboard'
      }, {
        title: '生产管理',
        link: '/dashboard'
      }, {
        title: '生产图件',
        link: '/dashboard'
      }, {
        title: '生产文档',
        link: '/dashboard'
      }
    ]
  },
  {
    title: '生产调度',
    link: '/dashboard',
    children: [
      {
        title: '调度台账',
        link: '/dashboard'
      }, {
        title: '调度管理',
        link: '/dashboard'
      }, {
        title: '调度汇报',
        link: '/dashboard'
      }
    ]
  },
  {
    title: '安全管理',
    link: '/dashboard',
    children: [
      {
        title: '安全生产标准化',
        link: '/dashboard'
      }, {
        title: '安全风险分级管控',
        link: '/dashboard'
      }, {
        title: '隐患排查治理',
        link: '/dashboard'
      }, {
        title: '三违管理',
        link: '/dashboard'
      }, {
        title: '证照管理',
        link: '/dashboard'
      }, {
        title: '职业卫生',
        link: '/dashboard'
      }
    ]
  }
]
