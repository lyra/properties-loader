import compiler from './compiler.js'

function getOutput(stats) {
  return stats.toJson({ source: true }).modules[0].source
}

describe('Load a properties file and outputs a JSON module', () => {
  test('Basic example', async () => {
    const stats = await compiler('example-1.properties')
    expect(getOutput(stats)).toMatchSnapshot()
  })

  test('Example with namespaces', async () => {
    const stats = await compiler('example-2.properties', { namespaces: true })
    expect(getOutput(stats)).toMatchSnapshot()
  })

  test('Example with namespaces and sections', async () => {
    const stats = await compiler('example-3.properties', { namespaces: true, sections: true })
    expect(getOutput(stats)).toMatchSnapshot()
  })
})
