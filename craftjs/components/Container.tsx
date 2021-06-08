import React from 'react';
import { useNode } from '@craftjs/core';

const defaultProps = {
  height: '200px',
  width: '200px',
};

export const Container = (props) => {
  props = {
    ...defaultProps,
    ...props,
  };
  const {
    children,
  } = props;
  const { connectors: { connect, drag }} = useNode();
  return (
    <div
      ref={dom => connect(drag(dom))}
      style={{
        height: '200px',
        width: '200px',
        verticalAlign: 'top',
        display: 'inline-block',
        border: '1px solid black',
      }}
    >
      {children}
    </div>
  );
};

Container.craft = {
  displayName: 'Container',
  props: defaultProps,
  rules: {
    canDrag: () => true,
  }
};
