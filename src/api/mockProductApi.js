import delay from './delay';
import faker from 'faker';
//このファイルは、以下のハードコードされたデータを使用してWeb APIをモックします。
// setTimeoutを使用して、AJAX呼び出しの遅延をシミュレートします。
//すべての呼び出しが約束を返します。
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const arr = new Array(300)
  .fill(null)
  .map((v, i) => i + 1);

const products = arr.map(function(element, index, array) {
  let booleanDataList = [true,false,false,false,false];
  let discountRateDataList = [10,20,30,40,50];
  function chooseRandom(data) {
      let i = Math.floor(Math.random() * data.length);
      return data[i];
  }
  let getBoolean = chooseRandom(booleanDataList);
  let getRate = chooseRandom(discountRateDataList);

    const product = {
      id: element,
      product_name: faker.commerce.productName + '_' + element,
      cover: element + "_product.173.173.png",
      price: 500,
      sale_status: getBoolean,
      number_of_stocks: 10
    };
    for(let key in product){
      if (key == 'sale_status') {
        if (product[key] == true) {
          product['discount_rate'] = getRate;
        } else {
          product['discount_rate'] =  0;
        }
      }
    }
    return product;
});

class productApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      // 指定された遅延の後に、コードの断片または関数を実行します。
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default productApi;
