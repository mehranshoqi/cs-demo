// https://docs.main.cs2skin.com/errors/

export interface ErrorCode {
    code: number;
    message: string;
}

export const AUTH_ERROR_CODES: ErrorCode[] = [
    // 400 - Bad Request Errors
    {
        code: 1002,
        message: 'Invalid request format. Please check the data sent.'
    },
    {
        code: 1003,
        message: 'Invalid request. The \'data\' field must be a JSON object.'
    },
    {
        code: 1005,
        message: 'Email is required.'
    },
    {
        code: 1006,
        message: 'Email cannot be empty.'
    },
    {
        code: 1007,
        message: 'Password is required.'
    },
    {
        code: 1008,
        message: 'Password cannot be empty.'
    },
    {
        code: 1009,
        message: 'Password is too weak. Use at least 8 characters including numbers or symbols.'
    },
    {
        code: 1010,
        message: 'Password must be a text value.'
    },
    {
        code: 1011,
        message: 'Display name is required.'
    },
    {
        code: 1012,
        message: 'Display name cannot be empty.'
    },
    {
        code: 1016,
        message: 'Provider field is required.'
    },
    {
        code: 1017,
        message: 'Token is required.'
    },
    {
        code: 1020,
        message: 'Invalid Steam token.'
    },
    {
        code: 1023,
        message: 'Unsupported login provider.'
    },

    // 401 - Unauthorized Errors
    {
        code: 1001,
        message: 'Invalid access token. Please check your credentials.'
    },
    {
        code: 1024,
        message: 'Google login failed. Please try again.'
    },
    {
        code: 1025,
        message: 'Discord login failed. Please re-authorize your session.'
    },

    // 405 - Method Not Allowed
    {
        code: 1004,
        message: 'Method not allowed. Please use the correct HTTP verb.'
    },

    // 409 - Conflict Errors
    {
        code: 1015,
        message: 'This email is already registered. Please log in instead.'
    },

    // 500 - Internal Server Errors
    {
        code: 1014,
        message: 'Registration failed due to a database issue.'
    },
    {
        code: 1021,
        message: 'Failed to register user. Please try again.'
    },
    {
        code: 1022,
        message: 'Registration failed due to a database issue.'
    },
    {
        code: 209,
        message: 'Could not generate login token. Please try again.'
    },

    // 502 - Bad Gateway Errors
    {
        code: 1013,
        message: 'Registration failed due to a system error. Please try again later.'
    }
];

// Helper function to get error message by code
export const getErrorByCode = (code: number): ErrorCode | undefined => {
    return AUTH_ERROR_CODES.find(error => error.code === code);
};

// Helper function to get error message by code
export const getErrorMessageByCode = (code: number): string => {
    const error = getErrorByCode(code);
    return error ? error.message : 'An unexpected error occurred. Please try again.';
}; 