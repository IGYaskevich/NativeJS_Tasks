const videos = [
    {
        id: 65432445,
        title: "The Chamber"
    },
    {
        id: 675465,
        title: "Fracture"
    },
    {
        id: 70111470,
        title: "Die Hard"
    },
    {
        id: 654356453,
        title: "Bad Boys"
    }];

const convertArrayToObject = (videosList) => {
    return videosList.reduce((result, video) => {
        result[video.id] = video.title
        return result
    }, {})
}
