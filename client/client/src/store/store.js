// # lib
import { create } from "zustand";
import { persist } from "zustand/middleware";

// 엑세스 토큰 전역 상태 관리
const tokenStore = create(
  persist(
    (set) => ({
      accessToken: null,
      setAccessToken: (token) => {
        set({ accessToken: token });
      },
      resetToken: () => {
        set({ accessToken: null });
      },
    }),
    {
      name: "tokenStore",
    }
  )
);

export default tokenStore;
