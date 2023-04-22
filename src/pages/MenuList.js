import React, { useContext, useState } from 'react'
import { FoodDataContext } from '../contex/DataContext'
import MenuCard from '../components/MenuList-Card/MenuCard';



const MenuList = () => {

    const { foodData, isLoading, selectedItemToCart } = useContext(FoodDataContext)

    // ============== //
    const [searchValue, setSearchValue] = useState('');
    const [isVeggie, setIsVeggie] = useState(false);
    const [isSpicy, setIsSpicy] = useState(false);
    const [price, setPrice] = useState('');


    const searchItemHandler = (e) =>{
        setSearchValue(e.target.value);
    }
    const vegItemHandler = (e) =>{
        setIsVeggie(e.target.checked)
    }
    const spicyItemHandler = (e) =>{
        setIsSpicy(e.target.checked)
    }
    const priceHandler = (e) =>{
        setPrice(e.target.value)
    }
  

    const filteredData = () =>{
        return foodData.filter((item) => searchValue.length > 0 ? item.name.toLocaleLowerCase().includes(searchValue) : true).filter((item) => isVeggie ? item.is_vegetarian : true).filter((item) => isSpicy ? item.is_spicy : true)
    }
    const getSortedFinalData = () =>{
        if(price === 'LtH'){
            return filteredData().sort((a,b) => a.price - b.price)
        }
        else if(price === 'HtL'){
            return filteredData().sort((a,b) => b.price - a.price)
        }
        return filteredData();
    }



    // ==============//


   const styles = {
        margin:'20px 30px',
        display:'flex',
        justifyContent:'space-evenly'
    }
    
  return (
    <div>
      <h2>Menu list page</h2>
      <div className='filter-container'>
        <div className='div-1'>
            <h3>Filters</h3>
        </div>
        <div className='div-2'>
            <input type='text' placeholder='search here...' value={searchValue} onChange={searchItemHandler}/>
        </div>
        <div className='div-3'>
            <label><input type='checkbox' checked={isVeggie} onChange={vegItemHandler}/>Veg</label>
            <label><input type='checkbox' checked={isSpicy} onChange={spicyItemHandler}/>Spicy</label>
            <label><input type='radio' value={'LtH'} checked={price === 'LtH'} onChange={priceHandler}/>Sort(price) low to high</label>
            <label><input type='radio' value={'HtL'} checked={price === 'HtL'} onChange={priceHandler}/>Sort(price) high to low</label>
        </div>
        
      </div>
      <p>{isLoading && 'Loading item..'}</p>
      <div style={styles}>
        {getSortedFinalData().map((foodItem) => <MenuCard foodItem={foodItem} selectedItemToCart={selectedItemToCart} />)}
      </div>
    </div>
  )
}

export default MenuList
