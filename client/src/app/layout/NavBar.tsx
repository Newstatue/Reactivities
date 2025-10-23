import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { MenuItem, Typography } from '@mui/material';
import { Group } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';
import MenuItemLink from '../shared/components/MenuItemLink';


export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="fixed"
                color="transparent"
                enableColorOnDark
                elevation={6}
                sx={{
                    backgroundColor: (theme) => alpha(theme.palette.background.paper, 0.7),
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    borderBottom: 1,
                    borderColor: (theme) => alpha(theme.palette.divider, 0.5),
                    fontSize: 'small'
                }}
            >
                <Toolbar sx={{
                    minHeight: "44px !important",
                    px: 1,
                    display: "flex",
                    justifyContent: "space-between",
                }}>
                    {/* 左侧 Logo */}
                    <Box>
                        <MenuItemLink to="/">
                            <Group />
                            <Typography fontSize="medium" fontWeight="bold">
                                反应
                            </Typography>
                        </MenuItemLink>
                    </Box>

                    {/* 中间导航 */}
                    <Box sx={{ display: "flex" }}>
                        <MenuItemLink to="/activities" >活动</MenuItemLink>
                        <MenuItemLink to="/activities/new" >创建活动</MenuItemLink>
                    </Box>

                    {/* 右侧按钮 */}
                    <MenuItem sx={{ fontSize: "medium" }}>用户菜单</MenuItem>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
