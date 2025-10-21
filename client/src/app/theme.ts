import { createTheme } from "@mui/material/styles";

// 官方深色主题：仅设置 palette.mode 为 'dark'，其余使用 MUI 默认暗色值
const theme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default theme;
