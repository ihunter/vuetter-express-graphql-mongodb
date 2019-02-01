import api from '@/api'

export default {
  login (payload) {
    return api().post('graphql', {
      query: `
        query LoginUser($input: LoginInput!) {
          login(input: $input) {
            token
            user {
              name
              email
              vueets {
                _id
              }
              following {
                _id
              }
              followers {
                _id
              }
            }
          }
        }
      `,
      variables: {
        input: payload
      }
    })
  }
}
