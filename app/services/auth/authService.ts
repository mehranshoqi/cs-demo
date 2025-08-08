// services/authService.ts
import api from "./api";

interface RegisterRequestBody {
  type: "register";
  data: {
    email: string;
    f_name?: string;
    l_name?: string;
    d_name: string;
    pass: string;
  };
}

interface RegisterResponseData {
  type: "register";
  status: 0 | 1;
  data: string;
  // errorCode?: string; // Only on status=0, if needed, add specific error types
}

interface LoginRequestBody {
  type: "login";
  data: {
    email: string;
    pass: string;
    expire_in?: number;
  };
}

interface LoginResponseData {
  type: "login";
  status: 0 | 1;
  data: {
    display_name: string;
    token: string;
  };
  // errorCode?: string; // Only on status=0
}

interface LogoutRequestBody {
  type: "logout";
  data: {
    token: string;
  };
}

interface LogoutResponseData {
  type: "logout";
  status: 0 | 1;
  data: string;
}

interface PassRecoveryRequestBody {
  type: "passRecovery";
  data: {
    email: string;
  };
}

interface PassRecoveryResponseData {
  type: "passRecovery";
  status: 0 | 1;
  data: {
    id: number;
    token: string;
  };
}

interface GetProfileRequestBody {
  type: "getProfile";
  data: {
    token: string;
  };
}

interface GetProfileResponseData {
  type: "getProfile";
  status: 0 | 1;
  data: {
    balance: string;
    created_at: string;
    display_name: string;
    email: string;
    first_name: string;
    id: number;
    last_name: string;
    password: string;
    referred_by: string | null;
    steam_id: string | null;
  };
  error?: string;
}

interface UpdateProfileRequestBody {
  type: "updateProfile";
  data: {
    token: string;
    display_name: string;
    first_name: string;
    last_name: string;
    steam_id: string | null;
  };
}

interface UpdateProfileResponseData {
  type: "updateProfile";
  status: 0 | 1;
  data: string;
}

interface PassResetRequestBody {
  type: "passReset";
  data: {
    pass: string;
    token: string;
  };
}

interface PassResetResponseData {
  type: "passReset";
  status: 0 | 1;
  data: string;
}

interface SocialLoginRequestBody {
  type: "socialLogin";
  data: {
    provider: "steam" | "google" | "discord";
    token: string;
    expire_in?: number;
    meta: {
      display_name: string;
      avatar?: string;
    };
  };
}

interface SocialLoginResponseData {
  type: "socialLogin";
  status: 0 | 1;
  data: {
    display_name: string;
    token: string;
  };
  error?: string;
}

const AuthService = {
  register: (
    email: string,
    d_name: string,
    pass: string,
    f_name?: string,
    l_name?: string
  ) => {
    const requestBody: RegisterRequestBody = {
      type: "register",
      data: {
        email,
        d_name,
        pass,
        f_name: f_name || "-",
        l_name: l_name || "-",
      },
    };
    return api.post<RegisterResponseData>("", requestBody);
  },

  login: (email: string, pass: string, expire_in?: number) => {
    const requestBody: LoginRequestBody = {
      type: "login",
      data: {
        email,
        pass,
        expire_in: expire_in || 60,
      },
    };
    return api.post<LoginResponseData>("", requestBody);
  },

  logout: (token: string) => {
    const requestBody: LogoutRequestBody = {
      type: "logout",
      data: {
        token,
      },
    };
    return api.post<LogoutResponseData>("", requestBody);
  },

  passRecovery: (email: string) => {
    const requestBody: PassRecoveryRequestBody = {
      type: "passRecovery",
      data: {
        email,
      },
    };
    return api.post<PassRecoveryResponseData>("", requestBody);
  },

  getProfile: (token: string) => {
    const requestBody: GetProfileRequestBody = {
      type: "getProfile",
      data: {
        token,
      },
    };
    return api.post<GetProfileResponseData>("", requestBody);
  },

  updateProfile: (
    token: string,
    display_name: string,
    first_name: string,
    last_name: string,
    steam_id: string | null
  ) => {
    const requestBody: UpdateProfileRequestBody = {
      type: "updateProfile",
      data: {
        token,
        display_name,
        first_name,
        last_name,
        steam_id,
      },
    };
    return api.post<UpdateProfileResponseData>("", requestBody);
  },

  passReset: (pass: string, token: string) => {
    const requestBody: PassResetRequestBody = {
      type: "passReset",
      data: {
        pass,
        token,
      },
    };
    return api.post<PassResetResponseData>("", requestBody);
  },

  socialLogin: (
    provider: "steam" | "google" | "discord",
    token: string,
    display_name: string,
    avatar?: string,
    expire_in?: number
  ) => {
    const requestBody: SocialLoginRequestBody = {
      type: "socialLogin",
      data: {
        provider,
        token,
        expire_in: expire_in || 60,
        meta: {
          display_name,
          avatar,
        },
      },
    };
    return api.post<SocialLoginResponseData>("", requestBody);
  },
};

export default AuthService;
