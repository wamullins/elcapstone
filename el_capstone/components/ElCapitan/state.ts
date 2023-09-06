import {create} from "zustand"

interface Point {
    x: number
    y: number
    z: number
}

interface State {
    selected: any
    collection: any
    camera: {
        position:Point
        target: Point
    }
    time: "day" |"night"
}

const useState = create<State>( (set) => ({

}))
