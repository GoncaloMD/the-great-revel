import React from "react";

import './Home.css';

import TwitchIcon from "./images/icons/twitch-icon.png";
import YoutubeIcon from "./images/icons/youtube-icon.png";
import DiscordIcon from "./images/icons/discord-icon.png";
import TwitterIcon from "./images/icons/twitter-icon.png";

function Home() {
    return (
        <div className="text">
            <p>Welcome to the Great Revel. I'm Bosseidon, a dude that plays Magic: The Gathering. I'm particularly fond of the Modern format, with Burn being my deck of choice. I like it so much that I decided to create this page to publish content about it.</p>

            <p>There's also a Discord for Red based aggro decks, with channels for every format, which I'm a part of, and am quite active there. Feel free to join if these strategies interest you, or if you have any questions you want answering.</p>

            <div className="d-flex justify-content-center">
            <a href="https://www.twitch.tv/bosseidonred" target="_blank">
                <img   
                    width="50"
                    height="50"
                    className="d-inline-block align-middle" 
                    src={TwitchIcon}
                />
            </a>
            <a href="https://www.youtube.com/channel/UCyeMyVHflupyMPKDZoN6IIw" target="_blank">
                <img
                    width="50"
                    height="50"
                    className="d-inline-block align-middle" 
                    src={YoutubeIcon}
                />
            </a>
            <a href="https://discord.gg/HMcGTjE" target="_blank">
                <img
                    width="50"
                    height="50"
                    className="d-inline-block align-middle" 
                    src={DiscordIcon}
                />
            </a>
            <a href="https://twitter.com/BosseidonRed" target="_blank">
                <img
                    width="50"
                    height="50"
                    className="d-inline-block align-middle" 
                    src={TwitterIcon}
                />
            </a>
            </div>

        </div>
    );
}

export default Home;