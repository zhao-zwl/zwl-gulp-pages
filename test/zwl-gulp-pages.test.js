import test from 'ava'
import zwlGulpPages from '..'

// TODO: Implement module test
test('<test-title>', t => {
  const err = t.throws(() => zwlGulpPages(100), TypeError)
  t.is(err.message, 'Expected a string, got number')

  t.is(zwlGulpPages('w'), 'w@zce.me')
  t.is(zwlGulpPages('w', { host: 'wedn.net' }), 'w@wedn.net')
})
