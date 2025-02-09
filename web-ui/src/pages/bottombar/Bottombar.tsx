import { Button } from "@/components/ui/button";

interface BottombarProps {
    className?: string;
    scanGayness: () => void;
}

const Bottombar: React.FC<BottombarProps> = ({
    className,
    scanGayness,
}) => {
    return (
        <div className={`${className} flex w-full h-28 justify-center items-center z-10`}>
            <Button variant="gay" className="font-luckiest-guy flex justify-center align-center rounded-full border-2" onClick={() => scanGayness()}>
                Scan Gayness
            </Button>
        </div>
    );
}

export default Bottombar;