import React from 'react'

export const ColumnToggle = (props) => {
  const onToggle = (e) => {
    props.onToggle?.(e.currentTarget.name, e.currentTarget.checked);
  }

  return (
    <div className="toggle-columns">
      <h3>Filters: </h3>
      {
        Object.keys(props.toggles).map((toggle, index) => {
          return (
            <div className="toggle" key={index}>
              <label htmlFor={toggle}>
                {toggle}
              </label>
              <input
                id={toggle}
                name={toggle}
                type="checkbox"
                onChange={onToggle}
                checked={props.toggles[toggle]}
              />
            </div>)
        })
      }
    </div>
  );
}
