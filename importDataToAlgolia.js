const fetch = require('node-fetch');

var types = [
  {
      value: null,
      text: '所有分類',
      checked: true
  },
  {
      value: 1,
      text: '綠餐廳/蔬食',
      checked: true
  },
  {
      value: 2,
      text: '二手市集/商店',
      checked: true
  },
  {
      value: 3,
      text: '免費市集/商店',
      checked: true
  },
  {
      value: 4,
      text: '享食冰箱',
      checked: true
  },
  {
      value: 5,
      text: '食物銀行',
      checked: true
  }
];

var subtypes = [
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
];
  
var cities = [
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

function handleImageURL(value){
if(value.indexOf("fbcdn") > 0){
   return value;
}
else if(value.indexOf("drive.google.com")>0){
let id; if(value.indexOf("https://drive.google.com/file/d/")>=0){
    id = value.replace("https://drive.google.com/file/d/", "").slice(0, 33);
    value = `https://drive.google.com/uc?export=view&id=${id}`;
  }else{
    id = value.slice(value.indexOf("id=")+3, value.indexOf("id=")+36);
          value = `https://drive.google.com/uc?export=view&id=${id}`;
  }
} 
        

return value;
}

var rowMap = {
  '推薦店家': {
      key: 'is_recommended',
      type: "number",
      getValue: function(value){
          return value?+value:0;
      }
  },
  '推薦順序a-全台':{
      key: 'recommendation_all',
      type: 'string',
      getValue: function(value){
          return value;
      }
  },
  '推薦順序b-行政區':{
      key: 'recommendation_area',
      type: 'string',
      getValue: function(value){
          return value;
      }
  },
  '推薦順序c-各縣市': {
      key: 'recommendation_level',
      type: 'string',
      getValue: function(value){
          return value;
      }
  },
  '圖層': {
      key: 'type',
      type: "array",
      getValue: function(value){
        var result = value.split(",");
        
        for(var i=0;i<result.length;i++){
            for(var j=0;j<types.length;j++){
              if(types[j].text === result[i]){
                result[i] = types[j].value;
                break;
              }
            }
            if(typeof result[i] !== typeof(5)) result[i] = 0;
        }
        
        return result;
      }
  },	
  '性質': {
      key: 'subtype',
      type: "int",
      getValue: function(value){
        var type;
for(var i=0;i<types.length;i++){
if(types[i].text === value){
  type = types[i];
  break;
}
          return type && subTypes[type.value]?subTypes[type.value][value]:0;
      }
      }
  },	
  '店名': {
      key: 'name',
      type: 'string',
      getValue: function(value){
          return value;
      }
  },	
  '縣市': {
      key: 'city',
      type: "int",
      getValue: function(value){
          var city;
for(var i=0;i<cities.length;i++){
if(value.indexOf(cities[i].text) >= 0){
  city = cities[i];
  break;
}

}
          return city?city.value:0;
      }
  },	
  '地址a-格式不限': {
      key: 'address',
      type: 'string',
      getValue: function(value){
          return value.replace(/(\r\n|\n|\r)/gm,'\n').split("\n").join(",");
      }
  },	
  '經度': {
      key: 'longitude',
      type: "float",
      getValue: function(value){
          return value?parseFloat(value):121.5147601;
      }

  },	
  '緯度': {
      key: 'latitude',
      type: "float",
      getValue: function(value){
          return value?parseFloat(value):25.047819;
      }

  },		
  '電話': {
      key: 'phone',
      type: 'array',
      getValue: function(value){
          return value.trim()?value.trim().replace(/(\r\n|\n|\r)/gm,'\n').replace(/ /gm,'-').split(","):[];
      }
  },		
  '粉專網頁': {
      key: 'url',
      type: 'array',
      getValue: function(value){
          return value.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gm);
      }

  },		
  '臉書id': {
      key: 'facebook_id',
      type: 'string',
      getValue: function(value){
          return value;
      }

  },	
  '開放時間統一格式': {
      key: 'business_hours',
      type: 'string',
      getValue: function(value){
          return value.replace(/(\r\n|\n|\r)/gm,'\n').replace("	", " ");
      }
  },
  '開放時間其他格式': {
      key: 'alt_business_hours',
      type: 'string',
      getValue: function(value){
          return value.replace(/(\r\n|\n|\r)/gm,'\n').replace("	", " ");
      }

  },		
  'fb關於': {
      key: 'description',
      type: 'string',
      getValue: function(value){
          return value.replace(/(\r\n|\n|\r)/gm,'\n').replace("	", " ");
      }

  },	
  '店家綠循環理念程式用': {
    key: 'recommendation_description',
    type: 'string',
    getValue: function(value){
       return value.replace(/(\r\n|\n|\r)/gm,'\n').replace("	", " ");
    }
  },
  '照片推薦頁': {
    key: 'recommendation_photo',
    type: 'string',
    getValue: function(value){
       return handleImageURL(value);
    }
  },
//    '描述(備註)': {
//        key: 'memo',
//        getValue: function(value){
//            return value;
//        }
//
//    },		
  'tagArray': {
      key: '_tags',
      type: 'array',
      getValue: function(value){
        value = value.replace(/(\r\n|\n|\r)/gm,'');
        value = value.split(",");
        return  value.map(val=>{
          return val.trim();
        });
      }

  },		
  'tag': {
      key: 'tags',
      type: 'string',
      getValue: function(value){
        return value.replace(/(\r\n|\n|\r)/gm,'');
      }

  },		
  'fb頭貼': {
      key: 'facebook_avatar',
      type: 'string',
      getValue: function(value){
        return handleImageURL(value);
      }

  },		
  '照片0fb目前頭貼': {
      key: 'photo0',
      getValue: function(value){
          return handleImageURL(value);
      }

  },	
  '照片1': {
      key: 'photo1',
      type: 'string',
      getValue: function(value){
         return handleImageURL(value);
      }

  },	
  '照片2': {
      key: 'photo2',
      type: 'string',
      getValue: function(value){                    
        return handleImageURL(value);
      }

  },	
  '照片3': {
      key: 'photo3',
      type: 'string',
      getValue: function(value){
         return handleImageURL(value);
      }

  },	
  '照片4': {
      key: 'photo4',
      type: 'string',
      getValue: function(value){
         return handleImageURL(value);
      }

  },	
  '照片5': {
      key: 'photo5',
      type: 'string',
      getValue: function(value){
         return handleImageURL(value);
      }

  },	
  '照片6': {
      key: 'photo6',
      type: 'string',
      getValue: function(value){
         return handleImageURL(value);
      }
  },
  '星星': {
      key: 'stars',
      type: "number",
      getValue: function(value){
        return +value;
      }
  }
};

const promises = [];

for(let i=2;i<=6;i++){
promises.push(fetch(`https://spreadsheets.google.com/feeds/list/1K4EIDcndeFgp34saJye6iQ4IH6qwg9kBJf11n88ezCo/${i}/public/values?alt=json`));
}

Promise.all(promises).then(data=>{ 
const promises = [];
for(let i=0;i<data.length;i++){
  promises.push(data[i].json());
}
return Promise.all(promises); 
}).then(data=>{
  const keys = Object.keys(data[0].feed.entry[0]);
  let tempArray = [];
  let result = [];

  console.log("keys:::", keys);
  for(let i=0;i<data.length;i++){
        tempArray = data[i].feed.entry.map(data=>{
      let newData = {};

    
      for(let i=0;i<keys.length;i++){
        if(rowMap[keys[i].slice(4)]){
          let value = data[keys[i]].$t;
          
          // generate multiple property for tags
          if(keys[i].slice(4) === 'tag'){
            newData['tags'] = rowMap['tag'].getValue(value);
            newData['_tags'] = rowMap['tagArray'].getValue(value);
          }else{
            newData[rowMap[keys[i].slice(4)].key] = rowMap[keys[i].slice(4)].getValue(value);
          }
        
        }
      }
          
      newData._geoloc = {
        lat: newData.latitude,
        lng: newData.longitude
      };
      return newData;
    });
    
    result = result.concat(tempArray);
  }

  importToAlgolia(result);
})


function importToAlgolia(result){
  const algoliasearch = require('algoliasearch');

  // configure algolia
  const algolia = algoliasearch(
    // 'HNGIWGJG9Q',
    // 'a9dc298f742ab70ad577ccc6f2195ea0'
    'WLQYM2VEOS',
    '5b7c1bdd81c884fecd44ce897c93dbbf'
  );
  const index = algolia.initIndex('greenmaptaiwan');
  
  // Build an array of all records to push to Algolia

  const records = [];
  result.forEach((data, i) => {
      // We set the Algolia objectID as the Firebase .key
      data.objectID = i;

      // Add object for indexing
      records.push(data);
    // }
  });

  // Add or update new objects
  index.clearIndex((err, content) => {
    if (err) throw err;

    console.log(content);
    
    index
    .saveObjects(records)
    .then(() => {
      console.log('greenmaptaiwan imported into Algolia');
      process.exit();
    })
    .catch(error => {
      console.error('Error when importing data into Algolia', error);
      process.exit(1);
    });

  });

}
