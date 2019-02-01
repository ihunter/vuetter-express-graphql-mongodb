import api from '@/api'

export default {
  index () {
    return api().post('graphql', {
      query: `{
        vueets {
          content
          author {
            name
          }
        }
      }`
    })
  }
}
