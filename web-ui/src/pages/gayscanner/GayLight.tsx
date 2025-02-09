interface GayLightProps {
    className?: string;
    color: string;
    active: boolean;
}

const GayLight: React.FC<GayLightProps> = ({
    className,
    color,
    active,
}) => {
    return (
        <div className={`size-8 rounded-full border-2 blur-xs animate-pulse ${active ? color : "bg-black/30"} ${className}`}></div>
    );
}

export default GayLight;