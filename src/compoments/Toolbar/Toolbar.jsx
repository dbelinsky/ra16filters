/* eslint-disable react/prop-types */
/* eslint-disable prettier/prettier */
export function Toolbar(props) {
  return (
    <ul className='toolbar'>
      {props.filters.map((el) =>
          <li
            onClick={props.onSelectFilter}
            className={`toolbar__item ${props.selected === el ? 'toolbar__item_selected' : ''}`}
            key={el}
          >
            {el}
          </li>
        )
      }
    </ul>
  );
}
