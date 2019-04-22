import { CardViewMode } from '@devhub/core'
import * as selectors from '../redux/selectors'
import { useReduxState } from './use-redux-state'

function getCardViewMode(cardWidth: number): CardViewMode {
  return cardWidth >= 650 ? 'compact' : 'expanded'
}

function getEnableCompactLabels(
  cardWidth: number,
  repoTableColumnWidth: number,
): boolean {
  if (getCardViewMode(cardWidth) !== 'compact') return false
  return cardWidth - repoTableColumnWidth >= 850
}

export function useAppViewMode() {
  const appViewMode = useReduxState(selectors.appViewModeSelector)

  return {
    appViewMode,
    getCardViewMode,
    getEnableCompactLabels,
  }
}
