import food_bank from '~/assets/img/icon_food_bank.svg';
import food_share from '~/assets/img/icon_food_share.svg';
import free_shop from '~/assets/img/icon_free_shop.svg';
import thrift_shop from '~/assets/img/icon_thrift_shop.svg';
import vegetarian_shop from '~/assets/img/icon_tag_vegetarian_shop.svg';
import type_all from '~/assets/img/icon_type_all.svg';
import type_food_bank from '~/assets/img/icon_type_food_bank.svg';
import type_food_share from '~/assets/img/icon_type_food_share.svg';
import type_free_shop from '~/assets/img/icon_type_free_shop.svg';
import type_thrift_shop from '~/assets/img/icon_type_thrift_shop.svg';
import type_vegetarian_shop from '~/assets/img/icon_type_tag_vegetarian_shop.svg';

export const state = () => ({
    types: [
        {
          value: 0,
          text: '所有分類',
          checked: true,
          typeIcon: type_all,
          class: "type_all",
          activeClass: "active_type_all",
          description: ""
        },
        {
          value: 1,
          icon: vegetarian_shop,
          typeIcon: type_vegetarian_shop,
          text: '綠餐廳/蔬食',
          infoText: '綠餐廳',
          checked: true,
          class: "type_vegetarian_shop",
          activeClass: "active_type_vegetarian_shop",
          description: "「綠餐廳」選用有機或友善土地食材（降低化學肥料、化學飼料、農藥對土地的危害）、不使用一次性餐具器皿、少用化學添加物（綠餐廳食材也包含友善土地飼養的肉品，不僅限素食）"
        },
        {
          value: 2,
          icon: thrift_shop,
          typeIcon: type_thrift_shop,
          text: '二手市集/商店',
          infoText: '二手',
          checked: true,
          class: "type_thrift_shop",
          activeClass: "active_type_thrift_shop",
          description: "二手商店/市集 是實踐“零廢棄與資源再循環”的空間。\r\n例如：每循環一本二手書，間接相當於種了一顆2歲的樹，節省了15瓶500ml的水！每減少廢棄一件牛仔褲，節省下的其製程需水量足以讓每人淋浴（約70公升）122次。"
        },
        {
          value: 3,
          icon: free_shop,
          typeIcon: type_free_shop,
          text: '免費市集/商店',
          infoText: '免費商店',
          checked: true,
          class: "type_free_shop",
          activeClass: "active_type_free_shop",
          description: "免費商店是一個讓資源得以自由流動的空間，其理念是「帶走你需要的，留下用不到的」，人們將自己用不到的東西當成禮物送到免費商店來，不求任何回報，只為了那個東西有機會重新被使用。人們來到免費商店尋找自己需要的東西，不需任何代價，只要好好珍惜那些東西就是最好的回報。"
        },
        {
          value: 4,
          icon: food_share,
          typeIcon: type_food_share,
          text: '享食冰箱',
          infoText: '享食冰箱',
          checked: true,
          class: "type_food_share",
          activeClass: "active_type_food_share",
          description: "為降低大眾將仍新鮮可食用的食材直接丟棄浪費（像是賣相不佳仍新鮮的蔬果、未使用完的剩餘食材、即期麵包等），許多社區據點或餐廳設置「享食冰箱」讓惜食的任何人皆可取用或提供食材，並非只限弱勢者才能取用）"
        },
        {
          value: 5,
          icon: food_bank,
          typeIcon: type_food_bank,
          text: '食物銀行',
          infoText: '食物銀行',
          checked: true,
          class: "type_food_bank",
          activeClass: "active_type_food_bank",
          description: "「食物銀行」整合各方捐贈的食物或物資，提供給三餐有困難之家庭或育幼院、老人院等團體"
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
        {value: 0, text: "全台"},
        {value: 1, text: "台北", longitude: 121.5147601, latitude: 25.047819},
        {value: 2, text: "新北", longitude: 121.4800102, latitude: 25.0366869},
        {value: 3, text: "基隆", longitude: 121.7361073, latitude: 25.131712},
        {value: 4, text: "桃園", longitude: 121.3113196, latitude: 24.9892058},
        {value: 5, text: "新竹", longitude: 120.9733079, latitude: 24.8051167},
        {value: 6, text: "苗栗", longitude: 120.8201543, latitude: 24.5700249},
        {value: 7, text: "台中", longitude: 120.6844772, latitude: 24.1372642},
        {value: 8, text: "彰化", longitude: 120.5363082, latitude: 24.0815728},
        {value: 9, text: "南投", longitude: 120.7827023, latitude: 23.8264559},
        {value: 10, text: "雲林", longitude: 120.5149185, latitude: 23.7100323},
        {value: 11, text: "嘉義", longitude: 120.4389495, latitude: 23.4791236},
        {value: 12, text: "台南", longitude: 120.2104545, latitude: 22.9971684},
        {value: 13, text: "高雄", longitude: 120.2994335, latitude: 22.6398181},
        {value: 14, text: "屏東", longitude: 120.4838842, latitude: 22.6689222},
        {value: 15, text: "宜蘭", longitude: 121.7558791, latitude: 24.754553},
        {value: 16, text: "花蓮", longitude: 121.5991084, latitude: 23.9924952},
        {value: 17, text: "台東", longitude: 121.1208937, latitude: 22.793776},
        {value: 18, text: "澎湖", longitude: 119.240481, latitude: 23.4815522},
        {value: 19, text: "金門", longitude: 118.2837145, latitude: 24.6923751},
      ]
  })

  export const mutations = {

  }
