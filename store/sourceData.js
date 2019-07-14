import food_bank from '~/assets/img/icon_food_bank.svg';
import food_share from '~/assets/img/icon_food_share.svg';
import free_shop from '~/assets/img/icon_free_shop.svg';
import thrift_shop from '~/assets/img/icon_thrift_shop.svg';
import vegetarian_shop from '~/assets/img/icon_tag_vegetarian_shop.svg';

export const state = () => ({
    types: [
        {
          value: 0,
          text: '所有分類',
          checked: true
        },
        {
          value: 1,
          icon: vegetarian_shop,
          text: '綠餐廳/蔬食',
          checked: true
        },
        {
          value: 2,
          icon: thrift_shop,
          text: '二手市集/商店',
          checked: true
        },
        {
          value: 3,
          icon: free_shop,
          text: '免費市集/商店',
          checked: true
        },
        {
          value: 4,
          icon: food_share,
          text: '享食冰箱',
          checked: true
        },
        {
          value: 5,
          icon: food_bank,
          text: '食物銀行',
          checked: true
        }
      ],
      subtypes: [
        [
          "綠餐廳/蔬食"
        ],
        [
          "二手商店",
          "二手家具店",
          "二手書店",
          "二手電器行"
        ],
        [
          "免費市集",
          "免費商店"
        ],
        [
          "享食冰箱"
        ],
        [
          "食物銀行"
        ]
      ],
      cities: [
        {value: 0, text: "全部"},
        {value: 1, text: "台北", longitude: 121.5147601, latitude: 25.047819},
        {value: 2, text: "基隆", longitude: 121.7361073, latitude: 25.131712},
        {value: 3, text: "桃園", longitude: 121.3113196, latitude: 24.9892058},
        {value: 4, text: "新竹", longitude: 120.9733079, latitude: 24.8051167},
        {value: 5, text: "苗栗", longitude: 120.8201543, latitude: 24.5700249},
        {value: 6, text: "台中", longitude: 120.6844772, latitude: 24.1372642},
        {value: 7, text: "彰化", longitude: 120.5363082, latitude: 24.0815728},
        {value: 8, text: "南投", longitude: 120.7827023, latitude: 23.8264559},
        {value: 9, text: "雲林", longitude: 120.5149185, latitude: 23.7100323},
        {value: 10, text: "嘉義", longitude: 120.4389495, latitude: 23.4791236},
        {value: 11, text: "台南", longitude: 120.2104545, latitude: 22.9971684},
        {value: 12, text: "高雄", longitude: 120.2994335, latitude: 22.6398181},
        {value: 13, text: "屏東", longitude: 120.4838842, latitude: 22.6689222},
        {value: 14, text: "宜蘭", longitude: 121.7558791, latitude: 24.754553},
        {value: 15, text: "花蓮", longitude: 121.5991084, latitude: 23.9924952},
        {value: 16, text: "台東", longitude: 121.1208937, latitude: 22.793776},
        {value: 17, text: "澎湖", longitude: 119.240481, latitude: 23.4815522},
        {value: 18, text: "金門", longitude: 118.2837145, latitude: 24.6923751},
      ]
  })

  export const mutations = {

  }
