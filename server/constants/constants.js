export const STATUS_CODE = {
    success: 200,
    bad_request: 400,
    unauthorized: 401,
    server_error: 500,
  };

export const LANGUAGES = {
    english :"en"
}

export const REGEX = {
    username:/^[a-zA-Z0-9](_(?!(\.|_))|\.(?!(_|\.))|[a-zA-Z0-9]){6,18}[a-zA-Z0-9]$/,
    name:/^[A-Za-z]+(?:[ -][A-Za-z]+)*$/,
    password:/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
}

export const IMAGE_TYPES =["jpeg","png","gif","webp"]


