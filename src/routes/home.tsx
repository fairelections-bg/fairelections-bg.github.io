import React from 'react';
import { HomeCarousel } from './home-carousel';
import { HomeWelcome } from './home-welcome';
import { HomeAboutUs } from './home-about-us';
import { HomeFrauds } from './home-frauds';
import { HomeMembers } from './home-members';

export const Home = () => {
    return (
        <main>
            <HomeCarousel />
            <HomeWelcome />
            <HomeAboutUs />
            <HomeFrauds />
            <HomeMembers />
        </main >
    );
};