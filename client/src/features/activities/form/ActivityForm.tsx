import { Box, Button, Paper, TextField, Typography, CircularProgress } from "@mui/material";
import type { FormEvent } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";
import { useNavigate, useParams } from "react-router";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default function ActivityForm() {
    const { id } = useParams();

    const { updateActivity, createActivity, activity, isLoadingActivity } = useActivities(id);

    const navigate = useNavigate();


    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: { [key: string]: FormDataEntryValue } = {}
        formData.forEach((value, key) => {
            data[key] = value;
        });

        data.latitude = (data.latitude || "0.0") as string; // Default to "0.0" if undefined
        data.longitude = (data.longitude || "0.0") as string; // Default to "0.0" if undefined

        if (activity) {
            data.id = activity.id;
            await updateActivity.mutateAsync(data as unknown as Activity);
            navigate(`/activities/${activity.id}`);
        } else {
            createActivity.mutate(data as unknown as Activity, {
                onSuccess: (id) => {
                    navigate(`/activities/${id}`);
                },
            });
        }
    }

    if (isLoadingActivity) return <LoadingComponent />

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography fontSize="1rem" gutterBottom color="primary">
                {activity?"编辑活动":"创建活动"}
            </Typography>
            <Box component="form" onSubmit={handleSubmit} display="flex" flexDirection="column" gap={3}>
                <TextField name="title" label="标题" defaultValue={activity?.title} />
                <TextField name="description" label="描述" defaultValue={activity?.description} multiline rows={3} />
                <TextField name="category" label="分类" defaultValue={activity?.category} />
                <TextField name="date" label="日期" type="datetime-local"
                    defaultValue={activity?.date
                        ? activity.date.slice(0, 16)
                        : new Date().toISOString().slice(0, 16)
                    }
                    slotProps={{ inputLabel: { shrink: true } }} />
                <TextField name="city" label="城市" defaultValue={activity?.city} />
                <TextField name="venue" label="地点" defaultValue={activity?.venue} />
                <Box display="flex" justifyContent="end" gap={3}>
                    <Button onClick={() => { }} color="inherit">取消</Button>
                    <Button
                        type="submit"
                        color="success"
                        disabled={updateActivity.isPending || createActivity.isPending}
                        startIcon={updateActivity.isPending || createActivity.isPending ? <CircularProgress size={20} color="inherit" /> : null}
                    >
                        {updateActivity.isPending || createActivity.isPending ? '提交中...' : '提交'}
                    </Button>
                </Box>
            </Box>
        </Paper >
    )
}