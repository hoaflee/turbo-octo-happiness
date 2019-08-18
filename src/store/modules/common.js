// import moment from 'moment'
// import _ from 'lodash'

const state = {
  // homeNotify: {
  //   status: false,
  //   type: 'info',
  //   message: ''
  // }
}

const getters = {
  // getLastUpdate: state => updatedAt => {
  //   // let timeString = ''
  //   // const now = moment()
  //   // const startTime = moment(updatedAt)
  //   // updated to now
  //   // const period = now.diff(startTime, 'hours')
  //   // Ex: a few seconds ago
  //   // a minute ago
  //   // an hour ago
  //   let timeString = moment(updatedAt).fromNow()
  //   // if (period < 6) {
  //   //   timeString = moment(updatedAt).fromNow()
  //   // } else if (period > 6 && period < 240) {
  //   // // Ex: Yesterday at 2:30 AM
  //   // // Today at 2:30 AM
  //   //   timeString = moment(updatedAt).calendar()
  //   // } else {
  //   //   timeString = moment(updatedAt).format('MMMM Do YYYY, h:mm a')
  //   // }
  //   return timeString
  // },
  // getRandomAvatarUrl: () => {
  //   return randomAvtUrl();
  // },
  // getRandomImgUrl: state => (w,h) => {
  //   let url = 'https://picsum.photos/' + w + '/' + h + '?random=' +  Math.floor(Math.random() * 10 + 1);
  //   return url;
  // }
}

const mutations = {}

const actions = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
