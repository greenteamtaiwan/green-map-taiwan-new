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
          text: '素食',
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
          icon: vegetarian_shop,
          text: '食物銀行',
          checked: false
        }
      ],
      subTypes: [
        [
          "素食"
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
        {value: 1, text: "台北市", latitude: 121.5147601, longitude: 25.047819},
        {value: 2, text: "桃園市", latitude: 121.3113196, longitude: 24.9892058},
        {value: 3, text: "新竹市", latitude: 120.9733079, longitude: 24.8051167},
        {value: 4, text: "苗栗市", latitude: 120.8201543, longitude: 24.5700249},
        {value: 5, text: "台中市", latitude: 120.6844772, longitude: 24.1372642},
        {value: 6, text: "彰化市", latitude: 120.5363082, longitude: 24.0815728},
        {value: 7, text: "雲林市", latitude: 120.5149185, longitude: 23.7100323},
        {value: 8, text: "嘉義市", latitude: 120.4389495, longitude: 23.4791236},
        {value: 9, text: "台南市", latitude: 120.2104545, longitude: 22.9971684},
        {value: 10, text: "高雄市", latitude: 120.2994335, longitude: 22.6398181},
        {value: 11, text: "屏東市", latitude: 120.4838842, longitude: 22.6689222},
        {value: 12, text: "台東市", latitude: 121.1208937, longitude: 22.793776},
        {value: 13, text: "花蓮市", latitude: 121.5991084, longitude: 23.9924952},
        {value: 14, text: "宜蘭市", latitude: 121.7558791, longitude: 24.754553},
        {value: 15, text: "基隆市", latitude: 121.7361073, longitude: 25.131712},
        {value: 16, text: "南投市", latitude: 120.7827023, longitude: 23.8264559},
        {value: 17, text: "澎湖市", latitude: 119.240481, longitude: 23.4815522},
        {value: 18, text: "金門市", latitude: 118.2837145, longitude: 24.6923751},
      ]
  })
  
  export const mutations = {

  }