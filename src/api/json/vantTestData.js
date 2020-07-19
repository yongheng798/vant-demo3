/*
 * @Author: your name
 * @Date: 2020-07-16 15:31:47
 * @LastEditTime: 2020-07-19 11:17:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vant-demo3\src\api\json\vantTestData.js
 */
// picker单列选择器
export const cityList = [
  {
    id: 1101,
    name: '福田区',
    selected: false
  },
  {
    id: 1102,
    name: '宝安区',
    selected: false
  },
  {
    id: 1103,
    name: '龙华区',
    selected: true
  },
  {
    id: 1104,
    name: '南山区',
    selected: false
  }
]

// 多列选择器
export const timeDayList = [
  // 第一列
  {
    values: ['周一', '周二', '周三', '周四', '周五'],
    defaultIndex: 2,
    className: '周二'
  },
  // 第二列
  {
    values: ['上午', '下午', '晚上'],
    defaultIndex: 1,
    className: '下午'
  }
]
// 动态选择器
export const doubleCitys = {
  浙江: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
  福建: ['福州', '厦门', '莆田', '三明', '泉州']
}
// 连级动态选择器
export const levelTwoData = [
  {
    childName: '浙江',
    childId: '001',
    selected: false,
    children: [
      {
        childName: '杭州',
        childId: '0011',
        selected: false
      },
      {
        childName: '温州',
        childId: '0012',
        selected: false
      }
    ]
  },
  {
    childName: '福建',
    childId: '002',
    selected: true,
    children: [
      {
        childName: '福州',
        childId: '0021',
        selected: false
      },
      {
        childName: '厦门',
        childId: '0022',
        selected: true
      }
    ]
  }
]
// 连级动态选择器
export const levelThreeData = [
  {
    text: '浙江',
    className: '001',
    selected: false,
    children: [
      {
        text: '杭州',
        className: '0011',
        selected: false,
        children: [
          { text: '西湖区', className: '00111', selected: false },
          { text: '余杭区', className: '00112', selected: false }
        ]
      },
      {
        text: '温州',
        className: '0012',
        selected: false,
        children: [
          { text: '鹿城区', className: '00121', selected: false },
          { text: '瓯海区', className: '00121', selected: false }
        ]
      }
    ]
  },
  {
    text: '福建',
    className: '002',
    selected: true,
    children: [
      {
        text: '福州',
        className: '0021',
        selected: false,
        children: [
          { text: '鼓楼区', className: '00211', selected: false },
          { text: '台江区', className: '00212', selected: false }
        ]
      },
      {
        text: '厦门',
        className: '0022',
        selected: true,
        children: [
          { text: '思明区', className: '00221', selected: true },
          { text: '海沧区', className: '00222', selected: false }
        ]
      }
    ]
  }
]
