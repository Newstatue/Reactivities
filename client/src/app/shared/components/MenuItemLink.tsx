import { MenuItem } from "@mui/material";
import type { ReactNode } from "react";
import { NavLink } from "react-router-dom"; // 注意用 react-router-dom

interface MenuItemLinkProps {
    children: ReactNode;
    to: string;
}

export default function MenuItemLink({ children, to }: MenuItemLinkProps) {
    return (
        <MenuItem
            component={NavLink}
            to={to}
            sx={{
                display: "flex",
                alignItems: "center",
                gap: 1, // 图标与文字间距
                fontSize: "small", // small
                fontWeight: "bold",
                color: "inherit",
                textDecoration: "none",
                transition: "all 0.2s ease",
                "&:hover": {
                    bgcolor: "action.hover", // 鼠标悬停背景
                    color: "primary.main",   // 悬停文字颜色
                },
                "&.active": {
                    bgcolor: "action.selected", // 激活状态背景
                    color: "secondary.main",    // 激活状态文字颜色
                },
            }}
        >
            {children}
        </MenuItem>
    );
}
