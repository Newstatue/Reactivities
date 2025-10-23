import { Box, Button, Typography } from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router";

export default function NotFound() {
    const navigate = useNavigate();

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                gap: 2,
                py: 8,
                px: 2,
            }}
        >
            <Typography variant="h1" sx={{ fontSize: { xs: 64, sm: 96 }, fontWeight: 700 }}>
                404
            </Typography>

            <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
                页面未找到
            </Typography>

            <Typography color="text.secondary" sx={{ maxWidth: 600 }}>
                抱歉，我们无法找到你要访问的页面。请检查你输入的地址是否正确，或使用下面的操作返回。
            </Typography>

            <Box sx={{ display: 'flex', gap: 1, mt: 2 }}>
                <Button
                    variant="outlined"
                    startIcon={<ArrowBackIcon />}
                    onClick={() => navigate(-1)}
                >
                    返回上一页
                </Button>

                <Button
                    variant="contained"
                    startIcon={<HomeIcon />}
                    onClick={() => navigate('/')}
                >
                    返回首页
                </Button>
            </Box>
        </Box>
    )
}
