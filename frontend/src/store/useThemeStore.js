import { create } from 'zustand'

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("snapTalk-theme") || "coffee",
    setTheme: (theme) => {
        localStorage.setItem("snapTalk-theme", theme);
        set({ theme } );
    }
  
}))