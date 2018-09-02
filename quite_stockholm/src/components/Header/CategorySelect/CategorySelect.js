import React, { Component } from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './CategorySelect.css';
// list of items
const list = [
  { name: 'Fika' },
  { name: 'Äta' },
  { name: 'AW' },
  { name: 'Läsa/Skriva' },
  { name: 'Bada' }
];

// One item component
// selected prop will be passed
const MenuItem = ({ text, selected }) => {
  return (
    <div
      className="menu-item"
    >
      {text}
    </div>
  );
};

// All items component
// Important! add unique key
export const Menu = (list) => list.map(el => {
  const { name } = el;

  return (
    <MenuItem
      text={name}
      key={name}
    />
  );
});


const Arrow = ({ text, className }) => {
  return (
    <div
      className={className}
    >{text}</div>
  );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });

class CategorySelect extends Component {
  state = {
    selected: 'Fika'
  };

  onSelect = key => {
    this.setState({ selected: key });
    this.props.selectCategory(key)
  }


  render() {
    const { selected } = this.state;
    // Create menu from items
    const menu = Menu(list, selected);

    return (
      <div className="CategorySelect">
        <ScrollMenu
          data={menu}
          arrowLeft={ArrowLeft}
          arrowRight={ArrowRight}
          selected={selected}
          onSelect={this.onSelect}
          translate="0"
          itemClassActive ="active"
        />
      </div>
    );
  }
}

export default CategorySelect
