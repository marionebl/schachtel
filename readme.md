# schachtel

The shallow grid with ininite depth

[Documentation](https://pixelass.github.io/schachtel/)

[![npm](https://img.shields.io/npm/v/schachtel.svg)](https://www.npmjs.com/package/schachtel)
[![Coveralls branch](https://img.shields.io/coveralls/pixelass/schachtel.svg)](https://coveralls.io/github/pixelass/schachtel)
[![bitHound Overall Score](https://www.bithound.io/github/pixelass/schachtel/badges/score.svg)](https://www.bithound.io/github/pixelass/schachtel)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  
[![Travis](https://img.shields.io/travis/pixelass/schachtel.svg)](https://travis-ci.org/pixelass/schachtel)
[![David](https://img.shields.io/david/pixelass/schachtel.svg)](https://david-dm.org/pixelass/schachtel)
[![David](https://img.shields.io/david/dev/pixelass/schachtel.svg)](https://david-dm.org/pixelass/schachtel#info=devDependencies&view=table)  
[![GitHub license](https://img.shields.io/github/license/pixelass/schachtel.svg)](https://github.com/pixelass/schachtel/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pixelass/schachtel.svg)](https://github.com/pixelass/schachtel/issues)
[![GitHub forks](https://img.shields.io/github/forks/pixelass/schachtel.svg)](https://github.com/pixelass/schachtel/network)
[![GitHub stars](https://img.shields.io/github/stars/pixelass/schachtel.svg)](https://github.com/pixelass/schachtel/stargazers)


> When you put "Schachteln" in a "Schachtel" you "schachtel Schachteln"  
> When you put "boxes" in a "box" you "box boxes"

[English - German translation](http://www.dict.cc/?s=schachteln)

```shell
npm i schachtel
```

```jsx
import React from 'react'
import {Grid, SubGrid, Column} from 'schachtel'

const Layout = props => (
  <Grid>
    <Column el='section'> First Column </Column>
    <Column el='aside'> second Column </Column>
    <Column>
      <SubGrid>
        No gutter
      </SubGrid>
      <SubGrid>
        <Column handheld={4} tablet={8}> Same grid as root level</Column>
      </SubGrid>
    </Column>
  </Grid>
)
```

```jsx
import React from 'react'
import {Grid, SubGrid, Column} from 'schachtel'

const Layout = props => (
  <Grid>
    <Column handheld={4} tablet={8} desktop={12}> Always span fullWidth</Column>
    <Column handheld={12}> shortcut fullWidth </Column>
  </Grid>
)
```

```jsx
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
```
