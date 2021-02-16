const array = [
    {
        itemname:'Oreo Chocolate',
        itemcategory:'Biscuit',
        itemprices:10,
        itemavailable:'true',
        brand:'Oreo'
    },
    {
        itemname:'Balaji Wafers',
        itemcategory:'Wafer',
        itemprices:100,
        itemavailable:'true',
        brand:'Balaji'    
    },
    {
        itemname:'Eclairs',
        itemcategory:'Chocolate',
        itemprices:10,
        itemavailable:'true',
        brand:'DairyMilk'    
    },
    {
        itemname:'Amul Milk',
        itemcategory:'Milk',
        itemprices:552,
        itemavailable:'true',
        brand:'Amul'
    },
    {
        itemname:'Maggie',
        itemcategory:'Noodles',
        itemprices:20,
        itemavailable:'true',
        brand:'Nestle'
    },
    {
        itemname:'Limca',
        itemcategory:'Colddrinks',
        itemprices:40,
        itemavailable:'true',
        brand:'Pepsi'
    },
    {
        itemname:'Lotte Chocopie',
        itemcategory:'muffins',
        itemprices:20,
        itemavailable:'true',
        brand:'Lotte'
      },
      {
        itemname:'Masala Toast',
        itemcategory:'Toast',
        itemprices:50,
        itemavailable:'true',
        brand:'Britania'
    },
     {
        itemname:'Candyman Toffee',
        itemcategory:'Candy',
        itemprices:1,
        itemavailable:'true',
        brand:'Candyman'
    },
    {
        itemname:'Alpelibe Lollypop',
        itemcategory:'Lollypop',
        itemprices:2,
        itemavailable:'true',
        brand:'Alpelibe'
    },
    {
        itemname:'IndiaGate Rice',
        itemcategory:'Rice',
        itemprices:50,
        itemavailable:'true',
        brand:'IndiaGate'
    },
    {
        itemname:'Aashirwad Jawar',
        itemcategory:'Jawar',
        itemprices:45,
        itemavailable:'true',
        brand:'Aashirwad'
    },
    {
        itemname:'Gateway Sugar',
        itemcategory:'Sugar',
        itemprices:40,
        itemavailable:'true',
        brand:'Gateway'

    },
    {
        itemname:'Redlabel Tea',
        itemcategory:'Tea',
        itemprices:320,
        itemavailable:'true',
        brand:'Redlabel'

    },
    {
        itemname:'Nescafe Coffee',
        itemcategory:'Sugar',
        itemprices:40,
        itemavailable:'true',
        brand:'Gateway'

    },
    {
        itemname:'Monster EnergyDrink',
        itemcategory:'EnergyDrink',
        itemprices:99,
        itemavailable:'true',
        brand:'Monster'

    },
    {
        itemname:'Saffola Oil',
        itemcategory:'Oil',
        itemprices:200,
        itemavailable:'true',
        brand:'Saffola'

    },
    {
        itemname:'Patanjali Ghee',
        itemcategory:'Ghee',
        itemprices:250,
        itemavailable:'true',
        brand:'Patanjali'

    },
    {
        itemname:'Delicious Butter',
        itemcategory:'Butter',
        itemprices:1000,
        itemavailable:'true',
        brand:'Delicious'

    },
    {
        itemname:'Lijjat Papad',
        itemcategory:'Papad',
        itemprices:850,
        itemavailable:'true',
        brand:'lijjat'

    }
]
///\let finder = (brand) => {
  //  return array.find(function(val){
   //     return val.brand === brand;
    //});
//};
//console.log(finder('Nestle'));

const filterdarray = array.filter((itemprices) => {
    return array.itemsprices <= 150
})
console.log(filterdarray)