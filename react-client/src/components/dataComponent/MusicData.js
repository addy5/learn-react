import $ from 'jquery';

class DataFactory {
  getHits(){
    return new Promise((resolve, reject) => {
      $.ajax({
        url: 'https://itunes.apple.com/us/rss/topalbums/limit=100/json',
        dataType: 'json',
        cache: false,
        success: function(data){
          let hits = [];
          let artists = {};
          let categories = {};

          data.feed.entry.forEach(function(hit){
            var artist =  hit['im:artist']['label'];
            var category = hit['category']['attributes']['label'];
            var img = hit['im:image'][2]['label'].replace('170x170bb', '300x300bb');

            hits.push({
              artist:artist,
              count:hit['im:itemCount']['label'],
              genre: hit['category']['attributes']['label'],
              id: hit['id']['label'],
              img: img,
              price: hit['im:price']['label'],
              title: hit['im:name']['label']
            })


            if(artists[artist]){
              artists[artist] = artists[artist] + 1;
            } else {
              artists[artist] = 1;
            }

            if(categories[category]){
              categories[category] = categories[category] + 1;
            } else {
              categories[category] = 1;
            }
          });

          console.log(data.feed.entry);

          resolve({
            hits: hits,
            artists: artists,
            categories: categories,
          });
        }.bind(this),
        error: function(xhr, status, err) {
            console.log('error!!!');
            reject({});
        }
      });
    });
  }
}

export default DataFactory;
