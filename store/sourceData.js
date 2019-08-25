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

import type_info_vegetarian_shop from '~/assets/img/type_info_vegetarian_shop.png';
import type_info_food_share from '~/assets/img/type_info_food_share.png';
import type_info_free_shop from '~/assets/img/type_info_free_shop.png';
import type_info_thrift_shop from '~/assets/img/type_info_thrift_shop.png';
import type_info_food_bank from '~/assets/img/type_info_food_bank.png';

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
          typeImg: type_info_vegetarian_shop,
          text: '綠餐廳/蔬食',
          infoText: '綠餐廳',
          checked: true,
          class: "type_vegetarian_shop",
          activeClass: "active_type_vegetarian_shop",
          description: "享用好吃的料理是生活中最開心滿足的小事，不過地球上其他生物不小心吃進去的垃圾，逐年快速增加到你難以想像。每年有高達1270萬噸的塑膠垃圾最終會流向大海，等於是每分鐘都有一輛卡車的塑膠垃圾被倒入大海。而每3隻海龜就有1隻吃過塑膠，90%海鳥體內含有塑膠。\r\n\r\n如何讓生活的每一個享受食物的每個時刻，也能同時保護這個地球?「綠餐廳」透過選用有機或友善土地食材，包含降低化學肥料、化學飼料、與農藥對土地的危害，以及不使用一次性餐具器皿、少用化學添加物等，並且選用友善土地飼養的肉品，但不僅限於素食，運用料理的巧思，滿足我們對「食物」的品嚐願望，暖飽每個努力生活的胃，為客人補充天然的營養。\r\n\r\n無包裝商店，在提供天然食材的販售管道，盡力做到讓消費者可以在零包裝的方式下，完成食材的購買，少了多餘的包裝塑膠膜，或是不必要的層層包裝設計，我們和食物的接觸與珍惜變得更直接。更重要的是，每一次的購買，都能減少一次對地球環境的負擔與額外的垃圾製造。支持零廢棄地圖上的綠餐廳、無包裝商店，就是支持綠點店家從自身出發，一同降低環境塑膠垃圾的產生。"
        },
        {
          value: 2,
          icon: thrift_shop,
          typeIcon: type_thrift_shop,
          typeImg: type_info_thrift_shop,
          text: '二手市集/商店',
          infoText: '二手商店',
          checked: true,
          class: "type_thrift_shop",
          activeClass: "active_type_thrift_shop",
          description: "選擇二手商店，讓你的消費同時支持“零廢棄與資源再循環”的理念。曾有研究指出，每循環一本二手書，間接相當於種了一棵2歲的樹，節省了15瓶500ml的水。當我們享受著便利的舒適生活，同時意味著五花八門的產品也持續充滿我們的環境。\r\n\r\n像是常見的電子產品，汰換速度快，人們往往用過即丟，即使沒有壞，也因為程式更新、升級、使用體驗的升級等因素，引誘著使用者購買新機。聯合國發表1份新報告，指出每年大約有5000萬噸電子廢棄物，遠遠超過所有商用飛機的總重量，其重量相當於126座帝國大廈，龐大的垃圾量足以再蓋1座艾菲爾鐵塔，或填補整個美國紐約曼哈頓。\r\n\r\n二手商店，將民眾閒置不使用的物品、電器與傢俱等收集整理後，重新擺至架上販售，通常價格也會優惠許多。目的是希望這些還能繼續使用，或是對其他人有獨特價值的商品，能提供給不一定需要購買新品的消費者。點開零廢棄地圖，可以看到全台各地二手商店的藏身地點，在花錢購買全新商品前，不妨先逛一下家裡附近的二手商店，讓你我的消費行為，有機會為美麗的地球減少一點負擔。"
        },
        {
          value: 3,
          icon: free_shop,
          typeIcon: type_free_shop,
          typeImg: type_info_free_shop,
          text: '免費市集/商店',
          infoText: '免費商店',
          checked: true,
          class: "type_free_shop",
          activeClass: "active_type_free_shop",
          description: "免費商店是一個讓資源得以自由流動的空間，降低「 閒置仍可使用衣物、用品、電器直接變成廢棄物」的機率。提供一個空間，讓多餘不在需要用到的物品，可以提供給需要的人自由拿取。\r\n\r\n根據遠見雜誌報導，製造一件T恤等同於一個人3年的飲水量，台灣人每分鐘就丟棄 438 件衣服。根據WWF（世界自然基金會）的研究指出，製作一條牛仔褲所需水量足以讓每人淋浴（約70公升）122次。隨著運輸與製造的技術科技日益漸新，新產品推陳出新而且可以快速運送到全球各城市，形成一種巨大的速食消費的時代，人們汰換物質和生活用品的速度遠超過以前的社會。\r\n\r\n免費商店其理念是「帶走你需要的，留下用不到的」，人們將自己用不到的東西當成禮物送到免費商店來，不求任何回報，只為了那個東西有機會重新被使用。人們來到免費商店尋找自己需要的東西，不需任何額外的費用，最無價的付出就是好好使用和珍惜那些東西。透過零廢棄地圖，大家可以輕鬆找到你所在地區，支持免費商店概念的店家，歡迎大家去踩點走訪。"
        },
        {
          value: 4,
          icon: food_share,
          typeIcon: type_food_share,
          typeImg: type_info_food_share,
          text: '享食冰箱',
          infoText: '享食冰箱',
          checked: true,
          class: "type_food_share",
          activeClass: "active_type_food_share",
          description: "隨著氣候變遷問題加劇，糧食的收成將受到考驗，長途的運送也都可能造成地球暖化的間接兇手。然而，隨著食物取得的便利性增加，我們更常在生活中看見過多的食材被浪費。台灣一年浪費的食物就高達367萬噸，若以90公分桶裝、容量155公斤計算，每天的平均廚餘量將可疊起「74座101大樓」\r\n\r\n「享食冰箱」由超市、麵包店、愛心店家、民眾等提供續食食物或食材，供有需要的民眾拿取，光一天就可發送五十公斤麵包，除了大幅減少廚餘產生，更促進了良好的糧食利用。往往賣相不好，或是快要過期的食材，很容易遭到大量丟棄。這幾年在台灣，開始出現在社區據點，或餐廳與賣場中設置「享食冰箱」，可以降低民眾將仍新鮮可食用的食材直接丟棄浪費（包含賣相不佳仍新鮮的蔬果、未使用完的剩餘食材、即期麵包等），讓惜食的人皆可取用或提供食材，並非只限弱勢者才能取用。\r\n\r\n透過社區周遭的享食冰箱，讓分享食材的美意得以散播，讓不願見到食物被浪費的人，可以將食物提供給有需要的人。點開零廢棄地圖，找到各地的享食冰箱，介紹給有需要的人或是和你一樣惜食的朋友。"
        },
        {
          value: 5,
          icon: food_bank,
          typeIcon: type_food_bank,
          typeImg: type_info_food_bank,
          text: '食物銀行',
          infoText: '食物銀行',
          checked: true,
          class: "type_food_bank",
          activeClass: "active_type_food_bank",
          description: "食物銀行的概念在國外盛行已久，最早這個詞是1967年由美國發起，意思指自各地收集剩食或即期品，再提供給末端的救援或慈善機構，例如慈善廚房等等，接近一種倉儲或物流中心的概念。在台灣，因為地狹人稠，食物銀行多半指的是將收集到的食物與物資，於特定時間與地點發送給需要的民眾。\r\n\r\n根據聯合國糧食及農業組織（Food and Agriculture Organization of the United Nations，簡稱FAO）統計，全世界每年約有13億噸食物在整個食品供應鏈中被丟棄或浪費，佔糧食供應給消費者數量的3分之1，這些被浪費的量足夠解決30億人的飢餓問題。\r\n\r\n這幾年在台灣各地也逐漸出現「食物銀行」，他們整合各方捐贈的食物或物資，提供給三餐有困難之家庭或育幼院、老人院等慈善團體。像幸福食物銀行曾接收了來自世大運遺留的三噸肉品，分配到各大社福團體，讓食物能被善加利用。透過食物銀行，可以更直接幫助到需要的家庭與民眾。"
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
