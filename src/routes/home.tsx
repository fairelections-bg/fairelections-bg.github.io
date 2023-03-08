import { HomeCarousel } from './home-carousel';
import { HomeWelcome } from './home-welcome';
import { HomeFrauds } from './home-frauds';
import { HomeMembers } from './home-members';

export const Home = () => {

    return (
        <>
            <HomeCarousel />
            <HomeWelcome />
            <HomeFrauds />
            <HomeMembers />
        </ >
    );
};