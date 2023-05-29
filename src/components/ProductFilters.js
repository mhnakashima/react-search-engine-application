import React from 'react'

export const ProductFilters = (props) => {

  const onPriceChange = (e) => {
    console.log(':::', e.target.name, e.target.value);
    props.onPriceChange?.(e.target.name, e.target.value)
  }

  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="minPrice">Min Price:</label>
      <input
        type="number"
        id="minPrice"
        name="minPrice"
        placeholder="Min price..."
        onChange={onPriceChange} />
      <label htmlFor="maxPrice">Max Price:</label>
      <input
        type="number"
        id="maxPrice"
        name="maxPrice"
        placeholder="Max price..."
        onChange={onPriceChange} />
    </div>
  )
}
