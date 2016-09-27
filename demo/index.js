import React from 'react'
import ReactDOM, {render} from 'react-dom' // eslint-disable-line no-unused-vars
import {Grid, Row, Column} from '../src'
const app = document.getElementById('app')
import styles from './style.css'

const App = () => (
  <div>
    <Grid className={styles.grid} gutter={8}>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}></Column>
      <Column className={styles.column}
              tablet={2}></Column>
      <Column className={styles.column}
              tablet={2}></Column>
      <Column className={styles.column}
              handheld={2} desktop={6} full={8}></Column>
      <Column className={styles.column}
              handheld={4} tablet={2} desktop={6} full={4}>
        <Row className={styles.row}>
          <Column handheld={2} className={styles.column}>
            <Row className={styles.row}>
              <Column className={styles.column}></Column>
              <Column className={styles.column}></Column>
              <Column handheld={2} className={styles.column}></Column>
              <Column handheld={2} className={styles.column}></Column>
            </Row>
          </Column>
          <Column className={styles.column}></Column>
          <Column className={styles.column}></Column>
          <Column className={styles.column}></Column>
          <Column className={styles.column}></Column>
          <Column className={styles.column} desktop={3} full={1}></Column>
          <Column className={styles.column} desktop={3} full={1}></Column>
        </Row>
      </Column>
    </Grid>
  </div>
)

render(<App/>, app)
