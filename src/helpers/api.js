
const api = "https://fcctop100.herokuapp.com/api/fccusers/top"

export const get30 = () =>
  fetch(`${api}/recent`)
    .then(res => res.json())

export const getAllTime = () =>
    fetch(`${api}/alltime`)
      .then(res => res.json())
