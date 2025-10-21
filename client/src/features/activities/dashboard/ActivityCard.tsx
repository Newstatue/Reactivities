import { Box, Button, Card, CardActions, CardContent, Chip, Typography } from "@mui/material"

type Props = {
    activity: Activity
    selectActivity: (id: string) => void
    deleteActivity: (id: string) => void
}


export default function ActivityCard({ activity, selectActivity, deleteActivity }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardContent sx={{ pt: 2, pb: 1 }}>
                <Typography fontSize="large">{activity.title}</Typography>
                <Typography sx={{ color: "text.secondary", mb: 1 }} ></Typography>
                <Typography variant="body2">{activity.date}</Typography>
                <Typography variant="subtitle1">{activity.city} / {activity.venue}</Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "space-between", pb: 2, pt: 0 }}>
                <Chip label={activity.category} variant="outlined" />
                <Box>
                    <Button onClick={() => deleteActivity(activity.id)} size="small" color="error">删除</Button>
                    <Button onClick={() => selectActivity(activity.id)} size="small">预览</Button>
                </Box>
            </CardActions>
        </Card >
    )
}
