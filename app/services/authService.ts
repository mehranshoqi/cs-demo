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
};

export default AuthService;
