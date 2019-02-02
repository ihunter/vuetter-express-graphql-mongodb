import api from '@/api'

export default {
  index () {
    return api().post('graphql', {
      query: `{
        vueets {
          _id
          content
          author {
            _id
            name
          }
        }
      }`
    })
  },
  post (input) {
    return api().post('graphql', {
      query: `
        mutation CreateVueet($input: VueetInput!) {
          createVueet(input: $input) {
            _id
            content
            author {
              _id
              name
            }
          }
        }
      `,
      variables: {
        input
      }
    })
  }
}
