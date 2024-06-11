import { useEffect, useState } from "react";
import { useRouteProtect } from "../../../Hooks/useRouteProtect";
import { useTitle } from "../../../Hooks/useTitle";
import { statisticsService } from "../../../Services/StatisticsService";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts";


export function Statistics(): JSX.Element {
    useTitle("Statistics");
    useRouteProtect();
    const [membersCount, setMembersCount] = useState<number>(0);
    const [likesCount, setLikesCount] = useState<number>(0);
    const [vacationsStatistics, setVacationsStatistics] = useState<any[]>([]);
    const [likesStatistics, setLikesStatistics] = useState<any[]>([]);
    useEffect(() => {
        statisticsService.getUsersCount().then((data) => {
            setMembersCount(data.total_users);
        }).catch((err) => {
            console.log(err);
        });
        statisticsService.getVacationsStatistics().then((data) => {
            setVacationsStatistics([
                { value: data.past_vacations, label: `Vacations that over (${data.past_vacations})`, color: "#0787E3" },
                { value: data.on_going_vacations, label: `On going vacations (${data.on_going_vacations})`, color: "#406CE5" },
                { value: data.future_vacations, label: `Future vacations. (${data.future_vacations})`, color: "#0742E3" },
            ]);
        }).catch((err) => {
            console.log(err);
        });
        statisticsService.getLikesCount().then((data: any) => {
            setLikesCount(data.total_likes);
        }).catch((err) => {
            console.log(err);
        });
        statisticsService.getLikesStatistics().then((data: any[]) => {
            const colors=["#E64B2F","#E67640","#E37507","#E34E07","#E63C4A","#E6D3B1","#E6A840","#E6852E","#E5C66D","#E39107","#E66F3C","#E6DFB1",]
            const statistics = data?.map((item, index) => {
                return {
                    value: item.likes,
                    label: `${item.destination} (${item.likes})`,
                    color:colors[index],
                };
            });
            setLikesStatistics(statistics);
            
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    return (
        <Grid container spacing={2} sx={{textAlign:"center"}}>
            <Grid item md={6} xs={12}>
                <Card variant="outlined" sx={{width:600,margin:"5px auto",height:300,}}>
                    <CardContent>
                        <Typography variant="h5" sx={{mb:5}}>Members count:</Typography>
                        <Typography sx={{fontWeight:700,fontSize:"16pt"}}>{membersCount}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card variant="outlined" sx={{width:600,margin:"5px auto",height:300,}}>
                    <CardContent>
                        <Typography variant="h5" sx={{textAlign:"center"}}>Likes count:</Typography>
                        <Typography>{likesCount}</Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card variant="outlined" sx={{width:600,margin:"5px auto",height:300,}}>
                    <CardContent>
                        <Typography variant="h5" sx={{textAlign:"center"}}>Vacations statistics:</Typography>
                        <PieChart
                            series={[
                                {
                                    data: vacationsStatistics,
                                },
                            ]}
                            width={600}
                            height={200}
                        />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item md={6} xs={12}>
                <Card variant="outlined" sx={{width:600,margin:"5px auto",height:300,}}>
                    <CardContent>
                    <Typography variant="h5" sx={{textAlign:"center"}}>Likes statistics:</Typography>
                        <PieChart
                            series={[
                                {
                                    data: likesStatistics,
                                },
                            ]}
                            width={600}
                            height={200}
                        />
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    );
}
