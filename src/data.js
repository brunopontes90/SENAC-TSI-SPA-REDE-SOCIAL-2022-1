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
        img: "https://icapps.com/uploads/site/what-is-the-right-background-for-a-react-native-developer/_800x418_crop_center-center_82_none/React_Native_image.jpg?mtime=1594715542",
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