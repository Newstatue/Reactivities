import { Box, Button, Card, CardActions, CardContent, Chip, Typography, CircularProgress } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity: Activity
    selectActivity: (id: string) => void
}


export default function ActivityCard({ activity, selectActivity }: Props) {
    const { deleteActivity } = useActivities();

    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ pt: 2, pb: 1 }}>
                <Typography fontSize="large">{activity.title}</Typography>
                <Typography sx={{ color: "text.secondary", mb: 1 }} ></Typography>
                <Typography variant="body2">
                    {new Intl.DateTimeFormat('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format(new Date(activity.date))}
                </Typography>
                <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between", pb: 2, pt: 0 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box>
                    <Button onClick={() =>
                        deleteActivity.mutate(activity.id)}
                        disabled={deleteActivity.isPending}
                        size="small"
                        color="error"
                        startIcon={deleteActivity.isPending ? <CircularProgress size={16} color="inherit" /> : null}
                    >删除</Button>
                    <Button onClick={() => selectActivity(activity.id)} size="small">预览</Button>
                </Box>
            </CardActions>
        </Card >
    )
}
