import {describe, expect, it} from 'bun:test'
import {isLowerCamelCaseCddlFileName} from '../src/helpers'

describe('isLowerCamelCaseCddlFileName', () => {
  it('returns true for valid lowerCamelCase CDDL file names', () => {
    expect(isLowerCamelCaseCddlFileName('mySchema.cddl')).toBe(true)
    expect(isLowerCamelCaseCddlFileName('simpleExample.cddl')).toBe(true)
    expect(isLowerCamelCaseCddlFileName('a1TestFile.cddl')).toBe(true)
  })

  it('returns false for non-lowerCamelCase CDDL file names', () => {
    expect(isLowerCamelCaseCddlFileName('MySchema.cddl')).toBe(false)
    expect(isLowerCamelCaseCddlFileName('simple_example.cddl')).toBe(false)
    expect(isLowerCamelCaseCddlFileName('123invalid.cddl')).toBe(false)
    expect(isLowerCamelCaseCddlFileName('test-.cddl')).toBe(false)
  })

  it('returns false for files with incorrect extensions', () => {
    expect(isLowerCamelCaseCddlFileName('validFile.json')).toBe(false)
    expect(isLowerCamelCaseCddlFileName('anotherValidFile.txt')).toBe(false)
    expect(isLowerCamelCaseCddlFileName('noExtension')).toBe(false)
  })

  it('returns false for empty or null strings', () => {
    expect(isLowerCamelCaseCddlFileName('')).toBe(false)
    expect(isLowerCamelCaseCddlFileName(' ')).toBe(false)
  })
})
