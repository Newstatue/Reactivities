import { Box, CircularProgress, Typography } from "@mui/material";

type Props = {
    text?: string;
}

export default function LoadingComponent({ text = "加载中..." }: Props) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="40vh"
            flexDirection="column"
        >
            <CircularProgress />
            <Typography sx={{ mt: 2 }}>{text}</Typography>
        </Box>
    );
}
