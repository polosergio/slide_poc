import React from 'react';
import { RowSettings } from './RowSettings';
import { useNode, Element } from '@craftjs/core';

const defaultProps = {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  width: '100%',
  minHeight: '200px',
  height: 'auto',
  padding: ['0', '0', '0', '0'],
  margin: ['0', '0', '0', '0'],
  background: { r: 255, g: 255, b: 255, a: 1 },
  color: { r: 0, g: 0, b: 0, a: 1 },
};

export const Row = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
    minHeight,
    children,
    padding,
    margin,
    background,
    color
  } = props;

  const { connectors: {connect, drag} } = useNode();

  return (
    <div 
      ref={dom => connect(drag(dom))}
      style={{
        justifyContent,
        alignItems,
        width,
        height,
        minHeight,
        background: `rgba(${Object.values(background)})`,
        color: `rgba(${Object.values(color)})`,
        padding: `${padding[0]}px ${padding[1]}px ${padding[2]}px ${padding[3]}px`,
        margin: `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`,
      }}
    >
      {children}
    </div>
  );
};

Row.craft = {
  displayName: 'Row',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  },
  related: {
    toolbar: RowSettings
  }
};
