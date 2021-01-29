class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    this.items.map(x => {
      if(x.name !== "Sulfuras") {
        x.sellIn = x.sellIn - 1;

        if(x.name === "Backstage passes") {
          if(x.quality > 0 && x.quality < 50) {
            if(x.sellIn <= 5) {
              x.quality +=3;
            } else if (x.sellIn <= 10) {
              x.quality += 2;
            } else {
              x.quality += 1;
            }
          }
        } else if (x.name === "Aged Brie") {
          if(x.quality > 0 && x.quality < 50) {
            x.quality += 1;
          }
        } else if (x.name === "Conjured") {
          if(x.quality > 0 && x.quality < 50) {
            x.quality = x.quality - 2 < 0 ? 0 : x.quality - 2;
          }
        } else {
          if(x.quality > 0 && x.quality < 50) {
            x.quality = x.sellIn < 0 ? ((x.quality - 2 < 0 ? 0 : x.quality - 2)) : (x.quality - 1);
          }
        }
      }
    })

    return this.items;

    // for (let i = 0; i < this.items.length; i++) {
    //   if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //     if (this.items[i].quality > 0) {
    //       if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //         this.items[i].quality = this.items[i].quality - 1;
    //       }
    //     }
    //   } else {
    //     if (this.items[i].quality < 50) {
    //       this.items[i].quality = this.items[i].quality + 1;
    //       if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].sellIn < 11) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //         if (this.items[i].sellIn < 6) {
    //           if (this.items[i].quality < 50) {
    //             this.items[i].quality = this.items[i].quality + 1;
    //           }
    //         }
    //       }
    //     }
    //   }
    //   if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //     this.items[i].sellIn = this.items[i].sellIn - 1;
    //   }
    //   if (this.items[i].sellIn < 0) {
    //     if (this.items[i].name != 'Aged Brie') {
    //       if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
    //         if (this.items[i].quality > 0) {
    //           if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
    //             this.items[i].quality = this.items[i].quality - 1;
    //           }
    //         }
    //       } else {
    //         this.items[i].quality = this.items[i].quality - this.items[i].quality;
    //       }
    //     } else {
    //       if (this.items[i].quality < 50) {
    //         this.items[i].quality = this.items[i].quality + 1;
    //       }
    //     }
    //   }
    // }

    // return this.items;
  }
}

module.exports = {
  Item,
  Shop
}
