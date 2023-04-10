import { makeAutoObservable } from "mobx"

export function createDataStore() {
  return makeAutoObservable({
    view: null,
    setView(view) {
      this.view = view
    },
    map: null,
    setMap(map) {
      this.map = map
    },
  })
}
