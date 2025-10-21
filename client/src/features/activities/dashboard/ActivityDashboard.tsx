import { Box } from "@mui/material";
import ActivityList from "./ActivityList";
import ActivityDetail from "../details/ActivityDetail";
import ActivityForm from "../form/ActivityForm";

type Props = {
    activities: Activity[]
    selectActivity: (id: string) => void
    cancelSelectActivity: () => void
    selectedActivity?: Activity
    openForm: (id: string) => void
    closeForm: () => void
    editMode: boolean
    submitForm: (activity: Activity) => void
    deleteActivity: (id: string) => void
}

export default function ActivityDashboard({
    activities,
    selectActivity,
    cancelSelectActivity,
    selectedActivity,
    openForm,
    closeForm,
    editMode,
    submitForm,
    deleteActivity
}: Props) {
    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 3 }}>
            <Box>
                <ActivityList
                    activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                />
            </Box>
            <Box>
                {selectedActivity && !editMode && (
                    <ActivityDetail
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                )}
                {editMode && (
                    <ActivityForm
                        closeForm={closeForm}
                        activity={selectedActivity}
                        submitForm={submitForm}
                    />
                )}
            </Box>
        </Box>
    );
}