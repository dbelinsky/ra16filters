import PropTypes from 'prop-types';

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

Toolbar.propTypes = {
  filters: PropTypes.arrayOf(PropTypes.string).isRequired,
  selected: PropTypes.string.isRequired,
  onSelectFilter: PropTypes.func.isRequired,
};

export default Toolbar;
