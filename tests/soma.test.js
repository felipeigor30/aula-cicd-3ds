import { describe, it, expect } from 'vitest'
import { soma } from '../src/soma.js'

describe('função soma', () => {
  it('deve somar 2 + 3 e retornar 5', () => {
    expect(soma(2, 3)).toBe(5)
  })
})
