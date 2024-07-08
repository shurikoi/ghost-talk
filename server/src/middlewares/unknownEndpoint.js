import ApiError from '../exceptions/ApiError.js'

const unknownEndpoint = () => {
  throw ApiError.NotFound('unknown endpoint')
}

export default unknownEndpoint
