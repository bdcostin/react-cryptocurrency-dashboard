import React from 'react'
import styled from 'styled-components'
import { AppContext } from '../App/AppProvider'
import CoinTile from './CoinTile'

export const CoinGridStyle = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    grid-gap: 15px;
    margin-top: 40px;
`

function getLowerSectionCoins (coinList, filteredCoins) {
  return (filteredCoins && Object.keys(filteredCoins)) || Object.keys(coinList).slice(0, 100)
}

function getCoinsToDisplay (coinList, topSection, favorites, filterCoins) {
  return topSection ? favorites : getLowerSectionCoins(coinList, filterCoins)
}

export default function ({ topSection }) {
  return (
    <AppContext.Consumer>
      {({ coinList, favorites, filteredCoins }) => (
        <CoinGridStyle>
          {getCoinsToDisplay(coinList, topSection, favorites, filteredCoins).map(coinKey =>
            <CoinTile key={coinKey} topSection={topSection} coinKey={coinKey} />
          )}
        </CoinGridStyle>)}
    </AppContext.Consumer>
  )
}
