import { AnimatePresence } from "framer-motion";
import { PodcastCard } from "./PodcastsCard";
import { useState } from "react";

export const PodcastsList = ({ podcasts }) => {
    const [activePodcastId, setActivePodcastId] = useState(null);

    const handlePlayToggle = (id) => {
        setActivePodcastId(activePodcastId === id ? null : id);
    };

    return (
        <ul className="podcasts__list list-reset">
            <AnimatePresence initial={false}>
                {podcasts.map((podcast) => (
                    <PodcastCard 
                        key={podcast.id} 
                        podcast={podcast}
                        isPlaying={activePodcastId === podcast.id}
                        onPlayToggle={() => handlePlayToggle(podcast.id)}
                    />
                ))}
            </AnimatePresence>
        </ul>
    );
};