import React from 'react'
import ReactDOM, {render} from 'react-dom' // eslint-disable-line no-unused-vars
import {Grid, Row, Column} from '../src'
const app = document.getElementById('app')
import styles from './style.css'

const App = () => (
  <div>
    <Grid className={styles.grid}>
      <Column className={styles.column}
              handheld={2}
              tablet={6}>
        <Row className={styles.row}>
          <Column className={styles.column}
                  handheld={2}
                  tablet={3}>
            <Row>
              <Column className={styles.column}
                      handheld={2}
                      tablet={3}> 2:3 </Column>
              <Column className={styles.column}
                      handheld={1}
                      tablet={2}> 1:2 </Column>
              <Column className={styles.column}
                      handheld={1}> 1 </Column>
            </Row>
          </Column>
          <Column className={styles.column}
                  handheld={1}
                  tablet={2}> 1:2 </Column>
          <Column className={styles.column}
                  handheld={1}> 1 </Column>
          <Column className={styles.column}
                  handheld={2} tablet={6}> 1 </Column>
        </Row>
      </Column>
      <Column className={styles.column}
              handheld={2}
              tablet={2}
              desktop={6}>
        <Row>
          <Column className={styles.column}
                  handheld={2}
                  desktop={3}> 2:2:3 </Column>
          <Column className={styles.column}
                  handheld={1}
                  desktop={2}> 1:1:2 </Column>
          <Column className={styles.column}
                  handheld={1}> 1 </Column>
        </Row>
      </Column>
    </Grid>
  </div>
)

render(<App/>, app)
