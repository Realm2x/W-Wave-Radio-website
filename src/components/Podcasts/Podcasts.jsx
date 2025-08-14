import { useState } from 'react';
import { podcastsData } from '../../data/podcastsData';
import { PodcastsList } from './PodcastsList';
import { PodcastsButton } from './PodcastsButton';
import './Podcasts.css';

export default function Podcasts() {
  const [showAllPodcasts, setShowAllPodcasts] = useState(false);
  const visiblePodcasts = showAllPodcasts 
    ? podcastsData 
    : podcastsData.filter(podcast => !podcast.initiallyHidden);
  
  const hiddenPodcastsCount = podcastsData.filter(p => p.initiallyHidden).length;

  return (
    <section className="podcasts" id="podcasts">
      <div className="container podcasts__container section-offset">
        <h2 className="podcasts__title title-reset title">Подкасты</h2>
        
        <PodcastsList podcasts={visiblePodcasts} />

        {hiddenPodcastsCount > 0 && (
          <PodcastsButton
            onClick={() => setShowAllPodcasts(!showAllPodcasts)}
            label={showAllPodcasts ? "Скрыть" : "Ещё подкасты"}
            count={showAllPodcasts ? null : hiddenPodcastsCount}
          />
        )}
      </div>
    </section>
  );
}