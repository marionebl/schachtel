import React from 'react'
import ReactDOM, {render} from 'react-dom' // eslint-disable-line no-unused-vars
import SyntaxHighlighter from 'react-syntax-highlighter'
import { github } from 'react-syntax-highlighter/dist/styles'

import {Grid, SubGrid, Column} from '../src'
const app = document.getElementById('app')
import './style.css'


const codeExamples = [
  `<Column handheld={4} tablet={6}>
  <SubGrid>SubGrids have no gutter </SubGrid>
  <SubGrid>I am a subgrid with 4 columns. </SubGrid>
  <SubGrid>On tablets and above I have 6 columns. </SubGrid>
  <SubGrid>
    <Column handheld={6}>
      I am requesting 6 columns but will only get 4
      until more are available.
    </Column>
    <Column handheld={12}>
      If my parents allowed it, I would be 12 units wide.
    </Column>
  </SubGrid>
</Column>`
]

const App = () => (
  <div>
    <Grid el='header'>
      <Column el='h1' handheld={4} tablet={3}>schachtel</Column>
      <Column handheld={5} desktop={9} el='h2'>The shallow grid with infinite depth.</Column>
    </Grid>
    <Grid el='main'>
      <Column el='h1' handheld={12}>Why "schachtel"?</Column>
      <Column handheld={8}>
        I wanted a shallow grid. A grid that did not require me to live with
        endless and useless DOMnodes just make that layout work.
        <br/>
        I have always used grids and written them myself because of different reasons.
        With schachtel I wanted to make a grid that does not care about the nesting.
        If you define a <code>Column</code> to be <code>2</code> unit wide, it will always be <code>2</code> unit wide.
        At different breakpoints the number of columns change (usually: 4-8-12).
        <br/>
        <h4>This mechanism is based on the oldschool 960-grid logic.</h4>
        1 col = 80px.
        <br/>
        12 col = 960px.
        <br/>
        <h4>Therefore</h4>
        4 col = 320px. (snap to next at 400)
        <br/>
        8 col = 640px. (snap to next at 720)
        <br/>
        12 col = 960px. (snap to full at 1040)
        <br/>
        <p>
          This grid uses <code>flexbox</code> and is fully fluid and responsive.
          <br/>
          Everything is adjustable but don't expect the usual grid behaviour.
          <br/>
          SubGrids define a subgrid, which is then split into the currently available columns.
        </p>
        <h5>So instead of defining something like this</h5>
        <pre>
          .col-6 // expect 50% of parent = 6{'\n'}
          {'  '}.col-6 // expect 50% of parent = 3{'\n'}
          {'  '}.col-6 // expect 50% of parent = 3{'\n'}
        </pre>
        <h5>You should expect this model</h5>
        <pre>
          .col-6 // = 6{'\n'}
          {'  '}.col-3 // = 3{'\n'}
          {'  '}.col-3 // = 3{'\n'}
        </pre>

        <h4>Example is rendered below</h4>
        <SyntaxHighlighter language='xml' style={github}>{codeExamples[0]}</SyntaxHighlighter>
        <SubGrid>
          <Column handheld={4} tablet={6}>
            <SubGrid>SubGrids have no gutter </SubGrid>
            <SubGrid>I am a subgrid with 4 columns. </SubGrid>
            <SubGrid>On tablets and above I have 6 columns. </SubGrid>
            <SubGrid>
              <Column handheld={6}>
                I am requesting 6 columns but will only get 4
                until more are available.
              </Column>
              <Column handheld={12}>
                If my parents allowed it, I would be 12 units wide.
              </Column>
            </SubGrid>
          </Column>
        </SubGrid>
      </Column>
      <Column handheld={8} desktop={4} el='aside'>
        <h3>Sidebar</h3>
      </Column>
    </Grid>
    <Grid el='footer'>
      <Column handheld={12} el='h3'>
        Footer
      </Column>
    </Grid>
  </div>
)

render(<App/>, app)
