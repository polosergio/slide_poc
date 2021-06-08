import { Element, useEditor } from '@craftjs/core';
import { Tooltip } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

import SquareSvg from '../public/icons/toolbox/container.svg';
import TypeSvg from '../public/icons/toolbox/text.svg';
import RectSvg from '../public/icons/toolbox/rectangle.svg';
import { Container } from './Container';
import { Row } from './Row';
import { Text } from './Text';

const ToolboxDiv = styled.div<{ enabled: boolean }>`
  transition: 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  ${(props) => (!props.enabled ? `width: 0;` : '')}
  ${(props) => (!props.enabled ? `opacity: 0;` : '')}
`;

const Item = styled.a<{ move?: boolean }>`
  svg {
    width: 22px;
    height: 22px;
    fill: #707070;
  }
  ${(props) =>
    props.move &&
    `
    cursor: move;
  `}
`;

export const Toolbox = () => {
  const {
    enabled,
    connectors: { create },
  } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <ToolboxDiv
      enabled={enabled && enabled}
      className="toolbox transition w-12 h-full flex flex-col bg-white"
    >
      <div className="flex flex-1 flex-col items-center pt-3">
        <div
          ref={(ref) =>
            create(
              ref,
              <Element
                canvas
                is={Container}
                background={{ r: 78, g: 78, b: 78, a: 1 }}
                color={{ r: 0, g: 0, b: 0, a: 1 }}
              ></Element>
            )
          }
        >
          <Tooltip title="Container" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <SquareSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Text fontSize="12" textAlign="left" text="Sample text" />)
          }
        >
          <Tooltip title="Text" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <TypeSvg />
            </Item>
          </Tooltip>
        </div>
        <div
          ref={(ref) =>
            create(ref, <Element canvas is={Row}></Element>)
          }
        >
          <Tooltip title="Row" placement="right">
            <Item className="m-2 pb-2 cursor-pointer block" move>
              <RectSvg />
            </Item>
          </Tooltip>
        </div>
      </div>
    </ToolboxDiv>
  );
};
