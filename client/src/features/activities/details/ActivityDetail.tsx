import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type Props = {
    activity: Activity
    cancelSelectActivity: () => void
    openForm: (id: string) => void
}

export default function ActivityDetail({ activity, cancelSelectActivity, openForm }: Props) {
    return (
        <Card sx={{ borderRadius: 3 }}>
            <CardMedia component="img" src={`/images/categoryImages/${activity.category}.jpg`} />
            <CardContent>
                <Typography fontSize="1rem">{activity.title}</Typography>
                <Typography variant="subtitle1" fontWeight="light">{activity.date}</Typography>
                <Typography variant="body1">{activity.description}</Typography>
            </CardContent>
            <CardActions>
                <Button onClick={() => openForm(activity.id)} color="primary">编辑</Button>
                <Button onClick={cancelSelectActivity} color="secondary">取消</Button>
            </CardActions>
        </Card>
    )
}