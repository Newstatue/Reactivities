import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Button, MenuItem, Typography } from '@mui/material';
import { Group } from '@mui/icons-material';
import { alpha } from '@mui/material/styles';

type Props = {
    openForm: () => void
}


export default function ButtonAppBar({ openForm }: Props) {
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
                        <MenuItem sx={{ display: "flex", gap: 1 }}>
                            <Group fontSize="inherit" />
                            <Typography fontSize="inherit" fontWeight="bold">
                                反应
                            </Typography>
                        </MenuItem>
                    </Box>

                    {/* 中间导航 */}
                    <Box sx={{ display: "flex" }}>
                        <MenuItem sx={{ fontSize: "inherit" }}>活动</MenuItem>
                        <MenuItem sx={{ fontSize: "inherit" }}>新闻</MenuItem>
                        <MenuItem sx={{ fontSize: "inherit" }}>关于</MenuItem>
                    </Box>

                    {/* 右侧按钮 */}
                    <Button onClick={openForm} size="small" color="info">
                        创建活动
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
