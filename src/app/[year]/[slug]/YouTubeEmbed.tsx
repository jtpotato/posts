function YouTubeEmbed({ src } : { src: string }) {
  return (<iframe src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className="w-full aspect-video"></iframe>);
}

export default YouTubeEmbed;