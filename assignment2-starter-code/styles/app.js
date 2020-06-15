(function (){
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController (ShoppingListCheckOffService) {
  var toBuyList = this;
  toBuyList.items = [];

  toBuyList.items = ShoppingListCheckOffService.getToBuyList();

  toBuyList.buyItem = function (indexItem) {
    ShoppingListCheckOffService.buyItem(indexItem);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController (ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = [];

  boughtList.items = ShoppingListCheckOffService.getBoughtList();


}

function ShoppingListCheckOffService () {
  var service = this;

  var toBuyList = [{ name: "cookies", quantity: 5 },
                   { name: "candies", quantity: 10 },
                   { name: "chocolates", quantity: 15 },
                   { name: "cupcakes", quantity: 8 },
                   { name: "oranges", quantity: 7 }];
  var boughtList = [];

  service.buyItem = function (indexItem) {
    boughtList.push(toBuyList[indexItem]);
    toBuyList.splice(indexItem,1);

  }

  service.getToBuyList = function () {
    return toBuyList;
  }

  service.getBoughtList = function () {
    return boughtList;
  }

}


})();
