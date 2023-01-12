type Size = '' | 'S' | 'M' | 'L'

class Product {
  constructor(
    public name: string = '',
    public price: number = 0,
    public size: Size = '',
  ){}

  isProductReady(): boolean {
    // Aplicando los principios dry

    for (const key in this) {
      switch( typeof this[key]) {
        case 'string':
          if ((this[key] as string).length <= 0) throw Error(`${key} is empty`);
          break;
        case 'number':
          if ((this[key] as number) <= 0) throw Error(`${key} is zero`);
          break;
        default:
          throw Error(`${typeof this[key]} is not valid`);
      }
    }

    return true;
  }

  toString() {
    // No se esta aplicando los principios DRY
    // if (this.name.length <= 0) throw Error('name is empty');
    // if (this.price <= 0) throw Error('price is zero');
    // if (this.size === '') throw Error('size is empty');

    this.isProductReady();
    
    return `${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  const bluePants = new Product('Blue Large Pants', 10, 'M');
  console.log(bluePants.toString());
  
})()