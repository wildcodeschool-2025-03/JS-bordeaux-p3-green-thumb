import { useUserContext } from "../context/UserContext";

export function useFetchWithAuth() {
  const { user } = useUserContext();

  const fetchWithAuth = async (
    input: RequestInfo | URL,
    init: RequestInit = {},
  ): Promise<Response> => {
    const headers = new Headers(init.headers || {});

    if (user.token) {
      headers.set("Authorization", `Bearer ${user.token}`);
    }

    const modifiedInit: RequestInit = {
      ...init,
      headers,
    };

    return fetch(input, modifiedInit);
  };

  return fetchWithAuth;
}
