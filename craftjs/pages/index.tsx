import { Editor, Frame, Element } from '@craftjs/core';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';

import { Viewport } from '../components/Viewport';
import { RenderNode } from '../components/RenderNode';
import { Container } from '../components/Container';
import { Text } from '../components/Text';
import { Row } from '../components/Row';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'acumin-pro',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

const useStyles = makeStyles(() => ({
  root: {
    transform: 'translateY(20%)',
    width: '600px',
    height: '600px',
    backgroundColor: 'white',
    overflow: 'hidden',
    boxShadow: '1px 1px 1px 1px black',
    borderRadius: '1px',
  },
  block: {
    height: '200px',
    width: '200px',
    verticalAlign: 'top',
    display: 'inline-block',
    border: '1px solid black'
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <div style={{position: 'absolute', top: 50, left: 50, zIndex: 99}}>CraftJS</div>
      <div className="h-full h-screen">
        <Editor
          resolver={{
            Container, Row, Text
          }}
          enabled={false}
          onRender={RenderNode}
        >
          <Viewport>
            <Frame>
              <Element
                canvas
                is="div"
                className={classes.root}
                background={{ r: 255, g: 255, b: 255, a: 1 }}
                padding={['40', '40', '40', '40']}
                custom={{ displayName: 'App' }}
              >
                <Element
                  canvas
                  is={Row}
                >
                  <Text text="Sample text" />
                </Element>
                <Element
                  canvas
                  is={Row}
                >
                  <Element
                    canvas
                    is={Container}
                  >
                  </Element>
                  <Element
                    canvas
                    is={Container}
                  >
                  </Element>
                  <Element
                    canvas
                    is={Container}
                  >
                    <img src="https://via.placeholder.com/150" />
                  </Element>
                </Element>
              </Element>
            </Frame>
          </Viewport>
        </Editor>
      </div>
    </ThemeProvider>
  );
}

export default App;
