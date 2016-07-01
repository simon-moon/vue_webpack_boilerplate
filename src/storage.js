import Contentful from 'contentful'
import { EventEmitter } from 'events'
import { Promise } from 'es6-promise'

const api = Contentful.createClient({
  space: 'qapiefbag42a',
  accessToken: '728705005e5a5c75e11799655cf5c1f13a241fb22e27abf0cf15282fa04e1823'
})

const storageCache = Object.create(null)

const storage = new EventEmitter()

export default storage

storage.getEntry = (id, includeLevel, sortOrder, contentType) => {
  return new Promise((resolve, reject) => {
    if (storageCache[id]) {
      resolve(storageCache[id])
    } else {
      api
      .getEntries({'sys.id': id, 'include': includeLevel, 'order': sortOrder, 'content_type': contentType})
      .then((entry) => {
        var returnEntry = {'items': entry.items[0].fields}
        if (entry.includes) {
          returnEntry = {'items': entry.items[0].fields, 'includes': entry.includes}
        }
        const result = storageCache[id] = returnEntry
        resolve(result)
      }, reject)
    }
  })
}

storage.getEntries = (ids, includeLevel) => {
  const entries = ids.map(this.getEntry)
  const results = new Promise.All(entries)
  results.then(results => {
    return results
  })
}
