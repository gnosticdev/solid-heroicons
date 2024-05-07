import { render } from '@solidjs/testing-library'
import { describe, expect, it } from 'bun:test'
import { academicCap } from '../outline/index'
import { Icon } from '../src/icon'

describe('Icon Components', () => {
  it('renders Solid icons correctly', () => {
    const { findByText } = render(() => <Icon path={academicCap} />)

    expect(findByText('M12 14h9v7h-9v-7z')).toBeTruthy()
    expect(findByText('Academic Cap')).toBeTruthy()
  })
})
