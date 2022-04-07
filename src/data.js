import { v4 as uuid } from "uuid"
const user = {
    name: "Bruno Pontes",
    username: "brunopontes",
    img: "https://avatars.githubusercontent.com/u/53492661?v=4",
    id: uuid(),
}

export function getPost(){
    return {
        id: uuid(),
        user: user,
        text: "Olá Mundo!",
        img: "https://img.wattpad.com/a00e69f067025077ad0a8cd70fe531ce3ac681a9/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f634c43346c326936624e344572673d3d2d33372e313537643266613130633131306239373436333835393035363133362e6a7067?s=fit&w=720&h=720",
        like: 1,
        comments: [{
            id: uuid(),
            user: user,
            text: "Top!"
        },{
            id: uuid(),
            user: user,
            text: "@bruno"
        }]
    }
}