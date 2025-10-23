import { Box } from "@mui/material";
import ActivityList from "./ActivityList";
import { useActivities } from "../../../lib/hooks/useActivities";
import LoadingComponent from "../../../app/layout/LoadingComponent";


export default function ActivityDashboard() {
   const {activities, isPending} = useActivities();
   
   if(!activities||isPending) return <LoadingComponent />

    return (
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' }, gap: 3 }}>
            <Box>
                <ActivityList />
            </Box>
            <Box>
               Activity Filter
            </Box>
        </Box>
    );
}