import { GlobalRegistrator } from '@happy-dom/global-registrator'
import { beforeAll, describe, it } from 'bun:test'
import { render } from 'solid-js/web'
import { citrus } from '../lucide/server'
import { Window } from 'happy-dom'
import { Icon } from '../src/icon'

GlobalRegistrator.register({
  url: 'http://localhost:3000',
  height: 1000,
  width: 1000,
})

const App = () => {
  return <Icon path={citrus} />
}

describe('Icon', () => {
  beforeAll(() => {
    document.body.innerHTML = '<div id="app"></div>'
    render(() => <App />, document.getElementById('app'))
  })
  it('should render an icon', () => {
    const icon = document.querySelector('svg')
    console.log(document.body.innerHTML)
  })
})
