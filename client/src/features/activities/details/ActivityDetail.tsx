import { Box, Button, Card, CardActions, CardContent, CardMedia, CircularProgress, Typography } from "@mui/material"
import { useActivities } from "../../../lib/hooks/useActivities"

type Props = {
    selectedActivity: Activity
    cancelSelectActivity: () => void
    openForm: (id: string) => void
}

export default function ActivityDetail({ selectedActivity, cancelSelectActivity, openForm }: Props) {

    const { activities } = useActivities();
    const activity = activities?.find(x => x.id === selectedActivity.id);

    if (!activity)
        return
    <>
        <Box display="flex" justifyContent="center" alignItems="center" minHeight="40vh">
            <CircularProgress />
        </Box>
    </>;


    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component="img" src={`/images/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <Typography fontSize="1rem">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight="light">
                    {new Intl.DateTimeFormat('zh-CN', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    }).format(new Date(activity.date))}
                </Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openForm(activity.id)} color="primary">编辑</Button>
                <Button onClick={cancelSelectActivity} color="secondary">取消</Button>
            </CardActions>
        </Card>
    )
}