import { Box, Button, Paper, TextField, Typography, CircularProgress } from "@mui/material";
import type { FormEvent } from "react";
import { useEffect } from "react";
import { useActivities } from "../../../lib/hooks/useActivities";

type Props = {
    activity?: Activity
    closeForm: () => void
}

export default function ActivityForm({ activity, closeForm }: Props) {
    const { updateActivity, createActivity } = useActivities();

    useEffect(() => {
        if (updateActivity.isSuccess || createActivity.isSuccess) {
            closeForm();
        }
    }, [updateActivity.isSuccess, createActivity.isSuccess, closeForm]);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);

        const data: { [key: string]: FormDataEntryValue } = {}
        formData.forEach((value, key) => {
            data[key] = value;
        });

        const activityData: Activity = {
            id: activity?.id || '',
            title: data.title as string,
            description: data.description as string,
            category: data.category as string,
            date: (data.date as string) + ':00',
            city: data.city as string,
            venue: data.venue as string,
            latitude: parseFloat(data.latitude as string) || 0,
            longitude: parseFloat(data.longitude as string) || 0,
            isCancelled: activity?.isCancelled || false
        };

        if (activity) {
            updateActivity.mutate(activityData);
        } else {
            createActivity.mutate(activityData);
        }
    }

    return (
        <Paper sx={{ borderRadius: 3, padding: 3 }}>
            <Typography fontSize="1rem" gutterBottom color="primary">
                创建活动
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
                    <Button onClick={() => closeForm()} color="inherit">取消</Button>
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