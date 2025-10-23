import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { Link, useNavigate, useParams } from "react-router";
import { useActivities } from "../../../lib/hooks/useActivities";
import NotFound from "../../../app/shared/components/NotFound";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ActivityDetail() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { activity, isLoadingActivity } = useActivities(id);

    if (isLoadingActivity) return <LoadingComponent />

    if (!activity) return <NotFound />;

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
                <Button component={Link} to={`/activities/${activity.id}/edit`} color="primary">编辑</Button>
                <Button onClick={() => navigate("/activities")} color="secondary">取消</Button>
            </CardActions>
        </Card>
    )
}