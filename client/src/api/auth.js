import api from '@/api'

export default {
  login (email, password) {
    return api().post('graphql', {
      query: `
        query LoginUser($input: LoginInput!) {
          login(input: $input) {
            token
          }
        }
      `,
      variables: {
        input: {
          email,
          password
        }
      }
    })
  },
  users () {
    return api().post('graphql', {
      query: `{
        users {
          _id
          name
        }
      }`
    })
  }
}
