import GayLight from "@/pages/gayscanner/GayLight";
import { useEffect, useState } from "react";

interface GayScannerProps {
    className?: string;
    setScanningGayness: React.Dispatch<React.SetStateAction<boolean>>;
}

const GayScanner: React.FC<GayScannerProps> = ({
    className,
    setScanningGayness,
}) => {
    const [redActive, setRedActive] = useState<boolean>(false);
    const [orangeActive, setOrangeActive] = useState<boolean>(false);
    const [yellowActive, setYellowActive] = useState<boolean>(false);
    const [greenActive, setGreenActive] = useState<boolean>(false);
    const [blueActive, setBlueActive] = useState<boolean>(false);
    const [purpleActive, setPurpleActive] = useState<boolean>(false);
    const [blurActive, setBlurActive] = useState<boolean>(false);
    const [showGayTimer, setShowGayTimer] = useState<boolean>(true);
    const [showYou, setShowYou] = useState<boolean>(false);
    const [showAre, setShowAre] = useState<boolean>(false);
    const [showGay, setShowGay] = useState<boolean>(false);

    // Arrays with 50% gay and 50% non-gay terms for each word
    const word1Options = [
        "SUPER", "HOMIE", "NOT SO COOL", "OUTSIDE THE BOX", "GLOW UP", "BASIC", "FRESH", "PINK", "GAY", "QUEER",
        "STR8", "IN THE CLOSET", "LIT", "DAD VIBES", "MILD", "HETERO", "REALLY COOL", "NOT GAY", "BIG MOOD", "BADDIE",
        "FAB", "CAMPY", "DRAG QUEEN", "FIERCE", "QUEER EYE", "GAY AS HELL", "BOYISH", "PINKY PROMISE", "TWINK", "CUTE",
        "UNAPOLOGETIC", "SNATCHED", "FULLY GAY", "HOMO", "NON-BINARY", "IN YOUR FACE", "ALPHA", "BUSTED", "SASSY",
        "GLAM", "EXTRA", "GLOWING", "BRATTY", "SICKENING", "BADDIE VIBES", "HYPER", "PRIDE", "HOMOEROTIC", "BUBBLY",
        "TENDER", "THOTTY", "UNICORN", "QUEER BEYOND MEASURE", "CIS", "BOYFRIEND MATERIAL", "BADASS", "HOTTIE", "CAMP QUEEN",
        "NANA", "DIVA", "BAREBACKING", "FLAMBOYANT", "UNTAMED", "WHATEVER", "DAD ENERGY", "ICONIC", "FABULOUS", "OUT LOUD"
    ];
    
    const word2Options = [
        "MEGA", "MILD", "OVER THE TOP", "NOTHING SPECIAL", "HIGHKEY", "FASHIONABLE", "SASSY", "MASCULINE", "TWINKY", "DEAD",
        "HOMO", "FIRE", "BASIC", "CUTE", "BOYISH", "BUILT", "DRAGGED", "CHILL", "FREAKY", "FABULOUS",
        "DRAG", "FIERCE", "HAWT", "GAY BRAIN", "HOMOPHOBIC", "FASHION SLAY", "LOWKEY", "HOMIE", "SQUAD GOALS", "SNATCHED",
        "BREEZY", "DADDY ENERGY", "CIS NORMATIVE", "YASS QUEEN", "MASC", "SUGAR", "PINK WAVE", "THOT", "TWINKIFIED",
        "SWEATY", "LOUD", "BEAUTIFUL", "QUEER VIBES", "KILLING IT", "UNDERSTATED", "ALL THE WAY", "LOUD AF", "SIZZLING",
        "CAMP", "SOGAY", "HOT AF", "STRUT", "TIGHT", "FEELING YOURSELF", "BAD BITCH", "DOPE", "CREEPY", "SICK",
        "EXTRA AF", "TWO-TONED", "BASIC", "DADDY ISSUES", "SASSY AF", "TOO MUCH", "SOFT", "TENDERHEARTED", "VULGAR",
        "WEIRDO", "DADDY VIBES", "BLESSED", "UNREAL", "FRESH", "MELTDOWN", "DEGENERATE", "BUILT", "COOL KIDS", "CHILL AF",
        "UNTOUCHABLE", "TWINKLE", "HOTTER THAN YOU", "YES DADDY", "SASS FACTOR"
    ];
    
    const word3Options = [
        "GAY", "STEREOTYPICAL", "LIT", "QUEER", "BUTCH", "FABULOUS", "CAMP", "PRIDE", "FEM", "PINK", 
        "STRAIGHT", "HOMOPHOBIC", "HETERO", "LAME", "SO BROS", "AWKWARD", "DAD ENERGY", "NAH", "FLAMBOYANT", "GAY AS HELL",
        "BLESSED", "QUEER EYE", "TWINKISH", "FIRE", "GAY AF", "PINK POSSE", "PDA", "ULTRA-GAY", "THOTTY", "BUBBLY",
        "QUEER IN THE STREETS", "FABULOUSLY GAY", "SEXUAL HEALING", "SISSY", "STRAIGHT TO HELL", "LIKE A GIRL", "SLAY QUEEN",
        "UNAPOLOGETIC", "LGBTQ+", "FUCKED UP", "SOFTBOY", "LADYBOY", "YAS", "FEMME", "SASSY", "TOO STRAIGHT",
        "CUTE BOY", "HOTTER THAN YOU", "OUT LOUD", "NON-CONFORMING", "SEXY AS HELL", "EXTRA", "LOOKING GOOD", "BUTCHY",
        "HOMOEROTIC", "QUEER AND PROUD", "NOT GAY", "GOING STRAIGHT", "LOVABLE", "UNAPOLOGETICALLY FEM", "LEZ", "STRAIGHT UP",
        "NO HOMO", "BASIC DADDY", "QUEER QUEEN", "STRAIGHT FROM THE STREETS", "SO BROS", "FLIRTY", "OUT AND PROUD", "DEAD AF",
        "TOO MANY MANS", "THE BOY IS MINE", "PRINCESS VIBES", "UNCLE DAD", "THAT BITCH", "WEIRDO", "PINKIES UP", "TOO CUTE"
    ];
    

    // Randomly select a word from each array
    const word1 = word1Options[Math.floor(Math.random() * word1Options.length)];
    const word2 = word2Options[Math.floor(Math.random() * word2Options.length)];
    const word3 = word3Options[Math.floor(Math.random() * word3Options.length)];

    useEffect(() => {
        const timer1 = setTimeout(() => setRedActive(true), 0);
        const timer2 = setTimeout(() => setOrangeActive(true), 250);
        const timer3 = setTimeout(() => setYellowActive(true), 500);
        const timer4 = setTimeout(() => setGreenActive(true), 750);
        const timer5 = setTimeout(() => setBlueActive(true), 1000);
        const timer6 = setTimeout(() => setPurpleActive(true), 1250);
        const timer7 = setTimeout(() => setBlurActive(true), 1500);
        const timer8 = setTimeout(() => setShowGayTimer(false), 1750);
        const timer9 = setTimeout(() => setScanningGayness(false), 6000);
        const timer10 = setTimeout(() => setShowYou(true), 2000);
        const timer11 = setTimeout(() => setShowAre(true), 2500);
        const timer12 = setTimeout(() => setShowGay(true), 3000);

        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
            clearTimeout(timer6);
            clearTimeout(timer7);
            clearTimeout(timer8);
            clearTimeout(timer9);
            clearTimeout(timer10);
            clearTimeout(timer11);
            clearTimeout(timer12);
        };
    }, []);

    return (
        <div className={`${className} flex flex-1 w-full justify-center items-center z-10`}>
            <div className="flex flex-col aspect-square h-full justify-around items-center">
                {showGayTimer ? (
                    <>
                        <div className="flex w-full h-8 justify-center items-center">
                            <div className="flex bg-black/50 rounded-full pt-2 px-2 border-2 ">
                                <p className="flex font-luckiest-guy bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text text-2xl pointer-events-none">Are you even gay?</p>
                            </div>
                        </div>
                        <div className={`flex bg-blue-500 w-min p-2 rounded-full bg-white/50 justify-between items-center space-x-8 border-2 shadow ${blurActive ? "blur-sm animate-ping" : ""}`}>
                            <GayLight color="bg-red-500/90" active={redActive} />
                            <GayLight color="bg-orange-500/90" active={orangeActive} />
                            <GayLight color="bg-yellow-500/90" active={yellowActive} />
                            <GayLight color="bg-green-500/90" active={greenActive} />
                            <GayLight color="bg-blue-500/90" active={blueActive} />
                            <GayLight color="bg-purple-500/90" active={purpleActive} />
                        </div>
                    </>
                ) : (
                    <>
                        {showYou && !showAre && (
                            <div className="flex w-full h-8 justify-center items-center self-center">
                                <p className="flex font-luckiest-guy bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text text-3xl animate-ping pointer-events-none">You</p>
                            </div>
                        )}

                        {showAre && !showGay && (
                            <div className="flex w-full h-8 justify-center items-center">
                                <p className="flex font-luckiest-guy bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl animate-ping pointer-events-none">Are</p>
                            </div>
                        )}

                        {showGay && (
                            <div className="flex flex-col w-full h-8 justify-center items-center space-x-2 animate-bounce">
                                <p className="flex font-luckiest-guy bg-gradient-to-r from-red-500 to-orange-500 text-transparent bg-clip-text text-5xl pointer-events-none">{word1}</p>
                                <p className="flex font-luckiest-guy bg-gradient-to-r from-yellow-500 to-green-500 text-transparent bg-clip-text text-3xl pointer-events-none">{word2}</p>
                                <p className="flex font-luckiest-guy bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-5xl pointer-events-none">{word3}</p>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default GayScanner;
