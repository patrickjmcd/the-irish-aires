interface SongProps {
    title: string;
    chorusLines: string[];
}

const Song = ({title, chorusLines}: SongProps) => {
    return (
        <div id={title.toLowerCase().replaceAll(' ', '-')}>
            <h1 className="text-xl mb-3">{title}</h1>
            <ul>
                {chorusLines.map((line, index) => (
                    <li key={index}>{line}</li>
                ))}
            </ul>
        </div>
    );
}

export default Song;